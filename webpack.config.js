const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const DIST_FOLDER = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/server/index.ts",
  target: "node",
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js",
    path: DIST_FOLDER,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./settings/.env", to: DIST_FOLDER, noErrorOnMissing: true },
      ],
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
