// 组件上下文通信 可以使用context,这种模式下会有两个角色，Provider,Consumer
// Provider为外层组件，可以用来提供数据，当内部需要数据时用Consumer来获取

import React, {Component} from 'react'

// 创建上下文
const Context = React.createContext()

const store = {
  name:'恭喜您中奖了',
  sayHi () {
    console.log(this.name)
  }
}
// (Comp) => {
//   ()=>{}
// }
const withProvide = Comp => props => (
  <Context.Provider value={store}>
    <Comp {...props}/>
  </Context.Provider>
)

const withConsumer = Comp => props => (
  <Context.Consumer>
    {/* 必须内嵌一个函数 */}
    {value => <Comp {...props} value={value} />}
  </Context.Consumer>
)
// @withProvide
@withConsumer
class Inner extends Component {
  render(){
    console.log('Inner')
    return(
      <div>
        {this.props.value.name}
      </div>
    )
  }
}

@withProvide
// @withConsumer
class ContextSample extends Component {
  render(){
    console.log('ContextSample')
    return(
      <div>
        <Inner></Inner>
      </div>
    )
  }
}

export default ContextSample 