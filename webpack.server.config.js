const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const baseConfig = require("./webpack.base.config");

const DIST_FOLDER = path.resolve(__dirname, "dist");
const plugins = [
  ...baseConfig.plugins,
  new CopyPlugin({
    patterns: [
      { from: "./settings/.env", to: DIST_FOLDER, noErrorOnMissing: true },
    ],
  }),
];
module.exports = {
  ...baseConfig,
  entry: "./src/server/index.ts",
  target: "node",
  output: {
    filename: "bundle.js",
    path: DIST_FOLDER,
  },
  plugins,
  externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
};
