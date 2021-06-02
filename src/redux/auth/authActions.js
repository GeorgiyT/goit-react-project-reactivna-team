import { createAction } from "@reduxjs/toolkit";

export const registerRequest = createAction("auth/registerRequest");
export const registerSuccess = createAction("auth/registerSuccess");
export const registerError = createAction("auth/registerError");

export const loginRequest = createAction("auth/loginRequest");
export const loginSuccess = createAction("auth/loginSuccess");
export const loginError = createAction("auth/loginError");

export const logOutRequest = createAction("auth/logOutRequest");
export const logOutSuccess = createAction("auth/logOutSuccess");
export const logOutError = createAction("auth/logOutError");
export const setUserLoading = createAction("auth/setUserLoading");

export const updateAccessToken = createAction("auth/updateAccessToken");

//____________________ASK ABOUT REFRESH___________

export const refreshUserRequest = createAction("auth/refreshUserRequest");
export const refreshUserSuccess = createAction("auth/refreshUserSuccess");
export const refreshUserError = createAction("auth/refreshUserError");

export const unsetUserName = createAction("auth/unsetUserName");
export const tokenUnset = createAction("token/tokenUnset");
