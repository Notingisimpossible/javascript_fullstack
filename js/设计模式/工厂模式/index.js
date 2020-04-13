var XMLHttpFactory = function() {
  // 这是一个简单工厂
}

XMLHttpFactory.createXMLHttp = function() {
  var XMLHttp = null
  // XMLHttpFActory.createXMLHttp() 这个方法根据当前环境返回一个XML对象
  if (window.XMLHttpRequest) {
    XMLHttp = new XMLHttpRequest()
  }else if (window.ActiveXObject) {
    XMLHttp = new ActiveXObject("Microsoft.XMLHTTP")
  }
  return XMLHttp
}

var AjaxHander = function () {
  var XMLHttp = XMLHttpFactory.createXMLHttp()//具体操作
}