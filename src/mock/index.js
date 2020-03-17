// 引入 mockjs
import Mock from 'mockjs'
<<<<<<< HEAD
require('@/mock/noticemock')
require('@/mock/centermock')
require('@/mock/system')
require('@/mock/moduleSupport')
require('@/mock/enterprise')
=======
require('./noticemock')
require('./centermock')
require('./system')
require('./moduleSupport')
require('./organization')
require('./business')
require('./enterprise')
>>>>>>> 2a0a00f23768caf46c08ed9a47451804b7e0b37f

// 设置所有ajax请求的超时时间，模拟网络传输耗时
Mock.setup({
  timeout: 0 - 300
})
/**
 *
 * 请求状态码
 * 0  : 请求成功
 * 10 : 未登录
 */
// 接口数据按照这样写
// Mock.mock('http://axure-admin.cn/test', 'get', function (option) {
//   console.log(option)
//   return Mock.mock({
//     data: {
//       arr: [1, 2, 3]
//     },
//     status: 0,
//     msg: '请求成功'
//   })
// })
