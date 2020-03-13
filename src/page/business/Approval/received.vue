<template>
  <div class="received">
    <main>
      <div class="on-off">
        <span class="body-titiel">审批开关:</span>
        <el-switch
          v-model="value"
          active-color="#0079fe"
          inactive-color="#ff4949">
        </el-switch>
        <p>1、关闭审批后，系统将自动通过所有未审批完成的订单；</p>
        <p>2、关闭审批后，使用审批通过时间的业绩指标将无法正常统计；</p>
      </div>
    </main>
    <business-footer></business-footer>
  </div>
</template>

<script>
import BusinessFooter from '../BusinessFooter'
export default {
  name: 'received',
  data () {
    return {
      value: true
    }
  },
  components: {
    BusinessFooter
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/mixin.scss';
.received{
  width: 1260px;
  background-color: #FCFCFC;
  margin-left: auto;
  margin-right: auto;
  main{
    @include on-off;
    box-sizing: border-box;
    width: 1260px;
    background-color: #fff;
    padding: 30px;
    border: 1px solid #E9E9E9;
    padding-left: 120px;
    .body-titiel{
    position: absolute;
    left: -80px;
    @include font-thin
    }
    .body-titiel-put{
      top: 14px;
    }
  }
}

</style>
