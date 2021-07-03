export * from "./Grocery";
export type {
  RootStore,
  AppDispatch,
  AppGetState,
  AppState,
} from "../client/store/createStore";

declare global {
  interface Window {
    INITIAL_STATE: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
