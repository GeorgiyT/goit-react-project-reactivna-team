import { createReducer } from "@reduxjs/toolkit";
import { addProductSuccess, fetchProductSuccess } from "../products/productAction";
import { getUserSuccess } from "../user/userActions";

// export const daysReducer = createReducer([], {
//   [getUserSuccess]: (_, { payload }) => payload.days,
//   [addProductSuccess]: (state, { payload }) => [...state, payload.day],
//   [fetchProductSuccess]: (state, { payload }) => [...state, payload.day]
// });
