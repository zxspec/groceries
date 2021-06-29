import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RouterProvider } from "react-router5";
import createRouter from "../router/router";

const router = createRouter();

router.start(() => {
  ReactDOM.hydrate(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>,
    document.getElementById("react-root")
  );
});
