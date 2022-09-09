// development config
const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    // "react-hot-loader/patch", // activate HMR for React - old?!
    "webpack-dev-server/client?http://localhost:3000",
    "./index.tsx", // the entry point of our app
  ],
  devServer: {
    // hot: "only", // enable HMR on the server
    historyApiFallback: true, // fixes error 404-ish errors when using react router
    port: 3000,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new ReactRefreshWebpackPlugin(), // new refresh https://www.npmjs.com/package/react-refresh
  ],
});
