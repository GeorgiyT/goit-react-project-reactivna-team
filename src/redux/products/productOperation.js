import axiosInstance from "../../utils/axiosInstance";
import token from "../auth/token";
import * as productAction from "./productAction";

const searchProducts = query => async (dispatch, getState) => {
  try {
    if (!query.includes("(") || !query.includes("%") || !query.includes("+") || !query.includes("&")) {
      const { data } = await axiosInstance.get(`/product?search=${query}`, {
        headers: {
          Authorization: `Bearer ${getState().auth.tokens.accessToken}`
        }
      });
      dispatch(productAction.getProductsList(data));
    }
  } catch (error) {
    console.log("error :>> ", error);
  }
};

const addProduct = (date, productId, weight) => dispatch => {
  dispatch(productAction.addProductRequest());
  axiosInstance
    .post("/day", { date, productId, weight })
    .then(response => dispatch(productAction.addProductSuccess(response.data)))
    .catch(error => dispatch(productAction.addProductError(error.message)));
};

const fetchProduct = data => (dispatch, getState) => {
  token.set(getState().auth?.tokens?.accessToken);

  dispatch(productAction.fetchProductsRequest());
  axiosInstance
    .post("/day/info", data)
    .then(response => dispatch(productAction.fetchProductSuccess({ ...response.data, ...data })))
    .catch(error => {
      dispatch(productAction.fetchProductError(error.message));
    });
};

const deleteProduct = (dayId, eatenProductId) => (dispatch, getState) => {
  dispatch(productAction.deleteProductsRequest());
  token.set(getState().auth?.tokens?.accessToken);
  axiosInstance
    .delete("/day", { data: { dayId, eatenProductId } })
    .then(response => dispatch(productAction.deleteProductSuccess({ ...response.data, eatenProductId })))
    .catch(error => {
      dispatch(productAction.fetchProductError(error.message));
    });
};

export { addProduct, fetchProduct, deleteProduct, searchProducts };
