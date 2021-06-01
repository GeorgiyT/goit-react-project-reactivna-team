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
axios.defaults.baseURL = "https://slimmom-backend.goit.global";

export const registerOperation = (user, history) => async dispatch => {
  dispatch(registerRequest());

  try {
    const { data } = await axios.post(`/auth/register`, user);

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
    const { data } = await axios.post(`/auth/login`, user);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.response.data?.message));
  }
};

export const logOutOperation = () => async (dispatch, getState) => {
  token.set(getState().auth.tokens.accessToken);
  dispatch(logOutRequest());

  try {
    await axios.post(`/auth/logout`);
    dispatch(logOutSuccess());
  } catch (error) {
    dispatch(logOutError(error.response.data?.message));
  }
};
