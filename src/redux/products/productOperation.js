import axiosInstance from "../../utils/axiosInstance";
import token from "../auth/token";
import productAction from "./productAction";

const addProduct = (date, productId, weight) => dispatch => {
  dispatch(productAction.addProductRequest());
  axiosInstance
    .post("/day", { date, productId, weight })
    .then(response => dispatch(productAction.addProductSuccess(response.data)))
    .catch(error => dispatch(productAction.addProductError(error.message)));
};

const fetchProduct = data => (dispatch, getState) => {
  console.log("====================================");
  console.log("====================================");

  token.set(getState().auth?.tokens?.accessToken);

  dispatch(productAction.fetchProductsRequest());
  axiosInstance
    .post("/day/info", data)
    .then(response => dispatch(productAction.fetchProductSuccess(response.data)))
    .catch(error => {
      dispatch(productAction.fetchProductError(error.message));
    });
};

const deleteProduct = (dayId, eatenProductId) => dispatch => {
  dispatch(productAction.deleteProductsRequest());
  console.log(dayId);
  console.log(eatenProductId);
  axiosInstance
    .delete("/day", { data: { dayId, eatenProductId } })
    .then(response => dispatch(productAction.deleteProductSuccess(response.eatenProductId)))
    .catch(error => {
      dispatch(productAction.fetchProductError(error.message));
    });
};

export default { addProduct, fetchProduct, deleteProduct };
