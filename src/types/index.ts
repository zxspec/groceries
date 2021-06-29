export * from "./Grocery";

declare global {
  interface Window {
    INITIAL_STATE: any;
  }
}
