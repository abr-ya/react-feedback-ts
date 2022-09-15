// development config
const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    hot: true, // enable HMR on the server
    historyApiFallback: true, // fixes error 404-ish errors when using react router
    port: 3000,
  },
  devtool: "cheap-module-source-map",
  plugins: [new ReactRefreshPlugin()],
});
