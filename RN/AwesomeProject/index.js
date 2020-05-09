/**
 * @format
 */

//  AppRegistry 注册函数
import {AppRegistry} from 'react-native';
import App from './js/Pages/FlatListDemo';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
