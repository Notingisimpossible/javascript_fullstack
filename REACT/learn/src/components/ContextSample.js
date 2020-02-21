// 组件上下文通信

import React, {Component} from 'react'

// 创建上下文
const Context = React.createContext()

const store = {
  name:'hahah',
  sayHi () {
    console.log(this.name)
  }
}
// (Comp) => {
//   ()=>{}
// }
const withProvide = Comp => props => {
  <Context.Consumer />
}