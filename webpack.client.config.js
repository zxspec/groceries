const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const baseConfig = require("./webpack.base.config");

const DIST_FOLDER = path.resolve(__dirname, "public");
const plugins = [
  ...baseConfig.plugins,
  new CopyPlugin({
    patterns: [
      { from: "./assets/favicon.ico", to: DIST_FOLDER, noErrorOnMissing: true },
    ],
  }),
];

module.exports = {
  ...baseConfig,
  entry: "./src/client/main.tsx",
  target: "web",
  output: {
    filename: "bundle.js",
    path: DIST_FOLDER,
  },
  plugins,
};
