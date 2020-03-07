window.onload = function() {
  var oOut = document.getElementById("out");
  var oleft = document.getElementById("left");
  var oright = document.getElementById("right");
  var aLi = document.getElementsByTagName("li");
  var aImgs = document.getElementsByTagName("img");
  var timer = null;
  var myTimeOut = null;

  // 存储所有图片地址，按条件动态添加地址达到更改图片目的
  var imgLists = ['images/01.jpg','images/02.jpg','images/03.jpg','images/04.jpg','images/05.jpg']
  var i = 0

  // 给li标签动态添加属性
  aLi[i].setAttribute("class", "select")

  // 给左右icon添加监听事件，当点击时更换图片，同时给下面小圆圈动态添加id样式
  oleft.addEventListener('click', function(e){
    cleanTimer()//调用清除定时器方法，在每次按下切换图片按钮之后都清除计时器，1.5秒后再次调用图片轮播函数定时器
    aLi[i].removeAttribute('class','select')
    if(i == 0) {
      i = 4
    }else{
      i--
    }
    aImgs[0].src=imgLists[i]
    aLi[i].setAttribute("class", "select")
  })
  oright.addEventListener('click', function(e){
    cleanTimer()
    aLi[i].removeAttribute('class','select')
    if(i == 4) {
      i = 0
    }else{
      i++
    }
    aImgs[0].src=imgLists[i]
    aLi[i].setAttribute("class", "select")
  })

  // 给下面的小圆圈添加监听事件，当单击时更换到对应图片
  for(var j=0; j<aLi.length;j++) {
    aLi[j].addEventListener("click", function(e){
      cleanTimer()
      var k = e.target.innerText
      aLi[i].removeAttribute("class", "select")
      aLi[k-1].setAttribute("class", "select")
      i = k-1
      aImgs[0].src=imgLists[i]
    })
  }

  // 定义一个清楚计时器方法，每当点击切换图片后清除计时器，过1.5秒后重新启用定时器
  function cleanTimer(){
    clearInterval(timer)
    clearTimeout(myTimeOut)
    myTimeOut = setTimeout(function(e){
      scrollImg()
    },1500)
  }
  // 定时轮播
  scrollImg()
  function scrollImg() {
    timer = setInterval(function(){
      aLi[i].removeAttribute("class", "select")
      i++
      if (i==5) {
        i = 0
      }
      aLi[i].setAttribute("class", "select")
      aImgs[0].src = imgLists[i]
    },1500)
  }
}