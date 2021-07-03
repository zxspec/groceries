import React from "react";
import { useRoute } from "react-router5";

import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";

export default function App() {
  const { route } = useRoute();

  if (!route) return null;

  switch (route.name) {
    case "home":
      return <HomePage />;
    case "details":
      return <ProductPage />;
    default:
      return <h1>404</h1>;
  }
}
