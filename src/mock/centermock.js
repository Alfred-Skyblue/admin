import ApiPath from '@/api/ApiPath'
const Mock = require('mockjs')

Mock.mock(ApiPath.center.statistic, 'get', function (option) {
  return Mock.mock({
    data: [
      {
        title: '员工数量',
        'num|500': 500
      },
      {
        title: '在线人数',
        'num|0-500': 500
      },
      {
        title: '产品数量',
        'num|500-1500': 500
      }
    ],
    status: 0,
    msg: '请求成功'
  })
})
Mock.mock(ApiPath.center.getModuleInfo, 'get', function (option) {
  return Mock.mock({
    data: [
      {
        id: 2,
        title: '企业设置',
        icon: 'el-icon-office-building',
        path: '/enterprise'
      },
      {
        id: 3,
        title: '组织架构',
        icon: 'el-icon-s-management',
        path: '/organization'
      },
      {
        id: 4,
        title: '职务权限',
        icon: 'el-icon-s-check',
        path: '/duty'
      },
      {
        id: 5,
        title: '员工管理',
        icon: 'el-icon-s-custom',
        path: '/staff'
      },
      {
        id: 6,
        title: '模块管理',
        icon: 'el-icon-s-grid',
        path: '/module'
      },
      {
        id: 7,
        title: '产品管理',
        icon: 'el-icon-box',
        path: '/admin'
      },
      {
        id: 8,
        title: '业务管理',
        icon: 'el-icon-edit-outline',
        path: '/business'
      },
      {
        id: 9,
        title: '字段设置',
        icon: 'el-icon-document',
        path: '/field'
      },
      {
        id: 10,
        title: '字典管理',
        icon: 'el-icon-collection',
        path: '/dictionaries'
      },
      {
        id: 11,
        title: '日志管理',
        icon: 'el-icon-notebook-1',
        path: '/log'
      }
    ],
    status: 0,
    msg: '请求成功'
  })
})
