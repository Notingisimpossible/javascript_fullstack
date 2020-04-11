const CopyrightWebpackPlugin = require("./plugins/copyright-webpack-plugin.js")
const path = require('path')

module.exports = {
  mode: "development",
  entry: {
    main: "./index.js"
  },
  output:{
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  resolveLoader:{
    modules: ["node_modules","./loader"]
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, "./loader/replaceLoader.js")
          },
          {
            loader: path.resolve(__dirname, "./loader/replaceLoaderAsync.js"),
            options: {
              name:"mg"
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new CopyrightWebpackPlugin(
      {name:"cool"}
    )
  ]
}