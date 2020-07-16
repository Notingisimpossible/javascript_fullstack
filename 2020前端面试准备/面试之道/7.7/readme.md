# 1
  - Object.prototype.toString.call(null) 为什么得到"[object null]"
  答案：ECMA规定Object.prototype.toString内部逻辑：
  调用Object.prototype.toString 如果this的值：
  1. 是null返回[object Null]
  2. 是undefined 返回[object undefined]
  3. ...
  鉴于ECMA规定，我们的浏览器实现起来也要遵守上述逻辑，我们就可以用Object.prototype.toString来判断类型

# 2
  - ajax是一个js原生的底层的api === XmlHttpRequest