import { createReducer } from "@reduxjs/toolkit";
import * as productAction from "../products/productAction";
import { getDailyRateSuccess } from "./dailyRateActions";
import { logOutSuccess } from "../auth/authActions";

const dailyRateState = {
  id: "",
  dailyRate: "",
  summaries: [
    {
      _id: "",
      date: "",
      kcalLeft: "",
      kcalConsumed: "",
      dailyRate: "",
      percentsOfDailyRate: "",
      userId: "",
      __v: ""
    }
  ],
  notAllowedProducts: []
};

const itemsReducer = createReducer(dailyRateState, {
  [getDailyRateSuccess]: (_, { payload }) => payload,
  [productAction.addProductSuccess]: (state, { payload }) => ({
    ...state,
    summaries: [...state.summaries, payload.daySummary]
  }),
  [productAction.fetchProductSuccess]: (state, { payload }) => ({
    ...state,
    summaries: [...state.summaries, payload.daySummary]
  }),
  [logOutSuccess]: () => dailyRateState
});

export default itemsReducer;
