import axios from "axios";
import dailyRateActions from "./dailyRateActions";

axios.defaults.baseURL = "https://slimmom-backend.goit.global";

// const token = {
//   set(token) {
//     console.log("set");
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

export const onFetchDailyRates = values => dispatch => {
  dispatch(dailyRateActions.fetchDailyRateRequest());

  axios
    .post("/daily-rate", values)
    .then(receivedData => {
      dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data));
    })
    .catch(error => {
      dispatch(dailyRateActions.fetchDailyRateError(error));
    });
};
export const onFetchDailyRatesAuthorised = (values, userId) => (dispatch, getState) => {
  dispatch(dailyRateActions.fetchDailyRateRequestAuth());

  axios
    .post(`/daily-rate/${userId}`, values)
    .then(receivedData => {
      dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data));
    })
    .catch(error => {
      dispatch(dailyRateActions.fetchDailyRateErrorAuth(error));
    });
};
