const path = require("path");
const express = require("express");

const ENV_PATH = path.resolve(__dirname, "../../.env");
require("dotenv").config({ path: ENV_PATH });

const PORT = process.env.PORT || 9999;
const app = express();

app.get("*", (_, res) => {
  const content = "Hello from Groceries Search!";
  res.set("content-type", "text/html");
  res.send(content);
});

app.listen(PORT, () => console.log(`Server started http://localhost:${PORT}`));
