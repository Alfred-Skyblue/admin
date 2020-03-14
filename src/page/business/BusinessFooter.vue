<template>
  <div class="success-button">
    <el-button type="primary" class="button">
      <i class="el-icon-success success-icon"></i>
      保存
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'BusinessFooter'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin.scss';
.success-button{
  margin-top: 50px;
  text-align: center;
  .success-icon{
    font-size: 14px;
    color: #fff;
    font-weight: 400;
    margin-right: 4px;
  }
  .button {
    width: 140px;
    background-color: $colorA;
  }
}
</style>
