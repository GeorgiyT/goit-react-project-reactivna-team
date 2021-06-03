import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  loginError,
  loginRequest,
  loginSuccess,
  logOutError,
  logOutRequest,
  logOutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
  updateAccessToken
} from "./authActions";

const tokenReducer = createReducer(
  {},
  {
    [registerSuccess]: (_, { payload }) => {},
    [loginSuccess]: (_, { payload }) => ({
      accessToken: payload.accessToken,
      refreshToken: payload.refreshToken,
      sid: payload.sid
    }),
    [logOutSuccess]: () => ({}),
    [updateAccessToken]: (_, { payload }) => ({
      accessToken: payload.newAccessToken,
      refreshToken: payload.newRefreshToken,
      sid: payload.sid
    })
  }
);

const loaderReducer = createReducer(false, {
  [registerRequest]: state => !state,
  [registerSuccess]: state => !state,
  [registerError]: state => !state,
  [loginRequest]: state => !state,
  [loginSuccess]: state => !state,
  [loginError]: state => !state,
  [logOutSuccess]: () => false,
  [logOutRequest]: () => true,
  [logOutError]: () => false
});

const errorReducer = createReducer("", {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logOutError]: (_, { payload }) => payload
});

const authReducer = combineReducers({
  tokens: tokenReducer,
  isLoading: loaderReducer,
  error: errorReducer
});

export default authReducer;
