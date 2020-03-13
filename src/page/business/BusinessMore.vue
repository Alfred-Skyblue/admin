<template>
  <div class="business-more">
    <header>
        <a href="javascript:;" v-for="item of List" :key="item.id" @click="handleMoreClick(item.path)">{{item.name}}</a>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'BusinessMore',
  data () {
    return {
      input: '',
      startTime: '',
      endTime: '',
      sumn: null,
      List: [
        {
          id: 0,
          name: '考勤设置',
          path: 'CheckWork'
        },
        {
          id: 1,
          name: '工作日设置',
          path: 'other'
        },
        {
          id: 2,
          name: '安全设置',
          path: 'report'
        },
        {
          id: 3,
          name: '报告设置',
          path: 'safe'
        },
        {
          id: 4,
          name: '其它设置',
          path: 'WorkDay'
        }
      ]
    }
  },
  props: {
    businessList: Array
  },
  components: {

  },
  methods: {
    handleMoreClick (path) {
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
.business-more{
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
    a{
      @include font-wide(14px);
      text-align: left;
      line-height: 80px;
      margin-left: 30px;
      &:hover{
        color: $colorA;
      }
    }
  }
}

</style>
