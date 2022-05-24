import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./modules/store_toolkit";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
