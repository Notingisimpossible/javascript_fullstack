import React from 'react';


const Test = React.memo(() => (
  <div>
    <Home />
  </div>
))
class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      name:'mg',
      age:26,
      count: 0
    }
  }

  componentDidMount() {
    // ajax(){}
    this.setState({
      name:'牛皮'
    })
  }
  handle() {
    // new Promise(resolve => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   resolve(this.state.count)
    // }).then(res => this.setState({
    //   count: this.state.count + 1
    // })).then(res => this.setState({
    //   count: this.state.count + 1
    // }))
    this.setState((prevState) => ({
        count: prevState.count + 1
    }))
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }
  render () {
    return(
      <div onClick={this.handle.bind(this)}>{this.state.count}</div>
    )
  }
}

export default Test