const minimist = require("minimist");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");

const argv = minimist(process.argv.slice(2));
const isDev = !argv.mode || argv.mode === "development";
const isProd = !isDev;

const optimization = isProd
  ? {
      minimize: true,
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    }
  : {};

let plugins = [new MiniCssExtractPlugin()];
if (isProd) {
  plugins = [
    ...plugins,
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
    }),
  ];
}

module.exports = {
  mode: isDev ? "development" : "production",
  devtool: isDev && "source-map",
  plugins,
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
