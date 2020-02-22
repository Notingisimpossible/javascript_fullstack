// Hook(钩子函数) 他可以在不编写class的情况下使用state内部的状态和React其他的特性

// 使用state Hook
import React, { useState, useEffect } from 'react'

// class HooksTest extends Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       count: 0
//     }
//   }
// }
export default function HooksTest () {
  // useState(initiaState), 接收初始状态，返回一个状态变量和他的更形函数，属性名可以自定义
  // 声明一个新的叫做"count"的state变量
  const [count, setCount] = useState(0)

  // 数据获取，设置订阅，以及手动更改React组件中的DOM --- 副作用
  useEffect(() => {
    
    document.title = `您点击了${count}次`
  })

  return (
    <div>
      <p>
        you click {count} times
      </p>
      {/*调用setCount 修改count */}
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  )

}