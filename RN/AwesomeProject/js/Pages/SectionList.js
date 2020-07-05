import React, { Component, PureComponent } from 'react'
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  SectionList
} from 'react-native'
import {
  WebView 
}from 'react-native-webview'

const CITY_NAME = [
  {
    data:['北京','上海','广州','深圳'],
    title:['一线']
  },
  {
    data:['杭州','成都','湖北','南昌'],
    title:['二线']
  },
  {
    data:['贵州','陕西','云南','山西'],
    title:['三线']
  }

]
// export default class FlatListDemo extends PureComponent{
//   constructor(props) {
//     super(props)

//     this.state={
//       data:['1','2','3','4','5','6','7','8','9','10'],
//       isLoading: false
//     }
//     console.disableYellowBox = true
//   }
//   _renderItem = ({item,index}) => {
//     // console.log(data)
//     return(
//       <View style={{height:130,backgroundColor:'skyblue'}}>
//         <Text>{item}</Text>
//       </View>
//     )
//   }
//   _ItemSeparatorComponent = () =>{
//     return (
//       <View style={{height:2,backgroundColor:'#fff'}}></View>
//     )
//   }
//   _ListEmptyComponent = () => {
//     return (
//       <View>
//         <Text>数据没有了</Text>
//       </View>
//     )
//   }
//   _ListFooterComponent = () => {
//     return this.state.data.length < 20 ? <View></View>:(
//       <View>
//         <Text>我也是有底线的</Text>
//       </View>
//     )
//   }
//   _onRefresh = () => {
//     alert('ok')
//   }
//   _onEndReached = () =>{
//     const data = this.state.data
//     const newData = data.concat(this.state.data)
//     this.setState({
//       data: newData
//     })
//   }
//   render(){
//     return(
//       <View style={{ flex: 1, backgroundColor: 'green' }}>
//         <SectionList
//           renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
//           renderSectionHeader={({ section: { title } }) => (
//             <Text style={{ fontWeight: "bold" }}>{title}</Text>
//           )}
//           sections={[
//             { title: "Title1", data: ["item1", "item2"] },
//             { title: "Title2", data: ["item3", "item4"] },
//             { title: "Title3", data: ["item5", "item6"] }
//           ]}
//           keyExtractor={(item, index) => item + index}
//         />
//       </View>
//     )
//   }
// }

export default class SectionListDemo extends Component{
  constructor(props) {
    super(props)

    this.state = {
      dataArray: CITY_NAME,
      isLoading: false
    }
  }
  _renderItem = ({item, index, section}) => {
    // console.log(item)
    return(
      <View>
        <Text>{item}</Text>
      </View>
    )
  }
  _renderSectionHeader = ({section}) => {
    console.log(section)
    return(
      <View>
        <Text>{section.title}</Text>
      </View>
    )
  }

  render() {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <SectionList 
          sections={this.state.dataArray}
          renderItem={data => this._renderItem(data)}
          renderSectionHeader={data => this._renderSectionHeader(data)}
        />
      </View>
    )
  }
}
const style=StyleSheet.create({

})