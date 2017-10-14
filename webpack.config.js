const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./src/index.jsx"],
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
