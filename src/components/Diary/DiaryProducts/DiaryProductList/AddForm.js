import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productOperation, {
  searchProducts,
} from "../../../../redux/products/productOperation";
import DiaryListProduct from "../../DiaryListProduct";
import productAction from "../../../../redux/products/productAction";
import s from "./AddForm.module.css";

const initialState = {
  product: "",
  weight: "",
  productId: "",
  error: "",
};

const AddForm = ({ toggleModal }) => {
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();
  const date = useSelector((state) => state.currentDay.date);
  const productsQuery = useSelector((state) => state.searchedProducts);

  const handleChange = (e) => {
    const { name, value, id } = e.target;
    console.log("e.target.value :>> ", e.target);

    if (name === "productId") {
      setState((prev) => ({ ...prev, [name]: value, productId: id }));
    }
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const getCurrentProduct = (e) => {
    setState((prev) => ({
      ...prev,
      product: e.target.textContent,
      productId: e.target.id,
      weight: "100",
    }));
    dispatch(productAction.resetProductList());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(productOperation.addProduct(date, state.productId, state.weight));
    setState({ ...initialState });
    toggleModal && toggleModal();
  };

  useEffect(() => {
    state.product.length > 1 &&
      !state.productId &&
      dispatch(searchProducts(state.product));
    !state.product.length &&
      state.productId &&
      setState((prev) => ({ ...prev, productId: "" }));
  }, [state.product, state.productId, dispatch]);

  return (
    <>
      {!!productsQuery.length && (
        <DiaryListProduct
          toGetProduct={getCurrentProduct}
          prod={productsQuery}
        />
      )}
      <form onSubmit={handleSubmit}>
        <div className={s.form}>
          <label>
            <input
              className={s.product}
              placeholder='Введите название продукта'
              name='product'
              value={state.product}
              type='text'
              onChange={handleChange}
            />
          </label>

          <label>
            <input
              className={s.gram}
              placeholder='Граммы'
              name='weight'
              value={state.weight}
              onChange={handleChange}
            />
          </label>
          <button className={s.but} type='submit'>
            Добавить
          </button>
        </div>
      </form>
    </>
  );
};

export default AddForm;
