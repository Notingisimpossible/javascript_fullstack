// 什么是闭包？

// 闭包的定义：函数 A 内部有一个函数 B， 函数 B 可以访问函数 A 中的变量，那么函数B就是闭包

// 在JS中，闭包存在的意义就是让我们可以间接的访问函数内部的变量
// function A() {
//   let a = 1
//   window.B = function() {
//     console.log(a)
//   }
// }

// function B() {

// }

// 循环中使用闭包解决'var'定义函数的问题
// for (var i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i)
//   },i*1000)
// }

// 第一种
// 闭包会保留词法作用域
// 内存泄漏
// for (var i = 1; i <= 5; i++) {
//   (function(j){
//     setTimeout(function timer(){
//       console.log(j)
//     }, j*1000)
//   })(i)
// }

// 第二种
// for (var i = 1; i <= 5; i++) {
//   setTimeout(function timer(j) {
//     console.log(j)
//   },i*1000, i)
// }

// 第三种
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  },i*1000)
}