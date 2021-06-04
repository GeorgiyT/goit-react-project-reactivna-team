import moment from "moment";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import * as productOperations from "../../../../redux/products/productOperation";
import s from "./DiaryDataCalendar.module.css";

const DataCalendar = ({ on }) => {
  const [startDate, setStartDate] = useState(new Date());
  // const [prevDate, setPrevDate] = useState();
  const dispatch = useDispatch();

  const onChaneFunc = (date, prev) => {
    // setPrevDate(prev);
    on(setStartDate(date));
  };

  let opener = true;

  // if (moment(prevDate).format("yyyy-MM-DD") !== moment(startDate).format("yyyy-MM-DD")) {
  //   opener = true;
  // }

  useEffect(() => {
    if (opener) {
      dispatch(productOperations.fetchProduct({ date: moment(startDate).format("yyyy-MM-DD") }));
    }
  }, [startDate, dispatch, opener]);

  return (
    <div  className={s.calen}>
    <DatePicker
      className={s.calendar}
      selected={startDate}
      dateFormat="dd.MM.yyyy"
      onChange={date => onChaneFunc(date, startDate)}
      />
    </div>
  );
};
export default DataCalendar;
