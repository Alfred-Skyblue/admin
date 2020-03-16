import ApiPath from '@/api/ApiPath'
const Mock = require('mockjs')
let listAdd = function(options){
  //  console.log("传过来的数据"+JSON.parse(options.body).params.obj);
      let rtype = options.type.toLowerCase(); //获取请求的类型
      switch (rtype) {
          case 'get':
              break;
          case 'post':
              let obj = JSON.parse(options.body).params.obj;
              // console.log("数据获取"+ obj);
              arr = arr.concat(obj);  // 将前台返回来的数据，拼接到数组中。
              break;
          default:
              break;
      }
      return {
          data: arr
      }
  }
  Mock.mock(Api.enterprise.addEnterprise,/get|post/i,listAdd);
