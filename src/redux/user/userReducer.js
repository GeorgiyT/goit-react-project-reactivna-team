import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { setUserLoading, loginSuccess, logOutSuccess } from "../auth/authActions";
import { AuthDailyRateSuccess } from "../dailyRate/dailyRateActions";
import { addProductSuccess, fetchProductSuccess } from "../products/productAction";
import { getUserError, getUserSuccess, resetError, setError } from "./userActions";

const userInfoReducer = createReducer(
  {},

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
  {},
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
    // [logOutSuccess]: () => ({})
    // [AuthDailyRateSuccess]: (_, { payload: { dailyRate } }) => ({
    //   dailyRate
    // })
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

// const dailyRateReducer = createReducer([], {
//   [getUserSuccess]: (_, { payload }) => payload.userData.days
// });

const userReducers = combineReducers({
  data: userInfoReducer,
  isLoadind: userLoaderReducer,
  error: userErrorReducer,
  notAllowedProducts: notAllowedReducer, //____________SPROSIT U TOPOLYA GDE ZHIVET LYUBIMAYA !!!!!!!!!!!!!!!!!!
  userData: userDataReducer
  // dailyRate: dailyRateReducer
});

export default userReducers;
