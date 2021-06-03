import React from "react";
import { connect } from "react-redux";
import * as productOperation from "../../../../redux/products/productOperation";
import s from "../DiaryProdustListItem/DiaryProdustListItem.module.css";

const DiaryProdustListItem = ({ title, weight, kcal, deleteProduct, id, day, date, dayId }) => {
  const calories = Math.round(kcal);

  return (
    <>
      <li className={s.title}>
        <p className={s.nameProd}>{title}</p>
        <p className={s.weight}>{weight} г</p>
        <p className={s.kcal}>{calories} ккaл</p>
        <button type="button" className={s.button} onClick={() => deleteProduct(dayId, id)}>
          X
        </button>
      </li>
    </>
  );
};

const mapStateToProps = state => ({
  // date: state.date,
  dayId: state.currentDay.id
  // day: state.days
});
const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: (dayId, id) => {
      return dispatch(productOperation.deleteProduct(dayId, id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DiaryProdustListItem);
// export default DiaryProdustListItem;
