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
  system: {
    getSystemTableData: SERVER_HOST + '/system/getSystemTableData'
  },
  moduleSupport: {
    getModuleTableData: SERVER_HOST + '/moduleSupport/getModuleTableData'
  }
}
