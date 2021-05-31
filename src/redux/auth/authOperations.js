import axios from "axios";
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
axios.defaults.baseURL = "https://slimmom-backend.herokuapp.com/auth";

export const registerOperation = (user, history) => async dispatch => {
  dispatch(registerRequest());
  try {
    const { data } = await axios.post(`/register`, user);

    dispatch(registerSuccess(data));
    history.push("/login");
  } catch (error) {
    console.dir(error);
    dispatch(registerError(error.response.data?.error?.message));
  }
};
export const loginOperation = user => async dispatch => {
  dispatch(loginRequest());

  try {
    const { data } = await axios.post(`/login`, user);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.response.data?.error?.message));
  }
};

export const logOutOperation = user => async (dispatch, getState) => {
  token.set(getState().state.auth.tokens.accessToken);
  dispatch(logOutRequest());

  try {
    await axios.post(`/logout`);
    dispatch(logOutSuccess());
  } catch (error) {
    dispatch(logOutError(error.response.data?.error?.message));
  }
};
