import Mock from 'mockjs'

const url = {
    loginInfo: 'http://admin/loginInfo',
}
module.exports = [
    Mock.mock(url.loginInfo, {
      'code':200,
        'data':[{
            'key|+1': 1,
            'username|1':['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
            'mockContent|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
            'mockAction|1': ['下载', '试听', '喜欢']
        }]
    })
]
