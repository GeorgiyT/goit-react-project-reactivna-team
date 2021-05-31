import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { setUserLoading, loginSuccess, logOutSuccess } from "../auth/authActions";
import { getUserError, getUserSuccess, resetError, setError } from "./userActions";

const userDataReducer = createReducer(
  {},

  {
    [loginSuccess]: (_, { payload }) => ({
      ...payload.user
    }),
    [logOutSuccess]: () => ({}),
    [getUserSuccess]: (_, { payload }) => payload
  }
);
const userLoaderReducer = createReducer(false, {
  [setUserLoading]: state => !state
});

const userErrorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
  [getUserError]: (_, { payload }) => payload
});

const userReducers = combineReducers({
  data: userDataReducer,
  isLoadind: userLoaderReducer,
  error: userErrorReducer
});

export default userReducers;
