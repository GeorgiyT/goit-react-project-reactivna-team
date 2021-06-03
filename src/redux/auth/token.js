import axiosInstance from "../../utils/axiosInstance";

const token = {
  set(token) {
    axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosInstance.defaults.headers.Authorization = `Bearer `;
  }
};

export default token;
