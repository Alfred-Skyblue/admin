<template>
  <div>
<<<<<<< HEAD
    <Content :styleContent="{padding:'20px'}">

    <module-button slot="head"></module-button>
    <module-table slot="body"></module-table>
    </Content>
=======
    <module-content :styleContent="{padding:'20px'}">
    <module-button></module-button>
    <module-table></module-table>
    </module-content>
>>>>>>> 9b638adbab5c0f891273b1dbcc42699a1f42450b
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
