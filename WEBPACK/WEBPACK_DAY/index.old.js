import a from './a'
import b from './b'
import pic from './img/11.png'
import './index.css'
import axios from 'axios'


var img = new Image()
img.src = pic
img.classList.add('pic')
var root = document.getElementById("root")
root.append(img)
// 既然webpack默认只认识js模块，那么遇到非js模块该怎么办？
// loader
a()
b()

axios.get('/api/info').then((res)=>{
  console.log(res)
})
function lm() {
  console.log('welcome to lm')
}

lm()