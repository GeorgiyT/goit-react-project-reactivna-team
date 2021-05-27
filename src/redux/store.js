import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

import auth from "./auth/authReducer";

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
  whitelist: ["token"]
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersitConfig, auth)
  },
  middleware
});

const persistor = persistStore(store);

export { store, persistor };
