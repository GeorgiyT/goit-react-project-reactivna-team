import axios from 'axios';
import productAction from './productAction'

axios.defaults.baseURL = "https://slimmom-backend.goit.global";

const addProduct = (date, productId, weight) => (dispatch) => {
    dispatch(productAction.addProductRequest())
    axios.post("/day", { date, productId, weight })
    .then((response)=>dispatch(productAction.addProductSuccess(response.data.day || response.data.newDay )))
    .catch((error)=>dispatch(productAction.addProductError(error.message)))
}

const fetchProduct = (data) => (dispatch) => {
    dispatch(productAction.fetchProductsRequest())
    axios.post("/day/info", { data })
        .then((response) => dispatch(productAction.fetchProductSuccess(response.data)))
    .catch((error)=>{dispatch(productAction.fetchProductError(error.message))})
}

const deleteProduct = (dayId,eatenProductId) => (dispatch) => {
    dispatch(productAction.deleteProductsRequest())
    axios.delete("day", { dayId, eatenProductId })
    .then((response)=>dispatch(productAction.deleteProductSuccess(response.eatenProductId)))
        .catch((error) => {
        dispatch(productAction.fetchProductError(error.message))
    })
}

export default {addProduct, fetchProduct, deleteProduct}