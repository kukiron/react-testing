const path = require("path");
const webpack = require("webpack");
const WebpackMonitor = require("webpack-monitor");

module.exports = {
  entry: ["./src/index.jsx"],
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new WebpackMonitor({
      capture: true,
      launch: true
    })
  ]
};
