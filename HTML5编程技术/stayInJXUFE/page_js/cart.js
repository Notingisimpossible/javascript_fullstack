$(".waitOrder").on('click', function () {
  $(".waitOrder").addClass("nav-color")
  $(".successOrder").removeClass("nav-color")
  $(".waitEvaluate").removeClass("nav-color")
})
$(".successOrder").on('click', function () {
  $(".waitOrder").removeClass("nav-color")
  $(".successOrder").addClass("nav-color")
  $(".waitEvaluate").removeClass("nav-color")
})
$(".waitEvaluate").on('click', function () {
  $(".waitOrder").removeClass("nav-color")
  $(".successOrder").removeClass("nav-color")
  $(".waitEvaluate").addClass("nav-color")
})
$("#icon-search").on('click', function() {
  window.location.href = "./search.html"
})
$("#icon-msg").on('click', function() {
  window.location.href = "./404.html"
})
$(".order-list-button-ul").on('click', function(event) {
  let liText = event.target.textContent
  let oLi = event.target || event.srcElement
  if(liText === "去配送"){
    oLi.innerHTML = "待配送"
    oLi.style.color = "red"
  }else if(liText === "未收到货"){
    alert("吼，那你联系一下店家叭，店家电话是：18279526994")
  }else if(liText === "取消配送"){
    alert("您已经成功取消配送！")
    delList(event)
    // console.log(event.target.className)
  }
})
function delList(event){
  $(".li1").on('click',function(){
    if(event.target.className === "order-list-button-ul-li3"){
      $(".li1").fadeOut(500)
      event.target.className = undefined
    }
  })
  $(".li2").on('click',function(){
    if(event.target.className === "order-list-button-ul-li3"){
      $(".li2").fadeOut(500)
      event.target.className = undefined
    }
  })
  $(".li3").on('click',function(){
    if(event.target.className === "order-list-button-ul-li3"){
      $(".li3").fadeOut(500)
      event.target.className = undefined
    }
  })
  $(".li4").on('click',function(){
    if(event.target.className === "order-list-button-ul-li3"){
      $(".li4").fadeOut(500)
      event.target.className = undefined
    }
  })
  $(".li5").on('click',function(){
    if(event.target.className === "order-list-button-ul-li3"){
      $(".li5").fadeOut(500)
      event.target.className = undefined
    }
  })
}