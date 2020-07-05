
let foo = {
  name: 'wn'
}
function bar(x) {
  console.log(x)
  console.log(this.name)
}
bar.myApply(foo, [666])

Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this
  let result
  // 处理参数 和 call 不一样
  if(arguments[1]) {
    result = context.fn(...arguments[1])
  }else{
    result = context.fn()
  }
  delete context.fn
  return result
}