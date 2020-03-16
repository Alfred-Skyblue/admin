// 系统公告页面数据

import ApiPath from '@/api/ApiPath'
const Mock = require('mockjs')

Mock.mock(ApiPath.system.getSystemTableData, 'get', function (option) {
  return Mock.mock({
    'data|50-100': [{
      'id|+1': 1,
      date: '@date()',
      name: '@cname()',
      title: '@ctitle(5,8)',
      column: '@cword(3,5)',
      take: '@cname()',
      view: '@integer( 100, 2000 )'
    }],
    status: 0,
    msg: '请求成功'
  })
})
