import React, { useState } from "react";
import DiaryProductList from "./DiaryProducts/DiaryProductList/DiaryProductList";
import s from "./DiaryProducts.module.css";
import { connect } from "react-redux";
import * as productSelector from "../../redux/products/productSelector";
import DiaryProdustListItem from "./DiaryProducts/DiaryProdustListItem/DiaryProdustListItem";
import style from "./DiaryProducts/DiaryProductList/DiaryProductList.module.css";
import sprite from "../../images/symbol-defs.svg";
import Modal from "../Modal/Modal";
import AddForm from "./DiaryProducts/DiaryProductList/AddForm";

const DiaryProducts = ({ products }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

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
      {/* ====================== */}
      {showModal && (
        <Modal onModalToggle={toggleModal} showModal={showModal}>
          <AddForm toggleModal={toggleModal} />
        </Modal>
      )}
      {/* ..................... */}

      <button onClick={toggleModal} className={style.bu} type="submit">
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

export default connect(mapStateToProps)(DiaryProducts);
