<template>
  <div class="drawback">
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
  name: 'drawback',
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
.drwaback{
  main{
    @include on-off;
  }
}

</style>
