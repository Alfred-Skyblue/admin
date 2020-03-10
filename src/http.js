import axios from 'axios'

const http = axios.create({
  baseURL: 'http://axure-admin.cn'
})

export default http
