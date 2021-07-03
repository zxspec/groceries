import { State } from "router5";
import { preloadData as preloadHomeData } from "../../client/pages/Home";
import { AppDispatch } from "../../types";

export const preloadData = (route: State, dispatch: AppDispatch) => {
  switch (route.name) {
    case "home":
      return preloadHomeData(dispatch, route.params.q);
    default:
      return {};
  }
};
