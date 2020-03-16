<template>
  <div>
    <el-row type="flex" class="my-el-row">
      <el-col :span="4" class="sidebar-left"
        ><div class=" grid-content bg-purple">
          <sidebar :navInfo="navInfo"></sidebar></div
      ></el-col>
      <el-col :span="20"
        ><div class="grid-content bg-purple-light">
          <nav-top :navInfo="navInfo"></nav-top>
        <router-view></router-view></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar/Sidebar'
import NavTop from '../components/NavTop/NavTop'
export default {
  data () {
    return {
      navInfo: [
        {
          id: 1,
          title: '管理中心',
          icon: 'el-icon-setting',
          path: '/admin'
        },
        {
          id: 2,
          title: '系统公告',
          icon: 'el-icon-office-building',
          path: '/system',
          children: [{ childTitle: '系统公告', id: '01' }]
        },
        {
          id: 3,
          title: '企业设置',
          icon: 'el-icon-office-building',
          path: '/enterprise',
          children: []
        },
        {
          id: 4,
          title: '组织架构',
          icon: 'el-icon-s-management',
          path: '/organization'
        },
        {
          id: 5,
          title: '职务权限',
          icon: 'el-icon-s-check',
          path: '/duty'
        },
        {
          id: 6,
          title: '员工管理',
          icon: 'el-icon-s-custom',
          path: '/staff'
        },
        {
          id: 7,
          title: '模块管理',
          icon: 'el-icon-s-grid',
          path: '/module'
        },
        {
          id: 8,
          title: '产品管理',
          icon: 'el-icon-box',
          path: '/admin'
        },
        {
          id: 9,
          title: '业务管理',
          icon: 'el-icon-edit-outline',
          path: '/business',
          children: [
            {
              childTitle: '业务参数',
              id: '01',
              path: '/business'
            },
            {
              childTitle: '提醒设置',
              id: '02',
              path: '/BusinessWarn'
            },
            {
              childTitle: '短信设置',
              id: '03',
              path: '/BusinessNote'
            },
            {
              childTitle: '审批设置',
              id: '04',
              path: '/BusinessApproval'
            },
            {
              childTitle: '查重设置',
              id: '05',
              path: '/BusinessCnki'
            },
            {
              childTitle: '更多设置',
              id: '06',
              path: '/BusinessMore'
            }
          ]
        },
        {
          id: 10,
          title: '字段设置',
          icon: 'el-icon-document',
          path: '/field'
        },
        {
          id: 11,
          title: '字典管理',
          icon: 'el-icon-collection',
          path: '/dictionaries'

        },
        {
          id: 12,
          title: '日志管理',
          icon: 'el-icon-notebook-1',
          path: '/log'
        }
      ]
    }
  },
  methods: {},
  components: {
    Sidebar,
    NavTop
  }
}
</script>

<style lang="scss" scoped>
.my-el-row{
  height: 100vh;
  .sidebar-left {
  background-color: rgba(236, 239, 244, 1);
}
}

</style>
