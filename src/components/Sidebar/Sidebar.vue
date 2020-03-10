<template>
  <div class="sidebar">
    <div class="sidebar-left" ref="sidebarLeft">
      <i class="el-icon-s-tools my-icon-tools"></i>
      <h2>系统管理中心</h2>
      <!-- NavMenu 导航菜单 -->
      <el-row class="tac">
        <el-col :span="24">
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
              @click.native.stop="handleNavClick(item, item.path)"
            >
              <template slot="title">
                <div class="my-el-item">
                  <i :class="item.icon"></i>
                  <span>{{ item.title }}</span>
                </div>
              </template>
              <el-menu-item
                :index="index + '-' + j"
                v-for="(children, j) in item.children"
                :key="children.id"
                >{{ children.childTitle }}</el-menu-item
              >
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    navInfo: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    handleNavClick (item, path) {
      console.log(path)
      this.$store.commit('setTopTitle', item)
      if (path !== this.$route.path) { // 防止重复点击当前页面的报错
        this.$router.push(path)
      }
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
    color: #666;
    text-align: center;
    width: 100%;
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
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      .el-menu-item,
      .el-submenu__title {
        height: 46px;
        line-height: 46px;
        padding-right: 40px;
      }
      .el-menu-item.is-active {
        background-color: #858b99 !important;
        color: #fff !important;
      }
    }
    .my-el-item {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
