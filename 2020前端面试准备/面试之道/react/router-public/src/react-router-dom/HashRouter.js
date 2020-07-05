import React, { Component } from 'react';
import {Provider } from '../context'
export default class HashRouter extends Component {
  constructor(){
    super()

    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || '/'
      },
      history:{
        push(to){
          window.location.hash = to
        }
      }
    }
  }

  componentDidMount() {
    // 默认hash没有时，跳转到根路径
    window.location.hash = window.location.hash || '/'
    // 监听哈希值变化，重新设置状态
    window.addEventListener("hashchange",(e) => {
      this.setState({
        location:{
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/'
        }
      })
    })
  }
  render() {
    let value = {
      location: this.state.location,
      history: this.state.history
    }
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}
