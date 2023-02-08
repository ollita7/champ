const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin"); 

module.exports = merge(common, {
  mode: "production",
  target: ["web", "es5"],
  output: {
    filename: "[name].[contenthash].js",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        exclude: /entry.*/,
        extractComments: true,
      }),
    ],
    splitChunks: {
      maxInitialRequests: 20,
      minSize: 20000,
      cacheGroups: {
        vendor: {
          chunks: "all",
          test: /[\\/]node_modules[\\/](?!sonic-ui)/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  },
});