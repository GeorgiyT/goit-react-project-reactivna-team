import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { currentDay } from "./products/productReduser";
import authReducer from "./auth/authReducer";
import itemsReducer from "./dailyRate/dailyRateReducer";
import userReducers from "./user/userReducer";
import loader from "./loader/loaderReducer";
import { searchedProducts } from "./products/productReduser";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
];

const authPersitConfig = {
  key: "authToken",
  storage,
  whitelist: ["tokens"]
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersitConfig, authReducer),
    user: userReducers,
    dailyRate: itemsReducer,
    currentDay: currentDay,
    isLoding: loader,
    searchedProducts
  },
  middleware
});

const persistor = persistStore(store);

export { store, persistor };
