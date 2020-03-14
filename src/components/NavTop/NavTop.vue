<template>
  <div class="my-header-top">
    <header>
      <i :class="topTitle.icon"></i><span>{{ topTitle.title }}</span>
      <a href="javascript:;"
      v-for="item of $store.state.BusinessList"
      :key="item.id"
      @click="handleNavClick(item.path)"
      >{{item.childTitle}}</a>
    </header>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="my-breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }" @click.native="handleCrumbs()">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in crumbs" :key="item.id" :to="item.path" @click.native="handleCrumbs(index)">{{item.title}}</el-breadcrumb-item>

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
  },
  methods: {
    handleCrumbs (index) {
      this.$store.commit('setNavTopCrumbs', index)
    },
    handleNavClick (path) {
      if (path !== this.$route.path) { // 防止重复点击当前页面的报错
        this.$router.push(path)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin.scss';
.my-header-top{
header {
  height: 60px;
  box-shadow: 0px 3px 5px rgba(153, 153, 153, 0.2);
  line-height: 60px;
  padding-left: 20px;
  color: #999;
  span {
    margin: 0 60px 0 5px;
    @include font-thin(16px,#999)
  }
  i{
    @include font-wide(16px,#999)
  }
  a{
    display: inline-block;
    @include font-thin;
    width: 100px;
    height: 58px;
    text-align: center;
    &:hover{
      border-bottom: 2px solid $colorA;
      color: $colorA;
    }
  }
}
.my-breadcrumb{
  margin: 16px 0 0 16px;
}
}

</style>
