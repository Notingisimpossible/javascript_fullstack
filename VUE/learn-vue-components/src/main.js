// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview' // UI组件库 70%常用 成熟的UI框架
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView) // 全局可用
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
