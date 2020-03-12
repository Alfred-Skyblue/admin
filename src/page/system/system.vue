<template>
  <div>
      <content-slot>
    <system-main></system-main>

      </content-slot>

  </div>
</template>

<script>
import SystemMain from './childCpns/SystemMain'
import ContentSlot from '../../components/Content/Content'
export default {
  name: 'system',
  components: {
    SystemMain,
    ContentSlot
  }
}
</script>

<style lang="scss" scoped>

</style>
