import axios from "axios";
import { logOutSuccess, updateAccessToken } from "../redux/auth/authActions";
import { store } from "../redux/store";

const baseURL = "https://slimmom-backend.goit.global";

const axiosInstance = axios.create({ baseURL });

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error = null, token = null) => {
  failedQueue.forEach(promise => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  res => res,
  err => {
    const originalRequest = err.config;
    if (err.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            originalRequest.headers["Authorization"] = "Bearer " + token;
            return axios(originalRequest);
          })
          .catch(err => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;
      const { auth } = store.getState();
      const { refreshToken, sid } = auth.tokens;
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${baseURL}/auth/refresh`,
            {
              sid
            },
            { headers: { Authorization: "Bearer " + refreshToken } }
          )
          .then(({ data }) => {
            axios.defaults.headers.common["Authorization"] = "Bearer " + data.newAccessToken;
            originalRequest.headers["Authorization"] = "Bearer " + data.newAccessToken;
            store.dispatch(updateAccessToken(data));
            processQueue(null, data.newAccessToken);
            resolve(axios(originalRequest));
          })
          .catch(err => {
            processQueue(err, null);
            // store.dispatch(showMessage({ message: 'Expired Token' }));
            const { status } = err.response;
            if (status === 404 || status === 401) {
              store.dispatch(logOutSuccess());
            } else reject(err);
          })
          .then(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;
