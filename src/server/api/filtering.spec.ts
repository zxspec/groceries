import { Grocery } from "../../types";
import { Query } from "express-serve-static-core";

import fakeGroceriesData from "../mock/groceries.json";
import { extractSearchPhrase, filterGroceriesByName } from "./filtering";

describe("extractSearchPhrase()", () => {
  it("should return empty string, when search phrase is not string", () => {
    const query: Query = { q: ["1", "2", "3"] };
    const result = extractSearchPhrase(query);
    expect(result).toBe("");
  });

  it("should return search phrase contained in `q` query parameter", () => {
    const query: Query = { q: "FOO", r: "BAR", s: "BAZ" };
    const result = extractSearchPhrase(query);
    expect(result).toBe("FOO");
  });
});

describe("filterGroceriesByName()", () => {
  it("should return empty results list, if search phrase is empty", () => {
    const groceries: Grocery[] = fakeGroceriesData;
    const result = filterGroceriesByName(groceries, "");
    expect(result).toEqual([]);
  });

  it("should return filtered results, if search phrase is not empty", () => {
    let result;
    const groceries: Grocery[] = fakeGroceriesData;

    result = filterGroceriesByName(groceries, "Kumquat");
    expect(result[0].name).toEqual("Kumquat");
  });

  it("should use case-insensitive filtering", () => {
    let result;
    const groceries: Grocery[] = fakeGroceriesData;

    result = filterGroceriesByName(groceries, "Grapefruit");
    expect(result[0].name).toEqual("Grapefruit");

    result = filterGroceriesByName(groceries, "grapefruit");
    expect(result[0].name).toEqual("Grapefruit");
  });

  it("should return empty list, if nothing mathces search phrase", () => {
    const groceries: Grocery[] = fakeGroceriesData;
    const result = filterGroceriesByName(
      groceries,
      "THIS_IS_NOT_VALID_ GROCERY_NAME"
    );
    expect(result.length).toBe(0);
  });
});
