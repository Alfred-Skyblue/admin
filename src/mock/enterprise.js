import ApiPath from '@/api/ApiPath'
const Mock = require('mockjs')
let enterprise = {}
Mock.mock(ApiPath.enterprise.setEnterprise, 'post', function (option) {
  const param = JSON.parse(option.body)
  enterprise = {
    id: Mock.Random.guid(),
    name: param.name,
    shortName: param.shortName,
    call: param.call,
    type: param.type,
    industry: param.industry,
    area: param.area,
    address: param.address,
    postcode: param.postcode,
    fax: param.fax,
    website: param.website,
    createdate: param.createdate,
    contactname: param.contactname,
    gender: param.gender,
    job: param.job,
    phone: param.phone,
    email: param.email,
    logo: param.logo
  }
  return Mock.mock({
    data: {
      data: enterprise
    },
    status: 0,
    msg: '添加成功'
  })
})
