import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter, useRoute } from "react-router5";

import { fetchProducts } from "../store/actions";
import "./SearchBox.css";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const { route } = useRoute();
  const initialSearchValue = route.params.q ?? "";
  const [searchValue, setSearchValue] = useState(initialSearchValue);

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
