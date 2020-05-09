# 第一个AP应用的构建
  - 配置环境 看官方文档
  - npm view react-native version 查看react-native版本信息  
# RN调试技巧
  - 当发生一些莫名其妙的错误，常用解决办法
  1. 刷新
  2. 使用react-native run-xxx命令重启App
  3. 删掉App程序，关掉本地服务，清除本地缓存

# Rn页面布局
  - 单位不再是px,而是dp(不用写)
  - rn当中大部分布局 默认采用flex布局 需要注意rn中的flex和web中的flex的差别
# 属性和状态
  - RN中使用两种数据来控制一个组件: props和state,props是在父组件中指定，而且一经指定，在被指定的组件生命周期中则不再改变，对于需要改变的数据，我们需要使用state

# RN核心组件和API
 - 在RN中使用原生组件是以来react的，所以使用过程中需要导入react
 - 常用组件
  1. View:类似于html中的div
  2. Button

# webview 
  - 在使用Webview加载本地html文件的时候，ios可以直接使用source={require('./pages/demo.html')}，但是Android 则不会显示.这是一个已知的问题，目前 0.46 版本还没有解决。但是我们可以想办法绕过去，Android 需要先把静态资源放到 android/app/src/main/assets 目录下面，然后把 require('./pages/demo.html')换成 {uri: 'file:///android_asset/pages/demo.html'}。WebViewScreen.js 会是下面这个样子
  - 解决办法
       ``` export default class WebViewScreen extends  React.Component {
        const source = (Platform.OS == 'ios') ? require('./pages/demo.html') : { uri: 'file:///android_asset/pages/demo.html' }
          render() {
            return (
              <WebView source={source} />
            )  
          }
        } ```