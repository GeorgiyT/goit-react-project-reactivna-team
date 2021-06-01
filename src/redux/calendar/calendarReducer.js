import { createReducer } from '@reduxjs/toolkit';
import setDate from './calendarAction';
import moment from 'moment'

const dateReducer = createReducer(moment(Date.now()).format('YYYY-MM-DD'), {
  [setDate]: (state, action) => action.payload
})

export default dateReducer