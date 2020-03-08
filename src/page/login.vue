<template>
  <div class="login-container">
   <el-card  class="login-card">
     <div class="login-hd">
      <i class="el-icon-s-tools my-icon-tools"></i>
      <h2 class="title">登录系统管理中心</h2>
       <p class="tip">为保护企业的数据安全，请再次确认身份信息</p>
     </div>
     <el-form  @submit.native.prevent="login">
       <el-form-item>
         <el-input
          placeholder="请输入用户名称"
          prefix-icon="el-icon-user"
          v-model="model.username">
        </el-input>
       </el-form-item>
        <el-form-item>
         <el-input
          placeholder="请输入登录密码"
          prefix-icon="el-icon-lock"
          v-model="model.password">
        </el-input>
       </el-form-item>
       <el-form-item class="login-btn">
         <el-button type="primary" native-type="submit" >登录</el-button>
       </el-form-item>
     </el-form>
   </el-card>
 </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      const res = await this.$http.post('login', this.model)
      // sessionStorage.token = res.data.token 浏览器关闭就清空
      localStorage.token = res.data.token
      this.$router.push('/')
      this.$message({
        type: 'success',
        message: '登录成功'
      })
    }
  }
}

</script>
<style lang="scss">
@import "assets/scss/base.scss";

.login-card {
  width: 25rem;
  margin:5rem auto;
  padding: 2rem;
  .login-hd {
    text-align: center;
    .my-icon-tools {
      font-size: 50px;
      background:var(--color-background);
      color:#fff;
      border-radius: 10px;
      padding: 20px;
    }
    .title {
      color:var(--color-text);
      margin-top: 15px;
    }
    .tip {
      color:#999;
      text-align: left;
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }
  .el-form-item__content,.el-button  {
    width: 100%;
  }
  .el-button {
    background:var(--color-background);
    color:#fff;
  }
  .el-button:hover {
    background: var(--color-active);
  }
}
</style>
