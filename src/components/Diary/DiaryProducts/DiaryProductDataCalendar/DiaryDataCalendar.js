import React, { Component } from 'react'
import DataCalendar from './DiaryProductDataCalendar'
import sprite from "../../../../images/symbol-defs.svg";
import s from './DiaryDataCalendar.module.css'
import { connect } from 'react-redux';
import setData from '../../../../redux/calendar/calendarAction'
import productOperation from '../../../../redux/products/productOperation';



class DiaryDataCalendar extends Component {
    state = {
        date: ''
    }
//     componentDidMount() {
//         this.props.setDate(Date.now().format('YYYY-MM-DD'))
//   }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.date !== this.state.date) {
      this.props.toFetchProducts(this.state.date);
    }
  }

  handleTap = (someDate, setSomeDate) => {
    // setSomeDate(someDate);
    // console.log(this.props);

    const result = someDate ?someDate.format('YYYY-MM-DD') : 0;
    this.setState({ date: result });
    this.props.setData(result);
  };
    render() {
        return (
            <div  className={s.CalendarContainer} >
                <DataCalendar on={this.handleTap} />
                <svg className={s.images}>
                <use href={sprite + "#icon-calendar"} />
                </svg>
                
            </div>
        );
    }
}
const mapDispatchToProps = {
 setData,
  toFetchProducts: productOperation.fetchProduct
};

export default connect(null,mapDispatchToProps)(DiaryDataCalendar);
