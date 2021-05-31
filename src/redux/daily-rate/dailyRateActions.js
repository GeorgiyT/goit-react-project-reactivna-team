import { createAction } from "@reduxjs/toolkit";

export const fetchDailyRateRequest = createAction("dailyRate/fetchRequest");
export const fetchDailyRateSuccess = createAction("dailyRate/fetchSuccess");
export const fetchDailyRateError = createAction("dailyRate/fetchError");

export const fetchDailyRateRequestAuth = createAction("dailyRate/fetchRequestAuth");
export const fetchDailyRateSuccessAuth = createAction("dailyRate/fetchSuccessAuth");
export const fetchDailyRateErrorAuth = createAction("dailyRate/fetchErrorAuth");

export const changeFilter = createAction("dailyRate/changeFilter");
