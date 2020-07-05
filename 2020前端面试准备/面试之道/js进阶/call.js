// call内部实现原理

let foo = {
  name: 'wn'
}
function bar() {
  console.log(this.name)
}
bar()


Function.prototype.myCall = function(context) {
  // console.log(this)
  if(typeof this !== 'function'){
    throw new TypeError('Error')
  }

  context = context || window
  context.fn = this
  const args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}