export * from "./Grocery";

declare global {
  interface Window {
    INITIAL_STATE: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
