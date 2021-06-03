import { createReducer } from "@reduxjs/toolkit";
import * as productAction from "./productAction";
import moment from "moment";
import { getUserSuccess } from "../user/userActions";
import { AuthDailyRateSuccess } from "../dailyRate/dailyRateActions";

export const searchedProducts = createReducer([], {
  [productAction.getProductsList]: (_, { payload }) => payload,
  [productAction.resetProductList]: () => []
});

export const currentDay = createReducer(
  {
    id: "",
    eatenProducts: [],
    date: "",
    daySummary: {
      date: "",
      kcalLeft: 0,
      kcalConsumed: 0,
      dailyRate: 0,
      percentsOfDailyRate: 0
    }
  },
  {
    [getUserSuccess]: (_, { payload }) => {
      const payloadDay = payload.days.find(day => day.date === moment(new Date()).format("yyyy-MM-DD"));
      return {
        id: payloadDay?._id,
        eatenProducts: payloadDay?.eatenProducts,
        date: payloadDay?.date,
        daySummary: payloadDay?.daySummary
      };
    },
    [productAction.fetchProductSuccess]: (state, { payload }) =>
      payload?.id
        ? payload
        : {
            ...state,
            daySummary: payload,
            eatenProducts: [],
            id: "",
            date: payload.date
          },
    [productAction.addProductSuccess]: (state, { payload }) => {
      return {
        ...state,
        eatenProducts: payload.day.eatenProducts,
        daySummary: payload.daySummary
      };
    },
    [productAction.deleteProductSuccess]: (state, { payload }) => {
      return {
        ...state,
        eatenProducts: state.eatenProducts.filter(item => item.id !== payload.eatenProductId),
        daySummary: payload.newDaySummary
      };
    },
    [AuthDailyRateSuccess]: (state, { payload }) => {
      const payloadDay = payload.summaries.find(day => day.date === moment(new Date()).format("yyyy-MM-DD"));
      return { ...state, daySummary: payloadDay };
    }
  }
);
