import path from "path";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { cloneRouter } from "router5";
import axios from "axios";

import type { Grocery } from "../types";
import fakeGroceriesData from "./mock/groceries.json";
import { extractSearchPhrase, filterGroceriesByName } from "./api/filtering";
import createRouter from "../router/router";
import { render } from "./helpers/contentRenderer";
// import { preloadData } from "./helpers/preloadData";
import { createRootStore } from "../client/store/createStore";

const ENV_PATH = path.resolve(__dirname, ".env");
console.debug("### ENV_PATH: ", ENV_PATH);
dotenv.config({ path: ENV_PATH });

const app = express();
const baseRouter = createRouter();
const axiosInstance = axios.create({ baseURL: "/api" });

app.use(express.static(path.join(__dirname, "../public")));

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
      const INITIAL_STORE = {}; // TODO preload data
      const store = createRootStore(INITIAL_STORE, axiosInstance);
      const content = render({ router, store });
      res.set("content-type", "text/html");
      res.send(content);
    }
  });
});

const PORT = process.env.PORT || 9999;
app.listen(PORT, () =>
  console.log(`### Server started http://localhost:${PORT}`)
);
