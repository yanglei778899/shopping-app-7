import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from "./service/axios";

//引入重置样式，rem
import "@/assets/css/reset.css"
import "@/assets/js/rem.js"
Vue.config.productionTip = false


/**
 * 挂载axios
 */
 Vue.prototype.$axios = axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
