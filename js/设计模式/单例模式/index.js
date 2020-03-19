// 独立对象  创建2个 一个是xiaowang 一个是xiaoli
// 让xiaoli 和 xiaowang 通过门铃进行通信
// 先看xiaowang 家有没有门 如果有 直接敲门didi 如果没有 先建门
// 两个单例开始通信

var xiaowang = (function(argument) { //
  var xiaowangjia = function(message) {
    this.menling = message
  }
  var door
  var info = {
    sendMessage: function(message) {
      if (!door) {
        door = new xiaowangjia(message)
      }
      return door
    }
  }
  return info
})()

var xiaoli = { // 静态的， 常驻到内存里
  callXiaowang: function(msg) {
    var _xw = xiaowang.sendMessage(msg)
    alert(_xw.menling)
    _xw = nll // 被垃圾回收
  }
}

xiaoli.callXiaowang('didi')

var person = {
  name: 'wn',
  age: 18,
  eat = function() {

  },
  run = function() {
    animal.run()
  }
}

var animal = {
  name: '小黑',
  weight: '20kg',
  run = function () {

  }
}