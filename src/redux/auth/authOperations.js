import axiosInstance from "../../utils/axiosInstance";

import {
  loginError,
  loginRequest,
  loginSuccess,
  logOutError,
  logOutRequest,
  logOutSuccess,
  registerError,
  registerRequest,
  registerSuccess
} from "./authActions";
import token from "./token";

export const registerOperation = (user, history) => async dispatch => {
  dispatch(registerRequest());

  try {
    const { data } = await axiosInstance.post(`/auth/register`, user);

    dispatch(registerSuccess(data));
    history.push("/login");
  } catch (error) {
    console.dir(error);
    dispatch(registerError(error.response.data?.message));
  }
};
export const loginOperation = user => async dispatch => {
  dispatch(loginRequest());

  try {
    const { data } = await axiosInstance.post(`/auth/login`, user);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.response.data?.message));
  }
};

export const logOutOperation = () => async (dispatch, getState) => {
  token.set(getState().auth.tokens.accessToken);
  dispatch(logOutRequest());

  try {
    await axiosInstance.post(`/auth/logout`);
    dispatch(logOutSuccess());
  } catch (error) {
    dispatch(logOutError(error.response.data?.message));
  }
};
