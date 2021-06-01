import moment from "moment";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import productOperations from "../../../../redux/products/productOperation";
import s from "./DiaryDataCalendar.module.css";

const DataCalendar = ({ on }) => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productOperations.fetchProduct({ date: moment(startDate).format("yyyy-MM-DD") }));
  }, [startDate, dispatch]);
  return (
    <DatePicker
      className={s.calendar}
      selected={startDate}
      dateFormat="dd.MM.yyyy"
      // showTimeSelect
      onChange={date => on(setStartDate(date))}
    />
  );
};
export default DataCalendar;
