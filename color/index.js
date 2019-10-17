const startBtn = document
.querySelector('#page-one button');
const pageOne = document
.querySelector('#page-one');
startBtn.addEventListener('click', 
function() {
  // 关掉第一屏
  pageOne.style.display = 'none';
})
// 初始化
let time = 30;
function init() {
  // 
  setInterval(function() {
    time --;
    // DOM 操作
    document.getElementById('timer')
    .innerHTML = time;
  }, 1000)
  // 画格子
}
init()
let item = `
    <div class="block" style="width: ${blockWidth}%">
        <div class="block-inner"></div>
    </div>
    `;
    /**
 * 根据关卡等级返回相应的一般颜色和特殊颜色
 * @param {number} step 关卡
 */
function getColor(step) {
    let random = Math.floor(100 / step);
    // let random = Math.floor(Math.abs(100 - 4 * step));
    let color = randomColor(17, 255),
      m = color.match(/[\da-z]{2}/g);
    console.log("m", m);
    console.log(typeof m[0]);
    console.log("color", color);
    for (let i = 0; i < m.length; i++) m[i] = parseInt(m[i], 16); //rgb
    let specialColor =
      getRandomColorNumber(m[0], random) +
      getRandomColorNumber(m[1], random) +
      getRandomColorNumber(m[2], random);
    return [color, specialColor];
  }
  
  function getRandomColorNumber(num, random) {
    let temp = Math.floor(num + (Math.random() < 0.5 ? -1 : 1) * random);
    if (temp > 255) {
      return "ff";
    } else if (temp > 16) {
      return temp.toString(16);
    } else if (temp > 0) {
      return "0" + temp.toString(16);
    } else {
      return "00";
    }
  }
  // 随机颜色 min 大于16
  function randomColor(min, max) {
    var r = randomNum(min, max).toString(16);
    var g = randomNum(min, max).toString(16);
    var b = randomNum(min, max).toString(16);
    return r + g + b;
  }
  // 随机数
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }