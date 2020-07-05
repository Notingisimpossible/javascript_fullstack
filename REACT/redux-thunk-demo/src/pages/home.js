import React, { Component } from 'react';
import {Provider} from 'react-redux'
import Children from './children'
import store from '../store'
export default class Home extends Component {
  render() {
    return (
      <Provider store={store}>
        <div> Home </div>
        <Children />
      </Provider>
    );
  }
}