## npm i webpack-cli --save-dev
## npm i loadsh --save-dev

## dist 存放打包之后的文件
## src 存放入口文件  
## webpack.cofig.js //webpack的配置文件

* webpack中的(module)用来处理项目中的不同模块
* webpack 模块支持语法
  - es6 import语句
  - Commonjs require() 语句
  - AMD define 和 require 语句
  - css/sass/less 文件中的@import 语句
  - 样式 (url(...)) 或者html文件 (<img src = "...">)中的图片连接

## npm i postcss-loader autoprefixer --save-dev 给css添加前缀

## 压缩打包
- 压缩css(optimize-css-assets-webpack-plugin)  
- 压缩js(uglifyjs-webpack-plugin)

## 为css js 文件添加hash值 防止缓存

## html 打包
- html-webpack-plugin

## 清理目录
 - clean-webpack-plugin

## webpack 处理图片和优化
 - file-loader
 - image-webpack-loader