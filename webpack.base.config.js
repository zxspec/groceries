const minimist = require("minimist");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const argv = minimist(process.argv.slice(2));
const isDev = !argv.mode || argv.mode === "development";
const isProd = !isDev;

const optimization = isProd
  ? {
      minimize: true,
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    }
  : {};

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
  optimization,
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
