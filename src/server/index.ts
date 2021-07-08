import path from "path";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { cloneRouter } from "router5";
import axios from "axios";
import expressStaticGzip from "express-static-gzip";

import type { Grocery } from "../types";
import fakeGroceriesData from "./mock/groceries.json";
import { extractSearchPhrase, filterGroceriesByName } from "./api/filtering";
import createRouter from "../router/router";
import { render } from "./helpers/contentRenderer";
import { getStatusCode } from "./helpers/getStatusCode";
import { preloadData } from "./helpers/preloadData";
import { createRootStore } from "../client/store/createStore";

const ENV_PATH = path.resolve(__dirname, ".env");
console.debug("### ENV_PATH: ", ENV_PATH);
dotenv.config({ path: ENV_PATH });

const PORT = process.env.PORT || 8080;

const app = express();
const baseRouter = createRouter();
const axiosInstance = axios.create({ baseURL: `http://localhost:${PORT}/api` });

app.use(
  expressStaticGzip(path.join(__dirname, "../public"), {
    enableBrotli: true,
    orderPreference: ["br", "gz"],
  })
);

app.get("/api/search", (req: Request, res: Response) => {
  const groceries: Grocery[] = fakeGroceriesData; // or get it asynchronously from real API

  const searchPhrase = extractSearchPhrase(req.query);
  const data = filterGroceriesByName(groceries, searchPhrase);

  res.set("content-type", "application/json");
  res.send(data);
});

app.get("*", (req: Request, res: Response) => {
  const router = cloneRouter(baseRouter);

  router.start(req.originalUrl, async function done(error, route) {
    if (error) {
      res.status(500).send(error);
    } else {
      const store = createRootStore({}, axiosInstance);

      try {
        await preloadData(route, store.dispatch);
      } catch (e) {
        console.error("### preloadData error: ", e);
      }

      const content = render({ router, store });

      res.set("content-type", "text/html");
      res.status(getStatusCode(route.name)).send(content);
    }
  });
});

app.listen(PORT, () =>
  console.log(`### Server started http://localhost:${PORT}`)
);
