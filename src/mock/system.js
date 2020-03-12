import ApiPath from '@/api/ApiPath'
const Mock = require('mockjs')

Mock.mock(ApiPath.system.getSystemTableData, 'get', function (option) {
  return Mock.mock({
    data: {
      'data|50-100': [{
        date: '@datetime()',
        name: '@cname()',
        title: '@cword(5,8)',
        column: '@cword(3,5)',
        take: '@cname()',
        view: '@integer( 100, 2000 )',
        operation: {
          details: '详情',
          delete: '删除'
        }
      }]
    },
    status: 0,
    msg: '请求成功'
  })
})
