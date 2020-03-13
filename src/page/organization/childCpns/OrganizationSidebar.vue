<template>
  <div>
    <el-row class="my-organ-sidebar-content">
   <el-col :span="4" class="my-organ-sidebar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-operation"></i>
          <span>公司名称</span>
        </template>
          <el-menu-item index="1-1">总裁办</el-menu-item>
          <el-menu-item index="1-2">行政部</el-menu-item>
          <el-menu-item index="1-3">人事部</el-menu-item>
          <el-menu-item index="1-4">技术部</el-menu-item>
          <el-menu-item index="1-5">客服部</el-menu-item>
          <el-menu-item index="1-6">售后部</el-menu-item>
          <el-menu-item index="1-7">财务部</el-menu-item>
          <el-menu-item index="1-8">市场部</el-menu-item>
      </el-submenu>

    </el-menu>
  </el-col>

</el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-organ-sidebar{
  overflow: hidden;
  height: 100vh;
  .el-menu-vertical-demo{
    height: 100%;
  }
}
</style>
