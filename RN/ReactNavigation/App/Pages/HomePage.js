import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


export default class HomePage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome To HomePage</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f5fcff'
  },
  welcome:{
    fontSize: 26,
    color: 'yellow'
  }
});
