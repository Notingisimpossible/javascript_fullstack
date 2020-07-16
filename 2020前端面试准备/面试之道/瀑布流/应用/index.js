var i = 0;//已显示的图片数
img_width = 250;//图片宽度
var gap = 10;// 每张图片的间隔 为10px
var datas = [
  "./img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg",
  "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg",
  "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg", "img/15.jpg",
  "img/16.jpg", "img/17.jpg", "img/18.jpg", "img/19.jpg", "img/20.jpg",
  "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg",
  "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg", "img/15.jpg"
]//图片路径数组,用于模拟ajax请求获得的图片，

window.onload = function () {
  var box = document.getElementById('box');
  var items = box.children;//得到子元素集合
  waterFall();
  //对num张照片进行瀑布流布局
  function waterFall() {
    //得到列数 = 页面可视区域宽度 / 图片的宽度
    var pageWidth = getClient().width;
    var itemWidth = img_width;
    var columns = parseInt(pageWidth / (itemWidth + gap)); // 向下取整

    var arr = [];//用于判断最小高度的数组
    for (var i = 0; i < items.length; i++) {
      if (i < columns) {
        // 对第一行图片进行布局
        items[i].style.top = 0;
        items[i].style.left = (itemWidth + gap) * i + 'px';
        arr.push(items[i].offsetHeight);
      } else {
        // 对接下来的图片进行定位
        // 首先要找到数组中最小高度和它的索引
        var minHeight = arr[0];
        var index = 0;
        for (var j = 0; j < arr.length; j++) {
          if (minHeight > arr[j]) {
            minHeight = arr[j];
            index = j;
          }
        }
        // 设置下一行的第一个盒子位置
        // top值就是最小列的高度 + gap
        items[i].style.top = arr[index] + gap + 'px';
        // left值就是最小列距离左边的距离
        items[i].style.left = items[index].offsetLeft + 'px';

        // 修改最小列的高度
        // 最小列的高度 = 当前自己的高度 + 拼接过来的高度 + 间隙的高度
        arr[index] = arr[index] + items[i].offsetHeight + gap;
      }
    }
  }
  // 页面尺寸改变时实时触发
  window.onresize = function () {
    waterFall();
  };


  // 当加载到底部时，从datas读取30张图片生成img并放入div，然后重新布局
  window.onscroll = function () {
    console.log(items)
    console.log("getClient().height",getClient().height,"getScrollTop()",getScrollTop(),"items[items.length - 1].offsetTop",items[items.length - 1].offsetTop)
    if (getClient().height + getScrollTop() >= items[items.length - 1].offsetTop) {
      var i = 0;
      while (i < datas.length) {
        var div = document.createElement("div");
        div.className = "item";
        div.innerHTML = '<img src="' + datas[i] + '" alt="">';
        div.firstChild.style.width = img_width;
        box.appendChild(div);
        i++;
      }
      waterFall();
    }

  };

};
// clientWidth 处理兼容性:获得浏览器可视区域的宽和高
function getClient() {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  }
}
// scrollTop兼容性处理 :获得浏览器可视区域 距 整个html文档顶部的距离
function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop;
}