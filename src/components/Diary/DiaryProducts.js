import React, { useState } from "react";
import DiaryProductList from "./DiaryProducts/DiaryProductList/DiaryProductList";
import s from "./DiaryProducts.module.css";
import productOperation from "../../redux/products/productOperation";
import { connect, useSelector } from "react-redux";
import productSelector from "../../redux/products/productSelector";
import DiaryProdustListItem from "./DiaryProducts/DiaryProdustListItem/DiaryProdustListItem";
import style from "./DiaryProducts/DiaryProductList/DiaryProductList.module.css";
import sprite from "../../images/symbol-defs.svg";
import Modal from "../Modal/Modal";
import AddProductModal from './DiaryProducts'



const DiaryProducts = ({ products, data, toFetchProducts, openModal }) => {
  console.log(products, "products");

  const [showModal, setShowModal] = useState(false);
  //  const isLoding = useSelector(loader)

  const toggleModal = () => {
    setShowModal((prevState) => !prevState.showModal);
  };

  const modalClose = () => {
    setShowModal(false);
  };

  return (
    <div className={s.containe}>
      {/* {window.screen.width >767&& <DiaryProductList /> } */}
      <DiaryProductList />

      {!products || !(products.length > 0) ? (
        <h2 className={s.title}> Продукты еще не добавлены</h2>
      ) : (
        ""
      )}
      {products && (
        <ul className={s.listeeeer}>
          {products.map(({ id, ...props }) => (
            <DiaryProdustListItem key={id} id={id} {...props} />
          ))}
        </ul>
      )}
      <div>
        <Modal onModalToggle={modalClose} showModal={showModal}>
          {/* <DiaryProductList /> */}
          <AddProductModal/>
        </Modal>
      </div>
      <button onClick={toggleModal} className={style.bu} type="submit">
        <svg className={style.icon}>
          <use href={sprite + "#icon-plus"} />
        </svg>
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  products: productSelector.getProducts(state),
  date: state.date,
});
const mapDispatchToProps = (dispatch) => {
  return {
    toFetchProducts: (data) => dispatch(productOperation.fetchProduct(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiaryProducts);
