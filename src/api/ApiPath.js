// url统一管理
const SERVER_HOST = 'http://axure-admin.cn'
module.exports = {
  center: {
    loginInfo: SERVER_HOST + '/center/loginInfo',
    statistic: SERVER_HOST + '/center/statistic'
  },
  module: {
    getModuleInfo: SERVER_HOST + '/module/getModuleInfo'
  },
  notice: {
    getPartNotice: SERVER_HOST + '/notice/getPartNotice'
  },
  // 系统公告数据
  system: {
    getSystemTableData: SERVER_HOST + '/system/getSystemTableData'
  },
  // 模块管理数据
  moduleSupport: {
    getModuleTableData: SERVER_HOST + '/moduleSupport/getModuleTableData'
  },
  // 组织架构数据
  organization: {
    getOrganizationTable: SERVER_HOST + '/organization/getOrganizationTable'
  },
<<<<<<< HEAD
=======
  // 业务处理数据
  business: {
    getBusinessList: SERVER_HOST + '/business/getBusinessList'
  },
>>>>>>> 2a0a00f23768caf46c08ed9a47451804b7e0b37f
  enterprise: {
    setEnterprise: SERVER_HOST + '/enterprise/setEnterprise'
  }
}
