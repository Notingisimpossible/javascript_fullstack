// 原型继承 和 Class继承
// 原型是如何实现继承的? Class如何实现继承? Class本质是什么?

// class 本质是函数
// class Person {

// }

// console.log(Person instanceof Function)


// 继承的本质就是复制,即重写原型对象,取而代之以一个新类型的实例

// 原型链继承
// function SuperType() {
//   this.property = true

// }
// SuperType.prototype.getSuperValue = function() {
//   return this.property
// }
// function SubType() {
//   this.subproperty = false
// }
// SubType.prototype = new SuperType()
// SubType.prototype.getSuperValue = function() {
//   return this.subproperty
// }

// var instance = new SubType()
// console.log(instance.getSuperValue()) // false
// 想要b继承a,只需要看a的原型链上有些什么东西,然后把b的原型重写成a的原型链上的东西


// 借用构造函数继承
// 只能继承父类的属性和方法,不能继承到原型上的属性和方法
// 无法实现复用
// function SuperType() {
//   this.color = ['red', 'yellow', 'blue']
// }
// function SubType() {
//   SuperType.call(this)
// }
// var instance = new SubType()
// instance.color.pus('black')
// console.log(instance.color)

// var instance1 = new SubType()
// console.log(instance1.color)

// 组合继承(最常见的继承方式)
// function Parent(value) {
//   this.val = value
// }
// Parent.prototype.getValue = function() {
//   console.log(this.val)
// }
// function Child (value) {
//   Parent.call(this, value)
// }
// Child.prototype = new Parent()
// const child = new Child()
// child.getValue() //1


// 寄生组合继承
// 该方式是为了优化 组合继承中的缺点:继承父亲函数时调用了构造函数
// function Parent(value) {
//   this.val = value
// }
// Parent.prototype.getValue = function() {
//   console.log(this.val)
// }
// function Child (value) {
//   Parent.call(this, value)
// }
// Child.prototype = Object.create(Parent.prototype, {
//   constructor: {
//     value: Child,
//     enumerable: false,
//     writable: true,
//     configurable: true
//   }
// })
// const child = new Child()
// child.getValue()


// Class 继承
class Parent{
  constructor(value) {
    this.val = value
  }
  getValue() {
    console.log(this.val)
  }
}

class Child extends Parent{
  constructor(value) {
    super(value)
    this.val = value
  }
}

let child = new Child(2)
child.getValue()
