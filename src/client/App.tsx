import React from "react";
import { useRoute } from "react-router5";

export default function App() {
  const { route } = useRoute();

  if (!route) return null;

  switch (route.name) {
    case "home":
      return <h1>Home Page</h1>;
    case "details":
      return <h1>Details</h1>;
    default:
      return <h1>404</h1>;
  }
}
