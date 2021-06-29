import React from "react";
import { SearchBox } from "../components/SearchBox";
import { SearchResults } from "../components/SearchResults";

import "./Home.css";

export const HomePage = () => (
  <main className="home-page">
    <SearchBox />
    <SearchResults />
  </main>
);

export default HomePage;
