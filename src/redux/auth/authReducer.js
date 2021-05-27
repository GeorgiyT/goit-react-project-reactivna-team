import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const tokenReducer = createReducer(null, {});

const authReducer = combineReducers({
  token: tokenReducer
});

export default authReducer;
