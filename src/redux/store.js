import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authReducer";

const store = configureStore({
  reducer: {
    auth
  }
});

export default store;
