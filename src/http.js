import Vue from 'vue'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://axure-admin.cn',
  timeout: 8000
})

// 封装axios接口错误拦截
http.interceptors.response.use(
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
export default http
