<template>
  <div>
    <Content :styleContent="{padding:'20px'}">

    <module-button slot="head"></module-button>
    <module-table slot="body"></module-table>
    </Content>
  </div>
</template>

<script>
import ModuleButton from './childCpns/ModuleButton'
// import ModuleContent from './childCpns/ModuleContent'
import ModuleTable from './childCpns/ModuleTable'
export default {
  name: 'module',
  components: {
    ModuleButton,
    // ModuleContent,
    ModuleTable
  }
}
</script>

<style lang="scss" scoped>

</style>
