<template>
  <div>
    <div class="system-main">
    <system-main></system-main>
    </div>

  </div>
</template>

<script>
import SystemMain from './childCpns/SystemMain'
export default {
  name: 'system',
  components: {
    SystemMain
  }
}
</script>

<style lang="scss" scoped>
.system-main{
  margin: 30px 100px;
}
</style>
