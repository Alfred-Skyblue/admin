// 引入 mockjs
import Mock from 'mockjs'
require('@/mock/noticemock')
require('@/mock/centermock')
require('@/mock/system')
require('@/mock/moduleSupport')
require('@/mock/enterprise')

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
