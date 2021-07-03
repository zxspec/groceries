import React from "react";

import { SearchBox } from "../components/SearchBox";
import { SearchResults } from "../components/SearchResults";
import { AppDispatch } from "../../types";
import { fetchProducts } from "../store/actions";

import "./Home.css";

export const HomePage = () => (
  <main className="home-page">
    <SearchBox />
    <SearchResults />
  </main>
);

export const preloadData = (dispatch: AppDispatch, searchPhrase: string = "") =>
  dispatch<any>(fetchProducts(searchPhrase));

export default HomePage;
