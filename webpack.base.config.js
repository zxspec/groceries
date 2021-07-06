const minimist = require("minimist");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const argv = minimist(process.argv.slice(2));
const isDev = !argv.mode || argv.mode === "development";
const isProd = !isDev;

module.exports = {
  mode: isDev ? "development" : "production",
  devtool: isDev && "source-map",
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimizer: isProd ? [new CssMinimizerPlugin()] : [],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
