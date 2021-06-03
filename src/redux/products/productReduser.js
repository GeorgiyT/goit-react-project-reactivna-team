import { createReducer } from "@reduxjs/toolkit";
import productAction from "./productAction";

// const toAddProduct = (state, action) => {
//   // return [...state,action.payload]
//   return action.payload;
// };

// const toDeleteProduct = (state, { payload }) => {
//   console.log(state, "rer", state.eatenProducts);
//   return state?.eatenProducts.filter(item => item.id !== payload);
// };

export const searchedProducts = createReducer([], {
  [productAction.getProductsList]: (_, { payload }) => payload,
  [productAction.resetProductList]: () => [],
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
      percentsOfDailyRate: 0,
    },
  },
  {
    [productAction.fetchProductSuccess]: (state, { payload }) =>
      payload?.id
        ? payload
        : {
            ...state,
            daySummary: payload,
            eatenProducts: [],
            id: "",
            date: payload.date,
          },
    [productAction.addProductSuccess]: (state, { payload }) => {
      return {
        ...state,
        eatenProducts: payload.day.eatenProducts,
        daySummary: payload.daySummary,
      };
    },
    [productAction.deleteProductSuccess]: (state, { payload }) => {
      console.log(payload);

      return {
        ...state,
        eatenProducts: state.eatenProducts.filter(
          (item) => item.id !== payload.eatenProductId
        ),
        daySummary: payload.newDaySummary,
      };
    },
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
