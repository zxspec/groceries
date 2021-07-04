import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRoute, useRouter } from "react-router5";

import { fetchProducts } from "../store/actions";
import "./SearchBox.css";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const { route } = useRoute();
  const router = useRouter();
  const initialSearchValue = route.params.q ?? "";
  const [searchValue, setSearchValue] = useState(initialSearchValue);

  useEffect(() => {
    if (!window.INITIAL_STATE?.products) {
      dispatch(fetchProducts(searchValue));
    }
  }, []);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    dispatch(fetchProducts(newValue));
    router.replaceHistoryState("home", { q: newValue });
  };

  return (
    <form className="searchbox">
      <input
        type="text"
        name="q"
        value={searchValue}
        placeholder="Type something in"
        onChange={onChangeHandler}
      />
      <button>Search</button>
    </form>
  );
};
