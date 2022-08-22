const { merge } = require("webpack-merge");
const common = require("./craco.common.config.js");
const env = process.env;
require("dotenv").config();

module.exports = merge(common, {
  devServer: {
    port: 8081,
    proxy: {
      "/api/": {
        target: env.PROXY_API_SERVER,
        changeOrigin: true,
      },
      "/ws": {
        target: env.PROXY_API_SERVER,
        changeOrigin: true,
      },
    },
  },
  babel: {
    plugins: ["babel-plugin-styled-components"],
  },
  optimization: {
    minimize: false,
  },
});
