import { createReducer } from '@reduxjs/toolkit';
import authActions from '../auth/authActions';
import productAction from './productAction';


const toAddProduct = (state, action) => {
  return action.payload;
};

// const toDeleteProduct = (state, { payload }) => ({
//   ...state,
//   eatenProducts: state.eatenProducts.filter(item => item.id !== payload),
// });

const products = createReducer(
  {},
  {
    [productAction.fetchProductSuccess]: (state, action) => action.payload,
    [productAction.addProductSuccess]: toAddProduct,
    [productAction.deleteProductSuccess]: toDeleteProduct,
    [authActions.logoutSuccess]: () => { },
    
    
    
  },
);

export default products;
