import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import * as store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./styles/index.css";
import { PersistGate } from "redux-persist/integration/react";
import "./styles/container.css";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
