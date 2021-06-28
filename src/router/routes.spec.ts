import routes from "./routes";

describe("routes", () => {
  it("should have correct routes", () => {
    expect(routes).toMatchSnapshot();
  });
});
