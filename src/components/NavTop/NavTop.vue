<template>
  <div class="my-header-top">
    <header>
      <i :class="topTitle.icon"></i><span>{{ topTitle.title }}</span>
    </header>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="my-breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in crumbs" :key="item.id" :to="item.path">{{item.title}}</el-breadcrumb-item>

    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'NavTop',
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

  computed: {
    topTitle () {
      return this.$store.state.topTitle
    },
    crumbs () {
      return this.$store.state.crumbs
    }
  }
}
</script>

<style lang="scss" scoped>
.my-header-top{
header {
  height: 60px;
  box-shadow: 0px 3px 5px rgba(153, 153, 153, 0.2);
  line-height: 60px;
  padding-left: 20px;
  color: #999;
  span {
    margin-left: 5px;
  }
}
.my-breadcrumb{
  margin: 16px 0 0 16px;
}
}

</style>
