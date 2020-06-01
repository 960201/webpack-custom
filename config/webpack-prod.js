const base = require("./webpack-base");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除上一次打包文件插件

// 测试
module.exports = merge(base, {
  // 打包环境：开发development & 生产production
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
});
