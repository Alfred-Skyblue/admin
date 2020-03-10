// import ApiPath from '@/api/ApiPath'
const Mock = require('mockjs')
var Random = Mock.Random

Mock.mock('http://axure-admin.cn/notice/getPartNotice', 'get', function (option) {
  return Mock.mock({
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
})
