const HtmlWebpackPlugin = require("html-webpack-plugin");
const { devServer, plugins } = require("../products/webpack.config");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
