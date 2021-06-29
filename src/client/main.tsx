import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import { RouterProvider } from "react-router5";
import createRouter from "../router/router";
import reducers from "./store/reducers";

const router = createRouter();
const store = createStore(reducers, applyMiddleware(thunk));

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
