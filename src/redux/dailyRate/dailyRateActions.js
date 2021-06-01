import { createAction } from "@reduxjs/toolkit"

export const getDailyRateRequest = createAction('dailyRate/getDailyRateRequest');
export const getDailyRateSuccess = createAction('dailyRate/getDailyRateSuccess');
export const getDailyRateError = createAction('dailyRate/getDailyRateError');

export const AuthDailyRateRequest = createAction('dailyRate/AuthDailyRateRequest');
export const AuthDailyRateSuccess = createAction('dailyRate/AuthDailyRateSuccess');
export const AuthDailyRateError = createAction('dailyRate/AuthDailyRateError');

export const changeFilter = createAction('dailyRate/changeFilter');
