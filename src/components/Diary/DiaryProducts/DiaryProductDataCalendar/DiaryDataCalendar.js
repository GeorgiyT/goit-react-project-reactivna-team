import React, { Component } from "react";
import DataCalendar from "./DiaryProductDataCalendar";
import moment from "moment";
import s from "./DiaryDataCalendar.module.css";
import { connect } from "react-redux";
import * as productOperation from "../../../../redux/products/productOperation";

const date = moment(Date.now()).format("yyyy-MM-DD");

class DiaryDataCalendar extends Component {
  state = {
    date
  };

  handleTap = (someDate, setSomeDate) => {
    const result = someDate ? moment(someDate).format("dd.MM.yyyy") : 0;
    this.setState({ date: result });
  };
  render() {
    return (
      <div className={s.CalendarContainer}>
        <DataCalendar on={this.handleTap} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  toFetchProducts: productOperation.fetchProduct
};

export default connect(null, mapDispatchToProps)(DiaryDataCalendar);
