import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { Button, Select } from "element-ui"
import service from './utils/http'
import urls from './utils/url'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(Button).use(Select)
Vue.use(ElementUi)
Vue.prototype.$https = service
Vue.prototype.$urls = urls

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
