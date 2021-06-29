import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import axios from "axios";

import App from "./App";
import { RouterProvider } from "react-router5";
import createRouter from "../router/router";
import reducers from "./store/reducers";

const router = createRouter();
const axiosInstance = axios.create({ baseURL: "/api" });
const store = createStore(
  reducers,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

router.start(() => {
  ReactDOM.hydrate(
    <RouterProvider router={router}>
      <Provider store={store}>
        <App />
      </Provider>
    </RouterProvider>,
    document.getElementById("react-root")
  );
});
