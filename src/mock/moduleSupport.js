// 模块管理页面数据
import ApiPath from '@/api/ApiPath'
const Mock = require('mockjs')

Mock.mock(ApiPath.moduleSupport.getModuleTableData, 'get', function (option) {
  return Mock.mock({
    'data|10': [{
      moduleName: '@ctitle(3,5)',
      name: '@cname()',
      describe: '@cword(5,8)',
      switch: false
    }],
    status: 0,
    msg: '请求成功'
  })
})
