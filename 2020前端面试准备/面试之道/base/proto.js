// 如何理解原型？如何理解原型链？
// 参考文章:https://www.jianshu.com/p/7d58f8f45557

let obj = {
  age: 26
}
// 每个js对象都有__proto__属性，指向原型。
// 为了让我们访问到对象的内部属性[[prototype]]
// 原型的constructor属性指向构造函数，构造函数通过prototype属性指回原型


// 原型链就是多个对象通过__proto__的方式连接起来

// 总结：
// Object是所有对象的父亲，所有对象都可以通过__proto__找到它
// Function是所有函数的父亲
// 函数prototype是一个对象
// 对象的__proto__属性指向原型, __proto__将对象和原型连接起来

// obj.hasOwnPrototype() 使用方法hasOwnProperty,属性只有存在于实例中才会返回true
// Object.keys() 此方法可以获取对象的所有可枚举的属性的名字