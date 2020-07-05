// let a = []
// let b = function(){}
// console.log(a instanceof Function)
// console.log(typeof a)
// console.log(b instanceof Object)
// console.log(typeof b)

// let a = '1111'
// console.log(typeof a)
// console.log(a instanceof Object)
// let a = ['1','2']
// for(item of a){
//   console.log(item)
// }

// let a = {age:'1',name:'mg'}
// let a = ['1','2']
// let b = a.map((item)=>{
//   return item
// })
// console.log(b)

// let a = {
//   age: 11,
//   name: 'mg'
// }
// let b = {
//   sex: 'man'
// }
// let c = {...a,...b}
// console.log(c)

// let a = Symbol(1)
// let b = Symbol(1)
// console.log(typeof a)
// console.log(a instanceof Symbol)

function a() {
  name:'mg'
}
let b = new a()
let c = Object.create(b)
console.log(b.isPrototypeOf(c))