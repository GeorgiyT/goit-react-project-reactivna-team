import { createAction } from "@reduxjs/toolkit";

export const setError = createAction("user/setError");
export const resetError = createAction("user/resetError");
export const setUserLoading = createAction("user/setUserLoading");
