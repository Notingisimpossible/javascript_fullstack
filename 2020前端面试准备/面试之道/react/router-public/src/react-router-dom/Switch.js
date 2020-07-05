import React, { Component } from 'react';
import {Consumer} from '../context'
import {pathToRegexp} from 'path-to-regexp'


export default class Switch extends Component {
  render() {
    return (
      <Consumer>
        {
          (state) => {
            let pathname = state.location.pathname
            let child = this.props.children
            for(let i = 0; i<child.length; i++) {
              let children = child[i]
              let path = children.props.path || ''
              
              let reg = pathToRegexp(path, [], {end:false})
              let result = pathname.match(reg)

              if (result) { // 匹配成功
                return children
              }
            }
            return null
          }
        }
      </Consumer>
    );
  }
}
