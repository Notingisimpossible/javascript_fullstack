// 函数作为返回值输出
function isType(type) { //此处的isType也属于偏函数得范畴，偏函数就是一个包含预处理得新函数，以便以后调用
  return function(obj){
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
}

const isArray = isType('Array')
const isString = isType('String')
console.log(isArray([1,2,3,4]))

// 预置函数
function after(time, cb) {
  return function() {
    if(--time === 0) {
      cb
    }
  }
}