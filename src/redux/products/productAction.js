import { createAction } from '@reduxjs/toolkit';

const addProductRequest = createAction('Product/addRequest')
const addProductSuccess = createAction('Product/addSuccess')
const addProductError = createAction('Product/addError')

const fetchProductsRequest = createAction('Product/fetchRequest')
const  fetchProductSuccess = createAction('Product/fetchSuccess')
const fetchProductError = createAction('Product/fetchError')

const deleteProductsRequest = createAction('Product/deleteRequest')
const  deleteProductSuccess = createAction('Product/deleteSuccess')
const deleteProductError = createAction('Product/deleteError')


export default {
    addProductRequest,
    addProductSuccess,
    addProductError,
    fetchProductsRequest,
    fetchProductSuccess,
    fetchProductError,
    deleteProductsRequest,
    deleteProductSuccess,
    deleteProductError

}