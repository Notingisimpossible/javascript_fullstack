// new 的原理？通过new的方式创建对象和通过字面量创建对象有啥区别？

function Persion(name) {
  this.name = name

}

// var wn = new Persion('蜗牛')

var wn = create (Persion,'蜗牛')
console.log(wn.__proto__ === Persion.prototype) // wn.__proto__ === Persion.prototype
console.log(wn.name)

// 1. 新生成一个对象
// 2. 连接到原型
// 3. 绑定This
// 4. 返回新对象
function create(){
  let obj = {}
  let Con = [].shift.call(arguments) // arguments ===> {"0":Persion,"1":"wn"}
  obj.__proto__ = Con.prototype
  let result = Con.apply(obj,arguments)
  return result instanceof Object ? result : obj
}