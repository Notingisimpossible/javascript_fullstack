$(".waitOrder").on('click', function () {
  $(".waitOrder").addClass("nav-color")
  $(".successOrder").removeClass("nav-color")
  $(".waitEvaluate").removeClass("nav-color")
  $(".moneyEvaluate").removeClass("nav-color")
})
$(".successOrder").on('click', function () {
  $(".waitOrder").removeClass("nav-color")
  $(".successOrder").addClass("nav-color")
  $(".waitEvaluate").removeClass("nav-color")
  $(".moneyEvaluate").removeClass("nav-color")
})
$(".waitEvaluate").on('click', function () {
  $(".waitOrder").removeClass("nav-color")
  $(".successOrder").removeClass("nav-color")
  $(".waitEvaluate").addClass("nav-color")
  $(".moneyEvaluate").removeClass("nav-color")
})
$(".moneyEvaluate").on('click', function () {
  $(".waitOrder").removeClass("nav-color")
  $(".successOrder").removeClass("nav-color")
  $(".waitEvaluate").removeClass("nav-color")
  $(".moneyEvaluate").addClass("nav-color")
})
$("#icon-search").on('click', function () {
  window.location.href = "./search.html"
})
$("#icon-oreder").on('click', function () {
  window.location.href = "./cart.html"
})
$(".order-list-button-ul").on('click', function(event) {
  let liText = event.target.textContent
  let oLi = event.target || event.srcElement
  if(liText === "接单"){
    oLi.innerHTML = "接单成功"
    oLi.style.color = "red"
  }else if(liText === "联系店家"){
    alert("店家电话是：18279526994")
  }else if(liText === "锁单"){
    oLi.innerHTML = "锁单成功"
    oLi.style.color = "red"
  }
})