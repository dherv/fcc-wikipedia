const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Weather App",
      template: "./public/index.html",
      filename: "./index.html",
      inject: "head",
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "[name].bundle.js",
    clean: true,
  },
};
