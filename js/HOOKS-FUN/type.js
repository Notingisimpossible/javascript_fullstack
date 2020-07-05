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

let eat = after(3, function() {
  console.log('我吃饱了')
})


// 创建一个单例模式
let single = function (fn) {
  let ret;
  return function() {
    console.log(ret)
    return ret || (ret = fn.apply(this, arguments))
  }
}

let bindEvent = single(function() {
  // 虽然renders执行三次，bindEvent也执行三次
  // 但是根据单例模式特点，第一次被调用后就不再调用了
  document.getElementById('box').onclick = function() {
    alert('click')
  }
  return true
})

let renders = function() {
  console.log('渲染')
  bindEvent()
}

renders()
renders()
renders()