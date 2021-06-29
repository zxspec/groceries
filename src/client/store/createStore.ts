import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import type { AxiosInstance } from "axios";

export const createRootStore = (initialState: any, api: AxiosInstance) => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk.withExtraArgument(api))
  );
};

export default createRootStore;
