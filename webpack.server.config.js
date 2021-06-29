const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const baseConfig = require("./webpack.base.config");

const DIST_FOLDER = path.resolve(__dirname, "dist");

module.exports = {
  ...baseConfig,
  entry: "./src/server/index.ts",
  target: "node",
  output: {
    filename: "bundle.js",
    path: DIST_FOLDER,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./settings/.env", to: DIST_FOLDER, noErrorOnMissing: true },
      ],
    }),
  ],
};
