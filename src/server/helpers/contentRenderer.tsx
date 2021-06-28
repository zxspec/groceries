import React from "react";
import { Router } from "router5";
import { RouterProvider } from "react-router5";
import { renderToString } from "react-dom/server";

import App from "../../client/App";

type Props = { router: Router };
export default ({ router }: Props) => {
  const AppWithRouter = (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );

  const content = renderToString(AppWithRouter);

  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <div id="react-root">${content}</div>
        </body>
        </html>
    `;
};
