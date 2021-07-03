import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRoute } from "react-router5";

import { fetchProducts } from "../store/actions";
import "./SearchBox.css";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const { route } = useRoute();
  const initialSearchValue = route.params.q ?? "";
  const [searchValue, setSearchValue] = useState(initialSearchValue);

  useEffect(() => {
    if (window.INITIAL_STATE?.products) {
      window.INITIAL_STATE.products = undefined;
    } else {
      dispatch(fetchProducts(searchValue));
    }
  }, []);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    dispatch(fetchProducts(newValue));
    window.history.replaceState(null, "Grocery Search", `/?q=${newValue}`);
  };

  return (
    <div className="searchbox">
      <input
        type="text"
        name="search"
        value={searchValue}
        placeholder="Type something in"
        onChange={onChangeHandler}
      />
      <button>Search</button>
    </div>
  );
};
