# tree shaking
注意：只有es module的引入方式！！！
optimization: {
    usedExports: true
  },

  package.json添加
  {
    "sideEffects": false,
  }


  # development vs Production 模式区分打包

  # code Splitting 代码分割