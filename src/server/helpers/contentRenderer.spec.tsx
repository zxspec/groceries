import { Router } from "router5";
import { renderToString } from "react-dom/server";
jest.mock("react-dom/server", () => ({
  renderToString: jest.fn(),
}));

import { render } from "./contentRenderer";

describe("contentRenderer", () => {
  const fakeRouter = {} as Router;

  afterEach(() => jest.clearAllMocks());

  it("should use `renderToString()` to render server-side content", () => {
    const result = render({ router: fakeRouter });

    expect(renderToString).toHaveBeenCalledTimes(1);
    expect(result).toMatchSnapshot();
  });
});
