import path from "path";
import dotenv from "dotenv";
import express, { Request, Response } from "express";

const ENV_PATH = path.resolve(__dirname, ".env");
console.log("### ENV_PATH: ", ENV_PATH);
dotenv.config({ path: ENV_PATH });

const PORT = process.env.PORT || 9999;
const app = express();

app.get("*", (_: Request, res: Response) => {
  const content = "Hello from Groceries Search!!!";

  res.set("content-type", "text/html");
  res.send(content);
});

app.listen(PORT, () =>
  console.log(`### Server started http://localhost:${PORT}`)
);
