import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入公共资源文件
import './assets/css/common.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/js/common.js'
import Prism from 'prismjs';

Vue.config.productionTip = false

Vue.use(Prism)

Prism.highlightAll()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
