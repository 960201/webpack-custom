const base = require("./webpack-base");
const merge = require("webpack-merge");

module.exports = merge(base, {
  // 打包环境：开发development & 生产production
  mode: "development",
  // 本地服务器
  devServer: {
    // contentBase: "dist",
    open: false,
    overlay: true, //错误以遮罩层显示
    // port: "8080",// 默认8080
    // progress: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "/api": "" },
      },
    },
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
    ],
  },
  // 调试工具 source-map | eval-source-map | eval-cheap-source-map
  devtool: "eval-source-map",
});
