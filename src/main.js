import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/scss/reset.scss'
import http from './http'

Vue.use(ElementUI)
Vue.config.productionTip = false
// 只在开发环境使用mock，而打包到生产环境时自动不使用mock
process.env.MOCK && require('@/mock')
Vue.prototype.$http = http
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
