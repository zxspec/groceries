import React from "react";

import { ProductDetails } from "../components/ProductDetails";
import { AppDispatch } from "../../types";
import { fetchProducts } from "../store/actions";

export const Product = () => <ProductDetails />;

export const preloadData = (dispatch: AppDispatch, searchPhrase: string = "") =>
  dispatch<any>(fetchProducts(searchPhrase));

export default Product;
