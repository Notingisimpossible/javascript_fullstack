-es5
js中 函数是一等公民
js 得过去 没有class 关键字
function LRuCahe()
类的构造函数
定义了一个类
new LRUCache 可以被实例化
new过程发生了什么？ 生成一个对象{} Object
内存中空的 {} new
加上属性 构造函数 this

面向对象 类， 构造函数 方法 属性 
  class constructor
  function A    函数本身 prototype  this.
  函数具有prototype属性
  火车头 constructor prototype对象 
  基于原型得面向对象 

  -任何函数都有prototype属性 他的值是对象
  key=>function(){}
  -任何对象都是_proto_,指向 构造函数得prototype属性
  js得面向对象，类和实例得关系 不是父子关系 没有血缘
  基于原型的 
  -new的过程 构造函数 被执行，创造一个this 指向对象
  添加属性 对象的 _proto_属性 找到原型链上的方法
  cache instanceof LRUCache
  js中没有类概念 LRUCache 也是对象 
-es6 7 8 
