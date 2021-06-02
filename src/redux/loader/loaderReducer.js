import { createReducer } from "@reduxjs/toolkit";
import { loginError, loginRequest, loginSuccess, registerError, registerRequest, registerSuccess } from "../auth/authActions";
import { getDailyRateError, getDailyRateRequest, getDailyRateSuccess } from "../dailyRate/dailyRateActions";


const loader = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [getDailyRateRequest]: () => true,
  [getDailyRateSuccess]: () => false,
  [getDailyRateError]: () => false,
});

export default loader;
