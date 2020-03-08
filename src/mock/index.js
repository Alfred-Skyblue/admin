// 使用 Mock
import Mock from 'mockjs'

/**
 *
 * 请求状态码
 * 0  : 请求成功
 * 10 : 未登录
 */

/*
接口数据按照这样写
Mock.mock('http://axure-admin.cn/test', 'get', function (option) {
  console.log(option)
  return Mock.mock({
    data: {
      arr: [1, 2, 3]
    },
    status: 0,
    msg: '请求成功'
  })
})
*/

Mock.mock()
