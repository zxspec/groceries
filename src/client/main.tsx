import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";

import App from "./App";
import { RouterProvider } from "react-router5";
import createRouter from "../router/router";
import { createRootStore } from "./store/createStore";

const router = createRouter();
const axiosInstance = axios.create({ baseURL: "/api" });
const store = createRootStore(window.INITIAL_STATE, axiosInstance);

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
