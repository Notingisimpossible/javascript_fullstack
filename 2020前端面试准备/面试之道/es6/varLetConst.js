// es6
// var let const的区别
// 什么是变量提升？什么是暂时性死区？
// hoisting

// 不仅变量会提升，函数也会提升
// var a = 1
// let b = 1
// const c = 1
// console.log(window.b) // undefined

// function test() {
//   console.log(a)
//   let a
// }
// test()// 报错，原因是存在暂时性死区

// 为什么要存在提升？
// 提升是为了解决函数之间的相互调用
function test1() {
  console.log(1)
  test2()
}

function test2() {
  console.log(2)
  test1()
}
test1()

// 总结：
// 函数提升优先于变量提升，函数提升会把整个函数挪到作⽤域 顶部，
// 变量提升只会把声明挪到作⽤域顶部 
// var 存在提升，我们能在声明之前使⽤。
// let、const 因为暂 时性死区的原因，不能在声明前使⽤ var 在全局作⽤域下声明变量会导致变量挂载在 window 上， 其他两者不会 let 和 const 作⽤基本⼀致，但是后者声明的变量不能再次