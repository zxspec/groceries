import React from "react";
import { useDispatch } from "react-redux";

import { fetchProducts } from "../store/actions";
import "./SearchBox.css";

export const SearchBox = () => {
  const dispatch = useDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchProducts(e.target.value));
  };

  return (
    <div className="searchbox">
      <input
        type="text"
        name="search"
        placeholder="Type something in"
        onChange={onChangeHandler}
      />
      <button>Search</button>
    </div>
  );
};
