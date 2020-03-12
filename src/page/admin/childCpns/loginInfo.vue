<template>
 <div class="loginInfo ">
      <div class="avatar fl"><i class="el-icon-user-solid"></i></div>
      <div class="welcome fl">
        <p>{{username}}，欢迎进入设置中心!</p>
        <br><p>上次登录:{{lasttime}}</p>
      </div>
</div>
</template>

<script>
export default {
  name: 'loginInfo',
  props: {
    username: {
      type: String,
      value: ''
    },
    lasttime: {
      type: String,
      value: ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import "assets/scss/base.scss";
.loginInfo {
  color:#acacac;
  font-size:14px;
  .avatar{
    float: left;
      i {
        font-size:50px;
        color:#fff;
        background:#ccc;
        width:70px;
        height:70px;
        text-align:center;
        line-height: 70px;
        border-radius: 50%;
      }
    }
    .welcome {
      padding-top: 10px;
      padding-left: 20px;
    }
  }
</style>
