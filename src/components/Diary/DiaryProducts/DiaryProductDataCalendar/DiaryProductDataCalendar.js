import React, { useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from './DiaryDataCalendar.module.css'

const DataCalendar = (({ on }) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            className={s.calendar}
            selected={startDate}
            dateFormat="dd.MM.yyyy"
            // showTimeSelect 
            onChange={(date) => on(setStartDate(date))}
        />
    );
    
})
export default DataCalendar


