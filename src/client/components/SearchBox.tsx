import React from "react";

import "./SearchBox.css";

export const SearchBox = () => (
  <div className="searchbox">
    <input type="text" name="search" placeholder="Type something in" />
    <button>Search</button>
  </div>
);
