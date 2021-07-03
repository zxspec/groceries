import axios from "axios";
import React from "react";
import { Router } from "router5";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router5";
import { renderToString } from "react-dom/server";

import App from "../../client/App";
import { createRootStore } from "../../client/store/createStore";

type Props = { router: Router };
export function render({ router }: Props) {
  // TODO migrate one level up
  const axiosInstance = axios.create({ baseURL: "/api" });
  const store = createRootStore({}, axiosInstance);

  const AppWithRouter = (
    <RouterProvider router={router}>
      <Provider store={store}>
        <App />
      </Provider>
    </RouterProvider>
  );

  const content = renderToString(AppWithRouter);

  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Grocery Search</title>
            <link rel="stylesheet" type="text/css" href="/main.css">
        </head>
        <body>
            <div id="react-root">${content}</div>
        </body>
        <script src="/bundle.js"></script>
        </html>
    `;
}
