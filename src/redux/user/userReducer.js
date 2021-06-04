import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { setUserLoading, loginSuccess, logOutSuccess } from "../auth/authActions";
import { AuthDailyRateSuccess } from "../dailyRate/dailyRateActions";
import { getUserError, getUserSuccess, resetError, setError } from "./userActions";

const userInfoReducer = createReducer(
  { username: "", email: "", id: "" },

  {
    [loginSuccess]: (
      _,
      {
        payload: {
          user: { username, email, id }
        }
      }
    ) => ({
      username,
      email,
      id
    }),
    [logOutSuccess]: () => ({}),
    [getUserSuccess]: (_, { payload: { username, email, id } }) => ({
      username,
      email,
      id
    })
  }
);

const userDataReducer = createReducer(
  { weight: 0, height: 0, age: 0, bloodType: 0, desiredWeight: 0, dailyRate: 0 },
  {
    [loginSuccess]: (
      _,
      {
        payload: {
          user: {
            userData: { weight, height, age, bloodType, desiredWeight, dailyRate }
          }
        }
      }
    ) => ({
      weight,
      height,
      age,
      bloodType,
      desiredWeight,
      dailyRate
    }),
    [getUserSuccess]: (
      _,
      {
        payload: {
          userData: { weight, height, age, bloodType, desiredWeight, dailyRate }
        }
      }
    ) => ({
      weight,
      height,
      age,
      bloodType,
      desiredWeight,
      dailyRate
    }),
    [logOutSuccess]: () => ({})
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
  [getUserSuccess]: (_, { payload }) => payload.userData.notAllowedProducts,
  [loginSuccess]: (_, { payload }) => payload.user.userData.notAllowedProducts,
  [AuthDailyRateSuccess]: (_, { payload }) => payload.notAllowedProducts
});

const userReducers = combineReducers({
  data: userInfoReducer,
  isLoadind: userLoaderReducer,
  error: userErrorReducer,
  notAllowedProducts: notAllowedReducer,
  userData: userDataReducer
});

export default userReducers;
