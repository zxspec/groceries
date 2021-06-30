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

type RootStore = ReturnType<typeof createRootStore>;

export type AppDispatch = RootStore["dispatch"];
export type AppGetState = RootStore["getState"];
