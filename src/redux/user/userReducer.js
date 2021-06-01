import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { create } from "yup/lib/array";
import { setUserLoading, loginSuccess, logOutSuccess } from "../auth/authActions";
import {addProductSuccess, fetchProductSuccess} from "../products/productAction";
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
const notAllowedReducer = createReducer([], {
  [getUserSuccess]: (_, { payload }) => payload.userData.notAllowedProducts
});

const daysReducer = createReducer([], {
  [getUserSuccess]: (_, { payload }) => payload.userData.days,
  [addProductSuccess]: (state, { payload }) => [...state, payload.day],
  [fetchProductSuccess]: (state, { payload }) => [...state, payload.day]
});

// const dailyRateReducer = createReducer([], {
//   [getUserSuccess]: (_, { payload }) => payload.userData.days
// });

const userReducers = combineReducers({
  data: userDataReducer,
  isLoadind: userLoaderReducer,
  error: userErrorReducer,
  notAllowedProducts: notAllowedReducer,
  days: daysReducer
  // dailyRate:dailyRateReducer
});

export default userReducers;
