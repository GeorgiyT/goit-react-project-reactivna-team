import axios from "axios";
import {
  AuthDailyRateError,
  AuthDailyRateRequest,
  AuthDailyRateSuccess,
  getDailyRateError,
  getDailyRateRequest,
  getDailyRateSuccess
} from "./dailyRateActions";

const getDailyRateOperation = values => async dispatch => {
  dispatch(getDailyRateRequest());
  try {
    const response = await axios.post(`https://slimmom-backend.herokuapp.com/daily-rate`, values);
    console.log(response);
    dispatch(getDailyRateSuccess(response.data));
  } catch (error) {
    dispatch(getDailyRateError(error));
  }
};

const AuthDailyRateOperation = values => async (dispatch, getState) => {
  dispatch(AuthDailyRateRequest());
  try {
    const response = await axios.post(`https://slimmom-backend.herokuapp.com/daily-rate/${getState().user.data.id}`, values);
    dispatch(AuthDailyRateSuccess(response.data));
  } catch (error) {
    dispatch(AuthDailyRateError(error));
  }
};

export { getDailyRateOperation, AuthDailyRateOperation };
