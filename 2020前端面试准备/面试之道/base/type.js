// typeof 是否能正确判断类型
// instanceof 能正确判断对象的原理是什么

typeof [] // object
typeof {} // object
typeof console.log //"function"
// typeof对于原始数据类型来说，除了null，都可以正确显示类型，typeof对于
// instanceof 是通过原型链来判断的

// 实现instanceof 原理
function _instanceof(letf, right) {
  let leftValue = letf.__proto__
  let rightValue = right.prototype
  while(true) {
    if(leftValue === null) {
      return false
    }
    if(leftValue === rightValue){
      return true
    }
    leftValue = leftValue.__proto__
  }
}