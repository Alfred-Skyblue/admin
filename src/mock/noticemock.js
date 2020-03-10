import ApiPath from '@/api/ApiPath'
const Mock = require('mockjs')
var Random = Mock.Random

Mock.mock(ApiPath.notice.getPartNotice, 'get', function (option) {
  return Mock.mock({
    data: {
      'data|10': [{
        'category|1': [
          '内部分享',
          '公司宣传',
          '招聘信息'
        ],
        'title|1': '如何建立良好的客户关系',
        'author|1': '@CNAME',
        'createtime|1': Random.datetime()
      }]
    },
    status: 0,
    msg: '请求成功'
  })
})
