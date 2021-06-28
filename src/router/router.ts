import { createRouter } from "router5";
import browserPlugin from "router5-plugin-browser";

import routes from "./routes";

export function getBaseRouter() {
  const router = createRouter(routes, {
    defaultRoute: "404",
  });

  router.usePlugin(browserPlugin({ useHash: false }));

  return router;
}

export default getBaseRouter;
