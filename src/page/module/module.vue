<template>
  <div>
    <Content>
    <module-button></module-button>

    </Content>
  </div>
</template>

<script>
import ModuleButton from './childCpns/ModuleButton'
import Content from 'Components/Content/Content'
export default {
  name: 'module',
  components: {
    ModuleButton,
    Content
  }
}
</script>

<style lang="scss" scoped>

</style>
