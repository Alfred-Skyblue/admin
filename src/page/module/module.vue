<template>
  <div>
    <module-content :styleContent="{padding:'20px'}">
    <module-button></module-button>
    <module-table></module-table>
    </module-content>
  </div>
</template>

<script>
import ModuleButton from './childCpns/ModuleButton'
import ModuleContent from './childCpns/ModuleContent'
import ModuleTable from './childCpns/ModuleTable'
export default {
  name: 'module',
  components: {
    ModuleButton,
    ModuleContent,
    ModuleTable
  }
}
</script>

<style lang="scss" scoped>

</style>
