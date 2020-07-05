import React,{Component}from 'react'
import {DrawerLayoutAndroid, View, Text} from 'react-native'
export default class DrawerLayoutAndroidDemo extends Component {

  navigationView = (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text style={{margin: 10, fontSize: 15}}>I'm in the Drawer!</Text>
    </View>
  )
  render(){
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}//指定抽屉宽度
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        onDrawerClose={() => console.log('我关闭了抽屉')}
        statusBarBackgroundColor='green'
        renderNavigationView={() => this.navigationView}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
        </View>
      </DrawerLayoutAndroid>
    )
  }
}