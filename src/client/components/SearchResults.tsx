import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/createStore";
import { Grocery } from "../../types";
import { Product } from "./Product";

import "./SearchResults.css";

export const SearchResults = () => {
  const products = useSelector<AppState>(
    (state) => state.products
  ) as Grocery[];

  return (
    products && (
      <ul className="products-list">
        {products.map(({ name }, idx) => (
          <li key={idx}>
            <Product name={name} />
          </li>
        ))}
      </ul>
    )
  );
};
