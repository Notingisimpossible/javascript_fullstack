const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
const width = 200,height=50;
ctx.width = "200px";
ctx.height = "50px";

canvas.addEventListener('click',function(){
  ctx.clearRect(0,0,width,height);//清除原来画线
  drawLine();
  drawText();
})
drawLine();
function drawLine() {
  for (let i = 0; i < 6; i++) {
    let beginX = Math.random()*width;
    let beginY = Math.random()*height;
    let endX = Math.random()*width;
    let endY = Math.random()*height;
    ctx.beginPath();
    ctx.moveTo(beginX, beginY);//画线起点
    ctx.lineTo(endX, endY);//画线终点位置
    ctx.strokeStyle = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;//画线颜色,正则表达式
    ctx.stroke();
  }
}
drawText();
function drawText(){
  var sourceText = ['a', 'b', 'c', 'd', 'e',
  'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'o', 'p',
  'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z']

  //4 随机 不重复
  let result = []
  for(let i=0;i<4;i++){
    const idx = Math.floor(Math.random()*sourceText.length);
    result.push(sourceText[idx]);
    // 删除
    sourceText.splice(idx,1);
  }
  for(let i=0; i<result.length; i++){
    // 
    ctx.font = '40px Helvetica';//设置字大小 字体
    ctx.fillStyle = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    ctx.textBaseLine = 'middle';//top bottom
    let preWidth = width/4-10;
    ctx.fillText(result[i],Math.random()*preWidth+i*preWidth,height/2);//画字 result文本内容
  }
}