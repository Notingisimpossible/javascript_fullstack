class CopyrightWebpackPlugin {
  // constructor(options) {
  //   console.log(options)
  // }
  // compiler: webpack实例
  apply(compiler){
    compiler.hooks.compile.tap(
      "CopyrightWebpackPlugin",
      (compilation) => {
        console.log("开始")
      }
    )
    compiler.hooks.emit.tapAsync(
      'CopyrightWebpackPlugin',
      // compilation 本次打包过程
      (compilation, cb) => {
        compilation.assets["test.txt"] = {
          source: () => {
            return "hello test"
          },
          size: () => {
            return 1024
          }
        }
        cb()
      }
    )
  }
}

module.exports = CopyrightWebpackPlugin