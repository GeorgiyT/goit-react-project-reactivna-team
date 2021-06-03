import React from "react";
import DiaryDataCalendar from "../DiaryProductDataCalendar/DiaryDataCalendar";
import s from "./DiaryProductList.module.css";
import AddForm from "./AddForm";

const DiaryProductList = () => {
  return (
    <>
      <DiaryDataCalendar />
      <div className={s.cont}>{window.screen.width > 767 && <AddForm />}</div>
    </>
  );
};

export default DiaryProductList;
