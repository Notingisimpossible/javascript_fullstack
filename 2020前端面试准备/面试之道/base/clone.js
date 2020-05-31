// 深浅拷贝
// 什么是浅拷贝？如何实现浅拷贝？
// 什么是深拷贝？如何实现深拷贝？


// 浅拷贝
// let a = []
// let b = a
// b.push(1)
// console.log(a)

// 深拷贝
// Object.assign
// let a = {age: 1}
// let b = Object.assign({}, a)
// b.age = 3
// console.log(a)

// {...}实现浅拷贝
// let a = {age: 1, name:{my:'hello'}}
// let b = {...a}
// a.name.my = 'wn'
// console.log(b)

// 深拷贝

// JSON.parse(JSON.stringify(a))局限性
// 会忽略undefined
// 会忽略 Symbol
// 不能序列化函数
// 不能解决循环应用的对象
// let a = {age: 1, name:{my:'hello'}}
// let b = JSON.parse(JSON.stringify(a))
// a.name.my = 'wn'
// console.log(b)

// let obj = {
//   a: 1,
//   b:{
//     c:2,
//     d:3
//   }
// }

// obj.c = obj.b
// obj.e = obj.a
// obj.b.c = obj.c
// let newObj = JSON.parse(JSON.stringify(obj))
// console.log(newObj) //{ a: 1, b: { c: 2, d: 3 }, c: { c: 2, d: 3 }, e: 1 }

// let a = {
//   age: undefined,
//   name: Symbol('wn'),
//   jobs: function(){},
//   work: 'mg'
// }
// let b = JSON.parse(JSON.stringify(a))
// console.log(b) // { work: 'mg' }

// 如果你需要拷贝的对象含有内置类型并且不包含函数，可以使用MessageChannel

// 手写深拷贝？ 递归拷贝
function deepClone(obj) {
  let res = obj instanceof Array ? [] : {}
  for (let i in obj) {
    if(obj.hasOwnProperty(i)){
      res[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return res
}

let obj = {
  a: 1,
  b:{
    c:2,
    d:3
  }
}
let res = deepClone(obj)
obj.b.c = 20
console.log(res)