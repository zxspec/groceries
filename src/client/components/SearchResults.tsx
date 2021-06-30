import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/createStore";

export const SearchResults = () => {
  const products = useSelector<AppState>((state) => state.products);

  console.log("### products: ", products);
  // TODO render products
  return <h1>Search results should be here</h1>;
};
