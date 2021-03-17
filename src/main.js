import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入rem.js
import "./assets/js/rem"
//引入重置样式
import "./assets/css/reset.css"
//引入mock
import "./mock/mock"
//引入axios 并挂载在this上
import axios from "./serve/axios"
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
