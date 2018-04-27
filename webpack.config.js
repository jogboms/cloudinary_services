const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "commonjs2"
  }
};
