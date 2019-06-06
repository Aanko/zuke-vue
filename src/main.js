import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入公共资源文件
import './assets/css/common.css'
import './assets/js/common.js'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
