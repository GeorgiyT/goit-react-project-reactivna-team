import { createReducer } from "@reduxjs/toolkit";
import moment from "moment";
import { getUserSuccess } from "../user/userActions";
import productAction from "./productAction";

// const toAddProduct = (state, action) => {
//   // return [...state,action.payload]
//   return action.payload;
// };

// const toDeleteProduct = (state, { payload }) => {
//   console.log(state, "rer", state.eatenProducts);
//   return state?.eatenProducts.filter(item => item.id !== payload);
// };

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
      payload?.id ? payload : { ...state, daySummary: payload, eatenProducts: [], id: "", date: payload.date },
    [productAction.addProductSuccess]: (state, { payload }) => {
      return { ...state, eatenProducts: payload.day.eatenProducts, daySummary: payload.daySummary };
    },
    [productAction.deleteProductSuccess]: (state, { payload }) => {
      return {
        ...state,
        eatenProducts: state.eatenProducts.filter(item => item.id !== payload.eatenProductId),
        daySummary: payload.newDaySummary
      };
    }
  }
);
// const products = createReducer(
//   {
//     daySummary: {
//       date: "",
//       kcalLeft: 0,
//       kcalConsumed: 0,
//       dailyRate: 0,
//       percentsOfDailyRate: 0
//     }
//   },
//   {
//     [productAction.fetchProductSuccess]: (state, action) => action.payload,
//     [productAction.addProductSuccess]: toAddProduct,
//     [productAction.deleteProductSuccess]: toDeleteProduct
//   }
// );

// export default products;
