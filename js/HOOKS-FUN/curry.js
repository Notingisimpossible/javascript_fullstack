// 普通函数
// function add(x,y) {
//   return x+y
// }

// add(3,4) // 7

// 柯里化函数
// 接收参数，返回新函数，再把参数传给新函数使用，最后求值
// let add = function (x) {
//   return function(y) {
//     return x + y
//   }
// }
// add(3)(4) // 7

// 通用的柯里化函数
function curry(fn) {
  let slice = Array.prototype.slice, // 将slice方法缓存起来
    args = slice.call(arguments, 1) // 将arguments转成数组并保存
  return function () {
    // 拼接新旧得参数
    let newArgs = args.concat(slice.call(arguments))
    return fn.apply(null, newArgs) // 返回执行得fn并传递最新参数
  }
}

function curry2(fn) {
  const g = (...allArgs) => allArgs.length >= fn.length ? 
  fn(...allArgs) : 
  (...args) => g(...allArgs, ...args)
  return g
}
// 测试
const foo = curry2((a,b,c) => {
  console.log(a,b,c)
})
foo(1)(2)(3)

const f = foo(1)(2)
f(5)

// bind实现原理
Function.prototype.bind = function(context) {
  let self = this,
    slice = Array.prototype.slice,
    args = slice.call(arguments);
  return function() {
    return self.apply(context, args.slice(1))
  }
}

// 反柯里化(简单来说就是函数得借用)
// obj = {
//   name: 'mg',
//   fn: function() {

//   }
// }

// obj.fn()
// obj.bar()
// (
//   function(){
//     // arguments借用数组得push方法
//     let result = Array.prototype.slice.call(arguments)
//     console.log(result)
//   }
// )(1,2,3,'hi')

// Math.max.apply(null, [1,2,10]) // 数组借用一下Math.max方法
Function.prototype.uncurrying = function() {
  let self = this // self此时就是下面的.prototype.push.uncurrying()
  return function () {
    let obj = Array.prototype.shift.call(arguments)
    /*
    obj = {
      'length': 1,
      '0':1
    }
     */
    return self.apply(obj, arguments)//Array.prototype.push(obj)
  }
}

let push = Array.prototype.push.uncurrying()
let obj = {
  'length': 1,
  '0':1
}
push(obj, 110)
// (
//   function() {
//     let result = slice(arguments)
//     console.log(result) // [1,2,3]
//   }
// )(1,2,3)

Function.prototype.uncurrying = function() {
  let self = this
  return function() {
    return Function.prototype.call.apply(self,arguments)
  }
}