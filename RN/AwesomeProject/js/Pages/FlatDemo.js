import React, { Component, PureComponent } from 'react'
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableHighlight
} from 'react-native'
import {
  WebView 
}from 'react-native-webview'

export default class FlatListDemo extends PureComponent{
  constructor(props) {
    super(props)

    this.state={
      data:['1','2','3','4','5','6','7','8','9','10'],
      isLoading: false
    }
    console.disableYellowBox = true
  }
  _onPress = () => {
    alert('you press it')
  }
  _renderItem = ({item,index}) => {
    // console.log(data)
    return(
      <TouchableHighlight onPress={this._onPress}>
        <View style={{ height: 130, backgroundColor: 'skyblue' }}>
          <Text>{item}</Text>
        </View>
      </TouchableHighlight>
    )
  }
  _ItemSeparatorComponent = () =>{
    return (
      <View style={{height:2,backgroundColor:'#fff'}}></View>
    )
  }
  _ListEmptyComponent = () => {
    return (
      <View>
        <Text>数据没有了</Text>
      </View>
    )
  }
  _ListFooterComponent = () => {
    return this.state.data.length < 20 ? <View></View>:(
      <View>
        <Text>我也是有底线的</Text>
      </View>
    )
  }
  _onRefresh = () => {
    alert('ok')
  }
  _onEndReached = () =>{
    const data = this.state.data
    const newData = data.concat(this.state.data)
    this.setState({
      data: newData
    })
  }
  render(){
    return(
      <View style={{flex:1, backgroundColor:'green'}}>
        <FlatList data={this.state.data}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this._ItemSeparatorComponent}
          ListFooterComponent={this._ListFooterComponent}
          ListEmptyComponent={this._ListEmptyComponent}
          onRefresh={this._onRefresh}
          refreshing={this.state.isLoading}
          onEndReachedThreshold={0.5}
          onEndReached={this._onEndReached}
        ></FlatList>
      </View>
    )
  }
}

const style=StyleSheet.create({
})