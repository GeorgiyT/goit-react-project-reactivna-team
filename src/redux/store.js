import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import productReduser from "./products/productReduser"
import authReducer from "./auth/authReducer";
// import products from "./products/productReduser";
import userReducers from "./user/userReducer";

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
    products: productReduser
    
  },
  middleware
});

const persistor = persistStore(store);

export { store, persistor };
