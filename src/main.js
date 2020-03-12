import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import AFTableColumn from 'af-table-column'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/scss/reset.scss'
import http from './http'
require('./mock/index')
Vue.use(ElementUI)
// 加载ElementUI表格自适应插件
Vue.use(AFTableColumn)

Vue.config.productionTip = false
Vue.prototype.$http = http
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
