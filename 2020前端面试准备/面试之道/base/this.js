// 如何正确判断this ? 谁调用 就指向谁？
function foo() {
  console.log(this.a)
}
// var a = 1
// foo() // 1

const obj = {
  a:2,
  foo: foo
}
obj.foo()

// 1. 对于直接调用foo来说，不管foo函数写在什么地方，this都会指向全局对象(非严格模式，严格模式指向undefine)
// 2. 对于形如obj.foo()来说，谁调用函数，this就指向谁
// 3. 由 new 调用？ 绑定到新创建的对象, 不会被任何方式改变
// 当多种规则同时出现，this指向优先级高的
// new > bind(这类) > obj.foo() > 直接调用
// 箭头函数中的this一旦被绑定就不会被任何方式所改变
function a() { // 柯里化
  return () => {
    return () => {
      console.log(this)
    }
  }
}
console.log(a()()())

// 不管我们给函数bind几次，fn中的bing永远由第一次的bind决定，所以结果永远是window

// 箭头函数的this是啥？箭头函数本身没有this
// 箭头函数的this只取决于包裹它的第一个普通函数的this
// 另：在箭头函数中使用bind这类函数是无效的
