import axiosInstance from "../../utils/axiosInstance";
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
    const response = await axiosInstance.post(`/daily-rate`, values);
    console.log(response);
    dispatch(getDailyRateSuccess(response.data));
  } catch (error) {
    dispatch(getDailyRateError(error));
  }
};

const AuthDailyRateOperation = values => async (dispatch, getState) => {
  dispatch(AuthDailyRateRequest());
  try {
    const response = await axiosInstance.post(`/daily-rate/${getState().user.data.id}`, values);
    dispatch(AuthDailyRateSuccess(response.data));
  } catch (error) {
    dispatch(AuthDailyRateError(error));
  }
};

export { getDailyRateOperation, AuthDailyRateOperation };
