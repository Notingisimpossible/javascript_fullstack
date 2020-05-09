import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showText:'Hello'
    }
  }
  componentDidMount() {
    const timer = setTimeout(() => {
      this.setState({
        showText: '敏哥'
      })
    },3000)
  }
  render(){
    return(
      <View style={style.item}>
        <Text>{this.state.showText}</Text>
        <Test nameTest={'Tom'}/>
      </View>
    )
  }
}

class Test extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Text style={style.text}>{this.props.nameTest}</Text>
      </View>
    )
  }
}
const style = StyleSheet.create({
  item:{
    flex: 1,
    backgroundColor: 'red'
  },
  itemCenter:{
    justifyContent: 'center'
  },
  text:{
    color: 'green'
  }
})