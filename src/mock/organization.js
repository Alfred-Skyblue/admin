// 组织架构页面数据
// 系统公告页面数据

import ApiPath from '@/api/ApiPath'
const Mock = require('mockjs')

Mock.mock(ApiPath.organization.getOrganizationTable, 'get', function (option) {
  return Mock.mock({
    'data|100-200': [{
      'id|+1': 1,
      department: '@ctitle(3)',
      memberNum: '@natural( 10, 100 )',
      date: '@date()',
      name: '@cname()',
      departmentInfo: '@cword( 5, 8 )',
      switch: true
    }],
    status: 0,
    msg: '请求成功'
  })
})
