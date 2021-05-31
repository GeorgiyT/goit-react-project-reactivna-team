import { createReducer } from '@reduxjs/toolkit';
import setDate from './calendarAction';

const dateReducer = createReducer(Date.now().format("YYYY-MM-DD"), {
  [setDate]: (state, action) => action.payload
})

export default dateReducer