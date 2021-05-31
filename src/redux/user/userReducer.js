import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { setUserLoading, loginSuccess, logOutSuccess } from "../auth/authActions";
import { resetError, setError } from "./userActions";

const userReducer = createReducer(
  {},
  {
    [loginSuccess]: (_, { payload }) => ({
      ...payload.user
    }),
    [logOutSuccess]: () => ({})
  }
);
const userLoaderReducer = createReducer(false, {
  [setUserLoading]: state => !state
});

const userErrorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => ""
});

const userReducers = combineReducers({
  data: userReducer,
  isLoadind: userLoaderReducer,
  error: userErrorReducer
});

export default userReducers;
