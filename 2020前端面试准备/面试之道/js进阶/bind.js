let foo = {
  name: 'wn'
}
function bar() {
  console.log(this.name)
}
bar.bind(foo,[1,2,3])()

Function.prototype.myBind = function(context) {
  // 
  const _this = this
  const args = arguments[1]
  // 返回函数
  return function F() {
    // 因为返回了一个函数，我们可以new F(),所以需要判断
    if(this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}