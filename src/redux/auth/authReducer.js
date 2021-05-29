import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { loginError, loginRequest, loginSuccess, logOut, registerError, registerRequest, registerSuccess } from "./authActions";

const tokenReducer = createReducer(
  {},
  {
    [registerSuccess]: (_, { payload }) => {},
    [loginSuccess]: (_, { payload }) => ({
      accessToken: payload.accessToken,
      refreshToken: payload.refreshToken,
      sid: payload.sid
    }),
    [logOut]: () => ({})
  }
);

const loaderReducer = createReducer(false, {
  [registerRequest]: state => !state,
  [registerSuccess]: state => !state,
  [registerError]: state => !state,
  [loginRequest]: state => !state,
  [loginSuccess]: state => !state,
  [loginError]: state => !state,
  [logOut]: () => false
});

const errorReducer = createReducer("", {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logOut]: () => ""
});

const authReducer = combineReducers({
  tokens: tokenReducer,
  isLoading: loaderReducer,
  error: errorReducer
});

export default authReducer;
