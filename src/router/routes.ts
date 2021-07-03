import type { Route } from "router5";

const routes: Route[] = [
  { name: "home", path: "/" },
  { name: "details", path: "/details/:product" },
  { name: "404", path: "/404" },
];

export default routes;
