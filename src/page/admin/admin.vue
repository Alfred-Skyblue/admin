<template>
  <div class="dashboard">
    <div class="content ">
      <div class="clearfix">
        <login-info :username='username' :lasttime="lasttime"></login-info>
          <num :nums="nums"></num>
      </div>
      <module :modules="modules"></module>
      <notice :notices="notices"></notice>
    </div>
  </div>
</template>

<script>
import loginInfo from './childCpns/loginInfo'
import num from './childCpns/num'
import module from './childCpns/module'
import notice from './childCpns/notice'
import ApiPath from '@/api/ApiPath'

export default {
  name: 'admin',
  components: {
    loginInfo,
    num,
    module,
    notice
  },
  data () {
    return {
      username: '张三',
      lasttime: '2020年2月2日 星期四 20:40:10',
      nums: [],
      modules: [],
      notices: []
    }
  },
  created () {
    this.getPartNotice()
    this.getStatistic()
    this.getModuleInfo()
    this.getLoginInfo()
  },
  methods: {
    async getPartNotice () {
      const res = await this.$http.get(ApiPath.notice.getPartNotice)
      this.notices = res.data
    },
    async getStatistic () {
      const res = await this.$http.get(ApiPath.center.statistic)
      this.nums = res
    },
    async getModuleInfo () {
      const res = await this.$http.get(ApiPath.center.getModuleInfo)
      this.modules = res
    },
    async getLoginInfo () {
      const res = await this.$http.get(ApiPath.center.loginInfo + '?username=张伟')
      console.log(res)
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
