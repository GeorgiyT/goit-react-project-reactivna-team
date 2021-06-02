import { createReducer } from "@reduxjs/toolkit";
import productAction from "./productAction";

const toAddProduct = (state, action) => {
  // return [...state,action.payload]
  return action.payload
};

const toDeleteProduct = (state, { payload }) => {
  console.log(state,"rer",state.eatenProducts);
  return state?.eatenProducts.filter(item => item.id !== payload);
 
};

export const currentDay = createReducer(
  {},
  {
    [productAction.fetchProductSuccess]: (state, action) => action.payload
  }
);
const products = createReducer(
  [],
  {
    [productAction.fetchProductSuccess]: (state, action) => action.payload,
    [productAction.addProductSuccess]: toAddProduct,
    [productAction.deleteProductSuccess]: toDeleteProduct
  }
);


export default products;
