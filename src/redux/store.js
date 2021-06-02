import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import productReduser, { currentDay } from "./products/productReduser";
import authReducer from "./auth/authReducer";
import itemsReducer from "./dailyRate/dailyRateReducer";
import userReducers from "./user/userReducer";
import dateReducer from "./calendar/calendarReducer";
import { daysReducer } from "./day/dayReducer";
import loader from "./loader/loaderReducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }),
  logger
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
    products: productReduser,
    dailyRate: itemsReducer,
    date: dateReducer,
    days: daysReducer,
    currentDay: currentDay,
    isLoding: loader,
  },
  middleware
});

const persistor = persistStore(store);

export { store, persistor };
