import React,{Component} from 'react'
import {View,Text,StyleSheet, ActivityIndicator,Button,Image} from 'react-native'
export default class App extends Component {
  render(){
    return(
      <View style={style.item}>
        <ActivityIndicator size="large" color="#0000ff" />
        <View>
          <Text>1</Text>
          <Image style={{width: 50, height: 50}} source={require('../../img/timg.jpg')}></Image>
          <Image style={{width: 50, height: 50}} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589023962162&di=337f845e0e3a029f981429d5c9f45b33&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg'}}></Image>
          <Button title="点我" color="blue" onPress={() => alert('hello world')}></Button>
        </View>
        <View>
          <Text>2</Text>
        </View>
        <View>
          <Text>
            3
          </Text>
        </View>
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