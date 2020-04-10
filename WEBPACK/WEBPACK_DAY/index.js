import _ from 'lodash'
console.log(_.join(["a","b","c"],"***")) // 1Mb














// import {add} from './a.js'
// import "./index.css"
// add(1,2)


// import "@babel/polyfill"//以全局变量的方式注入进来的，window.Promise,他会造成全局变量的污染
// @babel/plugin-transform-runtime 以插件的形式引入,不会造成全局变量的污染,因此他也不会对类似的Array.prototype.includes()进行polyfill
// import React,{Component} from 'react'
// import ReactDom from 'react-dom'
// import Child from './index.jsx'
// class App extends Component{
//   render() {
//     return (
//       <div>
//         <Child />
//       </div>
//     )
//   }
// }

// ReactDom.render(<App/>, document.getElementById("app"))

// let obj = {}

// const arr = [new Promise(() => {}),new Promise(() => {})]
// arr.map(item => {
//   console.log(item)
// })

// import './index.css'
// import a from './a'
// import b from './b'

// b()
// a()

// if (module.hot) {
//   module.hot.accept("./a", () => {
//     console.log("有更新了")
//     document.body.removeChild(document.getElementById("number"))
//     a()
//   })
// }

// HMR默认对css模块支持较好，对js模块需要额外处理
// 通过module.hot.accept来对需要跟新的模块进行监控
// var btn = document.createElement("button")
// btn.innerHTML = "新增"
// document.body.appendChild(btn)

// btn.onclick = function(){
//   var div = document.createElement("div")
//   div.innerHTML = "item"
//   document.body.appendChild(div)
// }