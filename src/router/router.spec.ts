import routes from "./routes";
import { getBaseRouter } from "./router";

import { createRouter, Router } from "router5";
jest.mock("router5");

import browserPlugin from "router5-plugin-browser";
jest.mock("router5-plugin-browser", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("getBaseRouter", () => {
  const fakeRouter = {} as Router;

  beforeAll(() => {
    (createRouter as jest.MockedFunction<typeof createRouter>).mockReturnValue(
      fakeRouter
    );
    fakeRouter.usePlugin = jest.fn();
  });

  afterEach(() => jest.clearAllMocks());

  it("should create router with provided routes", () => {
    getBaseRouter();
    expect(createRouter).toHaveBeenCalledTimes(1);
    expect(createRouter).toHaveBeenCalledWith(routes, expect.anything());
  });

  it("should create router with default route `404`", () => {
    getBaseRouter();
    expect(createRouter).toHaveBeenCalledTimes(1);
    expect(createRouter).toHaveBeenCalledWith(expect.anything(), {
      defaultRoute: "404",
    });
  });

  it("should use browser plugin", () => {
    getBaseRouter();
    expect(browserPlugin).toHaveBeenCalledTimes(1);
    expect(browserPlugin).toHaveBeenCalledWith({ useHash: false });
  });
});
