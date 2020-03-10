import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/scss/reset.scss'
require('./mock/index')
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

// 配置接口代理的baseURL
axios.defaults.baseURL = 'http://axure-admin.cn/'

// 配置请求超时时间 8 秒
axios.defaults.timeout = 8000
// 封装axios接口错误拦截
axios.interceptors.response.use(
  function (response) {
    const res = response.data
    if (res.status === 0) {
      // 状态码为 0 请求成功，返回数据
      return res.data
    } else if (res.status === 10) {
      // 状态码为 10 表示未登录，跳转到登录页面
      window.location.href = '/#/login'
      // 返回提示信息
      return Vue.prototype.$message.error('未登录')
    } else {
      // 请求错误，返回提示信息
      return Vue.prototype.$message.error('请求错误')
    }
  }
)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
