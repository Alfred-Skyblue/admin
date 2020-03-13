<template>
  <div class="business-approval">
    <header>
        <a href="javascript:;"
        v-for="item of headerTitle" :key="item.id"
        @click="handleApprovalClick(item.path)"
        >{{item.title}}</a>
    </header>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'BusinessApproval',
  data () {
    return {
      headerTitle: [
        {
          id: '01',
          title: '订单审批',
          path: 'order'
        },
        {
          id: '02',
          title: '回款审批',
          path: 'received'
        },
        {
          id: '03',
          title: '报销审批',
          path: 'wipe'
        },
        {
          id: '04',
          title: '退款审批',
          path: 'drawback'
        },
        {
          id: '05',
          title: '办工审批',
          path: 'work'
        }
      ]
    }
  },
  props: {
    businessList: Array
  },
  methods: {
    handleApprovalClick (path) {
      console.log(path)
      // this.$store.commit('setTopTitle', item)
      if (path !== this.$route.path) { // 防止重复点击当前页面的报错
        this.$router.push(path)
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/mixin.scss';
.business-approval{
  width: 1260px;
  background-color: #FCFCFC;
  margin-left: auto;
  margin-right: auto;
  header{
    box-sizing: border-box;
    margin-top: 20px;
    width: 1260px;
    height: 80px;
    background-color: #fff;
    border: 1px solid #E9E9E9;
    border-bottom: none;
    padding-left: 20px;
    a{
      @include font-wide(14px);
      text-align: left;
      line-height: 80px;
      margin-left: 50px;
      &:hover{
        color: $colorA;
      }
    }
  }
}

</style>
