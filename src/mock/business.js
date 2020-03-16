import ApiPath from '@/api/ApiPath'
const Mock = require('mockjs')

Mock.mock(ApiPath.business.getBusinessList, 'get', function (option) {
  console.log(option)
  return Mock.mock({
    'data|30': [{
      'id|+1': 0,
      input: '',
      name: '@cname()',
      flag: false
    }],
    status: 0,
    msg: '请求成功'
  })
})
