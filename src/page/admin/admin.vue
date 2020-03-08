<template>
  <div class="dashboard">
    <div class="content ">
      <div class="clearfix">
         <login-info :username='username' :lasttime="lasttime"></login-info>
          <num :nums="nums"></num>
      </div>
      <module :modules="modules"></module>
    </div>
  </div>
</template>

<script>
import loginInfo from './childCpns/loginInfo'
import num from './childCpns/num'
import module from './childCpns/module'
export default {
  name: 'admin',
  components: {
    loginInfo,
    num,
    module
  },
  data () {
    return {
      username: '张三',
      lasttime: '2020年2月2日 星期四 20:40:10',
      nums: [
        {
          title: '员工数量',
          num: 100
        },
        {
          title: '产品数量',
          num: 100
        },
        {
          title: '在线用户数量',
          num: 100
        }
      ],
      modules: [
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/base.scss";
.dashboard {
  padding: 30px 100px;
  background:var(--color-background-main);
  margin-top:5px;
  height: 100vh;
  .content {
    border:1px solid #ccc;
    background: #fff;
    padding:50px;
  }
}
</style>
