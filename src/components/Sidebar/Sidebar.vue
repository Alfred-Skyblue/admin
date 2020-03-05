<template>
  <div class="sidebar">
    <div class="sidebar-left" ref="sidebarLeft">
      <i class="el-icon-s-tools my-icon-tools"></i>
      <h2>系统管理中心</h2>
      <!-- NavMenu 导航菜单 -->
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="1-1"
            background-color="rgba(236, 239, 244, 1)"
            text-color="#666"
            active-text-color="blue"
            mode="vertical"
            unique-opened
            :collapse="false"
            :collapse-transition="false"
            class="el-menu-vertical-demo"
          >
            <el-submenu
              class="my-submenu"
              v-for="(item, index) in navInfo"
              :key="item.id"
              :index="item.id.toString()"
            >
              <template slot="title">
                <i :class="item.icon"></i>

                <span>{{ item.title }}</span>
              </template>
              <el-menu-item
                :index="index + '-' + j"
                v-for="(children, j) in item.children"
                :key="children.id"
                @click="topTitle = item"
                >{{ children.childTitle }}</el-menu-item
              >
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
      <div class="logOut">
        <a href="javascript:;"><i class="el-icon-circle-close"></i>安全退出</a>
      </div>
    </div>
    <header>
      <i :class="topTitle.icon"></i><span>{{ topTitle.title }}</span>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      topTitle: {
        title: '管理中心',
        icon: 'el-icon-setting'
      },
      navInfo: [
        {
          id: 1,
          title: '管理中心',
          icon: 'el-icon-setting',
          children: [{ childTitle: '中心首页', id: 1 }]
        },
        {
          id: 2,
          title: '企业设置',
          icon: 'el-icon-office-building',
          children: [{ childTitle: '企业注册', id: 1 }]
        },
        {
          id: 3,
          title: '组织架构',
          icon: 'el-icon-s-management'
        },
        {
          id: 4,
          title: '职务权限',
          icon: 'el-icon-s-check'
        },
        {
          id: 5,
          title: '员工管理',
          icon: 'el-icon-s-custom'
        },
        {
          id: 6,
          title: '模块管理',
          icon: 'el-icon-s-grid'
        },
        {
          id: 7,
          title: '产品管理',
          icon: 'el-icon-box'
        },
        {
          id: 8,
          title: '业务管理',
          icon: 'el-icon-edit-outline'
        },
        {
          id: 9,
          title: '字段设置',
          icon: 'el-icon-document'
        },
        {
          id: 10,
          title: '字典管理',
          icon: 'el-icon-collection'
        },
        {
          id: 11,
          title: '日志管理',
          icon: 'el-icon-notebook-1'
        }
      ]
    }
  },
  methods: {
    handleNavClick (item) {
      this.topTitle = item
    }
  },
  mounted () {}
}
</script>

<style lang="scss">
@import "../../assets/scss/base.scss";
#app {
  height: 100%;
  & > div {
    height: 100%;
  }
}
.sidebar {
  height: 100%;
  .sidebar-left {
    height: 100%;
    position: relative;
    padding-top: 30px;
    background-color: rgba(236, 239, 244, 1);
    color: #666;
    text-align: center;
    width: 200px;
    .my-icon-tools {
      font-size: 40px;
      padding: 8px;
      background-color: #0079fe;
      color: #fff;
      border-radius: 12px;
    }
    h2 {
      text-align: center;
      margin: 20px 0;
      font-weight: 800;
      font-size: 18px;
    }
    .el-menu-vertical-demo {
      width: 200px;
      text-align: left;
      box-sizing: border-box;
      overflow: hidden;
      .el-menu-item,
      .el-submenu__title {
        height: 46px;
        line-height: 46px;
        padding-left: 20px;
      }
    }
    .logOut {
      position: fixed;
      bottom: 20px;
      line-height: 30px;
      font-size: 16px;
      text-align: center;
      width: 200px;
      a {
        color: #666;
      }
      i{
        margin-right: 5px;
      }
    }
  }
  header {
    position: absolute;
    top: 0;
    left: 200px;
    height: 60px;
    width: 100%;
    box-shadow: 0px 3px 5px rgba(153, 153, 153, 0.2);
    line-height: 60px;
    padding-left: 20px;
    color: #999;
    span {
      margin-left: 5px;
    }
  }
}
</style>
