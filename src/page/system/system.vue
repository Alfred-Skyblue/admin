<template>
  <div>
      <system-content>
    <system-main></system-main>

      </system-content>

  </div>
</template>

<script>
import SystemMain from './childCpns/SystemMain'
import SystemContent from './childCpns/SystemContent'
export default {
  name: 'system',
  components: {
    SystemMain,
    SystemContent
  }
}
</script>

<style lang="scss" scoped>

</style>
