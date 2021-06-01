import { createReducer } from "@reduxjs/toolkit";
import { getDailyRateSuccess } from "./dailyRateActions";

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
  [getDailyRateSuccess]: (_, { payload }) => payload
});

export default itemsReducer;
