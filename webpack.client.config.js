const path = require("path");
const baseConfig = require("./webpack.base.config");

const DIST_FOLDER = path.resolve(__dirname, "public");

module.exports = {
  ...baseConfig,
  entry: "./src/client/main.ts",
  target: "web",
  output: {
    filename: "bundle.js",
    path: DIST_FOLDER,
  },
};
