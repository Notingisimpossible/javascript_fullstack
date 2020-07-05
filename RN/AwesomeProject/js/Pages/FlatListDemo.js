import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native'
import {
  WebView 
}from 'react-native-webview'

export default class FlatList extends Component{
  constructor(props){
    super(props)

    this.state = {
      name: 'mg',
      age: 18,
      url: 'https://www.baidu.com'
    }
  }
  render() {
    return(
      <View style={{flex:1, height:200, justifyContent:'center'}}>
        {/* <View style={{flex:1, backgroundColor:'green'}}>
          <Text style={{color:'#fff', fontSize: 40}}
          numberOfLines={1}
          ellipsizeMode='middle'
          >{this.state.age}
          </Text>
          <TextInput
          onChangeText={(val) => {
            this.setState({
              age: val
            })
          }}
           keyboardType={'phone-pad'} style={{height:40, width:200, borderColor:'#fff', borderWidth:1}}></TextInput>
        </View> */}
        <WebView style={{height:500}} source={{uri:'file:///android_asset/index.html'}} />
      </View>
    )
  }
}

const style = StyleSheet.create({

})