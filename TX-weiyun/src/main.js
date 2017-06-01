// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false

// ！！！在使用这个注册的方法时，注意 this 指向问题
// 如：在 actions.js 中不能使用 this.$http! 因为那里的 this 不会指向 vue 实例
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
