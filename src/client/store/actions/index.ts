import { FETCH_PRODUCTS } from "../constants";

import { AxiosInstance } from "axios";
import type { AppDispatch, AppGetState } from "../createStore";

export const fetchProducts =
  (searchPhrase: string) =>
  async (dispatch: AppDispatch, getState: AppGetState, api: AxiosInstance) => {
    const { data } = await api.get(`/search?q=${searchPhrase}`);

    dispatch({
      type: FETCH_PRODUCTS,
      payload: { data },
    });
  };
