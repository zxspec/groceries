import path from "path";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import fakeGroceriesData from "./mock/groceries.json";
import type { Grocery } from "./types/Grocery";

const ENV_PATH = path.resolve(__dirname, ".env");
console.log("### ENV_PATH: ", ENV_PATH);
dotenv.config({ path: ENV_PATH });

const PORT = process.env.PORT || 9999;
const app = express();

app.get("/api/search", (req: Request, res: Response) => {
  // const groceries: Grocery[] = ... get it from real API
  const groceries: Grocery[] = fakeGroceriesData;

  const searchPhrase = extractSearchPhrase(req);
  const content = filterGroceriesByName(groceries, searchPhrase);

  res.set("content-type", "application/json");
  res.send(content);
});

app.get("*", (_: Request, res: Response) => {
  const content = "Hello from Groceries Search!!!";

  res.set("content-type", "text/html");
  res.send(content);
});

app.listen(PORT, () =>
  console.log(`### Server started http://localhost:${PORT}`)
);

function extractSearchPhrase(req: Request): string {
  let result = "";

  if (typeof req.query.q === "string") {
    result = req.query.q as string;
  }

  return result;
}

function filterGroceriesByName(groceries: Grocery[], searchPhrase: string) {
  return groceries.filter((g) => g.name.includes(searchPhrase));
}
