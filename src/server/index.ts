import path from "path";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { cloneRouter } from "router5";

import type { Grocery } from "./types/Grocery";
import fakeGroceriesData from "./mock/groceries.json";
import { extractSearchPhrase, filterGroceriesByName } from "./hepers/filtering";
import createRouter from "../router/router";
import contentRenderer from "./hepers/contentRenderer";

const ENV_PATH = path.resolve(__dirname, ".env");
console.debug("### ENV_PATH: ", ENV_PATH);
dotenv.config({ path: ENV_PATH });

const app = express();
const baseRouter = createRouter();

app.get("/api/search", (req: Request, res: Response) => {
  // const groceries: Grocery[] = ... get it from real API
  const groceries: Grocery[] = fakeGroceriesData;

  const searchPhrase = extractSearchPhrase(req.query);
  const data = filterGroceriesByName(groceries, searchPhrase);

  res.set("content-type", "application/json");
  res.send(data);
});

app.get("*", (req: Request, res: Response) => {
  const router = cloneRouter(baseRouter);

  router.start(req.originalUrl, function done(error, state) {
    if (error) {
      res.status(500).send(error);
    } else {
      const content = contentRenderer({ router });
      res.set("content-type", "text/html");
      res.send(content);
    }
  });
});

const PORT = process.env.PORT || 9999;
app.listen(PORT, () =>
  console.log(`### Server started http://localhost:${PORT}`)
);
