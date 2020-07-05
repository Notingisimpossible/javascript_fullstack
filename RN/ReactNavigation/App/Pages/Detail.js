import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


export default class DetailPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome To DetailPage</Text>
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
