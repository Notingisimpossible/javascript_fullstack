// import "@babel/polyfill"


const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')//将css模块打包成一个新文件
const webpack = require('webpack')

module.exports = {
  mode: "development",
  entry: "./index.js", //指定打包入口
  //指定打包后的资源位置
  output:{ 
    // 公共路径设置
    // publicPath: "",
    path: path.resolve(__dirname, "./dist"), // 打包的绝对路径
    filename: "index.js"
  },
  // devtool: "source-map",
  devtool: "cheap-module-eval-source-map", //开发环境
  // devtool: "cheap-module-source-map", //线上环境
  module: {
    // 遇到不认识的模块就在这里写
    rules:[
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use:{
          loader: "url-loader", //file-loader就是把模块放在了另外一个目录里面并且把位置给我们返回了
          options: {
            // name是打包前模块名称 ext是打包前文件格式
            name: "[name]_[hash].[ext]",// 11.png
            outputPath: "images/",
            limit: 379316 //当文件小于此值时使用base64,减少http请求
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader","css-loader","postcss-loader"]// 识别所有css-loader文件打包，style-loader负责用<style>标签包裹css代码放到头部
      },
      {
        test: /\.scss$/,
        use:["style-loader","css-loader","sass-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude:/node_modules/,//排除node_modules里面的js模块
        use:{
          loader: "babel-loader",
          // options:{
            // "presets": [
            //   [
            //     "@babel/preset-env",
            //     {
            //       useBuiltIns: "usage",//按需加载
            //       // corejs: 2
            //     }
            //   ]
            // ],
            // "plugins":[["@babel/plugin-transform-runtime"]]
          // }
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "自己取名",
      filename: "index.html"
    }),
    // 在打包之前将我们上一次生成的目录删除
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "./dist",
    open: true, //当执行服务时自动打开浏览器
    hot: true,
    // hotOnly: true, // 即使HMR不生效，浏览器也不会自动刷新
    port: "8081",
    proxy:{ //设置代理
      '/api': 'https://web-api.juejin.im/query'
    }
  },
  optimization: {
    usedExports: true
  },
}
