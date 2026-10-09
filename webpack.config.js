const path = require("path");

module.exports = {
  entry: "./js/script.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },

  mode: "production",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        type: "javascript/auto",
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
