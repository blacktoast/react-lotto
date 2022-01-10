const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

console.log(__dirname);
module.exports = {
  // entry: 웹팩에게 어플리케이션이 어디서 시작하고 어디서부터 파일들을 묶을건지 시작점을 정해준다.
  entry: "./src/index.js",
  // 현재 개발 모드에서 작업 중임을 알려줌.
  mode: "development",
  // export한 JS 모듈이 어떻게 변환되는지 정의한다. 방법은 rules에 정의한 대로 이루어진다.
  module: {
    rules: [
      // 첫번째 룰: ES6, JSX 구문 변환에 대한 것.
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["react-refresh/babel"],
        },
      },
      // 두번째 룰: CSS 처리에 대한 것. css-loader가 작동하기 위해서는 style-loader가 필요.
      {
        test: /\\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // resolve: 웹팩이 해석할 확장자를 지정.
  resolve: { extensions: ["*", ".js", ".jsx"] },
  // output: 번들링 된 결과물을 어디다 둘 것인지에 대한 설정이 가능.
  output: {
    path: path.resolve(__dirname, "dist/"),
    // 번들이 생기는 경로를 지정. webpack-dev-server도 이를 참조
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist/"),
    },
    hot: true,
    port: 3000,
  },
  // webpack-dev-server의 옵션을 설정
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
