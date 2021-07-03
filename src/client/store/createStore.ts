import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import type { AxiosInstance } from "axios";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const createRootStore = (initialState: any, api: AxiosInstance) => {
  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(api)))
  );
};

export default createRootStore;

export type RootStore = ReturnType<typeof createRootStore>;
export type AppDispatch = RootStore["dispatch"];
export type AppGetState = RootStore["getState"];
export type AppState = ReturnType<AppGetState>;
