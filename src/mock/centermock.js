import ApiPath from '@/api/ApiPath'
const Mock = require('mockjs')

Mock.mock(ApiPath.center.statistic, 'get', {
  code: 0,
  'data|3': [{
    title: [
      '内部分享',
      '公司宣传',
      '招聘信息'
    ],
    num: 100
  }],
  msg: 'success'
})
