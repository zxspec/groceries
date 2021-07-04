import React from "react";
import { useRoute, useRouter } from "react-router5";
import { useSelector } from "react-redux";

import { AppState } from "../store/createStore";
import { Grocery } from "../../types";

export const ProductDetails = () => {
  const { route } = useRoute();
  const router = useRouter();
  const productName = extractProductName(route.path);
  const products = useSelector<AppState>(
    (state) => state.products
  ) as Grocery[];
  const product = products.find((p) => p.name === productName);
  if (!product) {
    router.navigate("404");
  }

  return product ? (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {product.images
        ? "images component should be here"
        : "additional prouct data component should be here "}
    </div>
  ) : null;
};

export const extractProductName = (path: string) => {
  const pos = path.lastIndexOf("/") + 1;
  return path.substr(pos);
};
