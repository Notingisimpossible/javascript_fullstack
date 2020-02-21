// PureComponent 组件， 其实就是定制化后的shouldComponentUpdate 的加强版
import React, {Component, PureComponent} from 'react'

// shouldComponentUpdate 的加强版
class PureComponentTest extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      comments:[
        {body: 'react is very good', author:'fanceBook'},
        {body: 'vue is very good', author:'youtobe'}
      ]
    }
  }

  shouldComponentUpdate (nextProp) {
    if (nextProp.data.body === this.props.data.body && nextProp.data.author === this.props.data.author) {
      return false      
    }else {
      return true
    }
  }
  render () {
    console.log()
    return(
      <div>
        <p>{this.props.body}</p>
        <p>{this.props.author}</p>
      </div>
    )
  }
}

export default PureComponentTest;