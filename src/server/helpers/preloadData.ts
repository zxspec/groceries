import { State } from "router5";
import { preloadData as preloadHomeData } from "../../client/pages/Home";
import { preloadData as preloadProductData } from "../../client/pages/Product";
import { extractProductName } from "../../client/components/ProductDetails";
import { AppDispatch } from "../../types";

export const preloadData = (route: State, dispatch: AppDispatch) => {
  switch (route.name) {
    case "home":
      return preloadHomeData(dispatch, route.params.q);
    case "details":
      return preloadProductData(dispatch, extractProductName(route.path));
    default:
      return {};
  }
};
