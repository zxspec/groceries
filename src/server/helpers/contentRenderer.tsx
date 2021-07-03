import React from "react";
import { Store } from "redux";
import { Router } from "router5";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router5";
import { renderToString } from "react-dom/server";
import serialize from "serialize-javascript";

import App from "../../client/App";

type Props = { router: Router; store: Store };
export function render({ router, store }: Props) {
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
        <script>
          window.INITIAL_STATE=${serialize(store.getState())}
        </script>
        <script src="/bundle.js"></script>
        </html>
    `;
}
