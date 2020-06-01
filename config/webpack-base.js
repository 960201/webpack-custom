const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 抽离style标签样式以link显示
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //压缩css

module.exports = {
  // 入口：有且可以有多个
  entry: {
    main: "./src/main.js",
  },
  // 出口
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].bundle.js",
    // publicPath: "/", // 公共路径
  },
  module: {
    rules: [
      // css文件解析
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      // less文件解析
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      // 图片文件解析
      {
        test: /\.(jpg|png|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8 * 1024, // 8k以内, 转成base64, 节约请求次数, 8k以外, 单独一个文件请求
              name: "[name].[ext]", // 配置输出的文件名
              publicPath: "../images/", // 配置静态资源的引用路径
              outputPath: "images/", // 配置输出的文件目录
            },
          },
        ],
      },
      // 对于高版本js的兼容性处理
      {
        test: /\.jsx?/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              ["@babel/plugin-transform-runtime", { corejs: 3 }],
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 静态模板路径
    }),
    new MiniCssExtractPlugin({
      filename: "./styles/[name].css", // css文件输出路径
    }),
    new OptimizeCssAssetsPlugin({}),
    new webpack.BannerPlugin("Lin 2020 webpack"),
    //自定义环境变量
    new webpack.DefinePlugin({
      DEV: JSON.stringify("production"),
      FLAG: "true",
      ENIN: "1+1",
    }),
    new webpack.ProvidePlugin({
      // $: "jquery", // 在每个模块注入jQuery，但无法挂载 window.$ 下
    }),
  ],
  // 优化项
  optimization: {
    splitChunks: {
      chunks: "all", // 提取所有的公共模块
    },
  },
  // 防止打包
  externals: {
    // jquery: "$",
    jquery: "$",
  },
};
