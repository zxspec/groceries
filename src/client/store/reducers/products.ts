import { FETCH_PRODUCTS } from "../constants";
import type { Grocery } from "../../../types/Grocery";

export default (state: Grocery[] = [], action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload.data;
    default:
      return state;
  }
};
