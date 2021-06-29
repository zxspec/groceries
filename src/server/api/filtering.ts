import { Query } from "express-serve-static-core";

import { Grocery } from "../../types";

export function extractSearchPhrase(query: Query): string {
  let result = "";
  const { q } = query;

  if (typeof q === "string") {
    result = q as string;
  }

  return result;
}

export function filterGroceriesByName(
  groceries: Grocery[],
  searchPhrase: string
) {
  return groceries.filter((g) =>
    g.name.toLocaleLowerCase().includes(searchPhrase.toLocaleLowerCase())
  );
}
