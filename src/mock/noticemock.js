// import ApiPath from '@/api/ApiPath'
const Mock = require('mockjs')
var Random = Mock.Random

Mock.mock('http://127.0.0.1:8888/notice/getPartNotice', 'get', {
  'code|1': 0,
  'data|10': [{
    'category|1': [
      '内部分享',
      '公司宣传',
      '招聘信息'
    ],
    'title|1': '如何建立良好的客户关系',
    'author|1': '@CNAME',
    'createtime|1': Random.now('minute')
  }],
  'msg|1': 'success'
})
Mock.mock('http://127.0.0.1:8888/getuserinfo', 'get', {
  code: 0,
  data: {
    fullName: '@CNAME', // 随机生成中文人名
    userId: 1000234234001,
    username: 'zhangsan'
  },
  msg: 'success'
})
