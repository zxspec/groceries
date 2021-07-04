import { Router } from "router5";
import { renderToString } from "react-dom/server";
jest.mock("react-dom/server", () => ({
  renderToString: jest.fn(),
}));
import type { Store } from "redux";

import { render } from "./contentRenderer";

describe("contentRenderer", () => {
  const fakeRouter = {} as Router;
  const fakeStore = {} as Store;

  beforeAll(() => {
    fakeStore.subscribe = jest.fn();
    fakeStore.dispatch = jest.fn();
    fakeStore.getState = jest.fn();
  });

  afterEach(() => jest.clearAllMocks());

  it("should use `renderToString()` to render server-side content", () => {
    const result = render({ router: fakeRouter, store: fakeStore });

    expect(renderToString).toHaveBeenCalledTimes(1);
    expect(result).toMatchSnapshot();
  });
});
