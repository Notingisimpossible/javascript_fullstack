var stopEvent = function(e) { // 门面
  // 同时阻止事件默认行为和冒泡
  e.stopPropagation()
  e.preventDefault()
}
// stopEvent() 生产一个门面
$('#a').click(function(e){
  stopEvent(e)
})