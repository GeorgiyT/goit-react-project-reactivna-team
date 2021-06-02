import React from "react";
import DiaryProductList from "./DiaryProducts/DiaryProductList/DiaryProductList";
import s from "./DiaryProducts.module.css";
import productOperation from "../../redux/products/productOperation";
import { connect } from "react-redux";
import productSelector from "../../redux/products/productSelector";
import DiaryProdustListItem from "./DiaryProducts/DiaryProdustListItem/DiaryProdustListItem";
// import s from '../Diary/DiaryProducts/DiaryProdustListItem/DiaryProdustListItem.module.css'
import style from "./DiaryProducts/DiaryProductList/DiaryProductList.module.css";
import sprite from "../../images/symbol-defs.svg";
import Modal from "../Diary/DiaryProducts/DiaryProductList/AddProductModal";

const DiaryProducts = ({ products, data, toFetchProducts }) => {
  console.log(products, "products");
  return (
    <div className={s.containe}>
      <DiaryProductList />

      {!products || !(products.length > 0) ? <h2 className={s.title}> Продукты еще не добавлены</h2> : ""}
      {products && (
        <ul className={s.listeeeer}>
          {products.map(({ id, ...props }) => (
            <DiaryProdustListItem key={id} id={id} {...props} />
          ))}
        </ul>
      )}
      <button className={style.bu} type="submit">
        <svg className={style.icon}>
          <use href={sprite + "#icon-plus"} />
        </svg>
      </button>
    </div>
  );
};
const mapStateToProps = state => ({
  products: productSelector.getProducts(state),
  date: state.date
});
const mapDispatchToProps = dispatch => {
  return {
    toFetchProducts: data => dispatch(productOperation.fetchProduct(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiaryProducts);
