<template>
  <div>
<<<<<<< HEAD
    <module-content :styleContent="{padding:'20px'}">
    <module-button></module-button>
    <module-table></module-table>
    </module-content>
=======
    <Content :styleContent="{padding:'20px'}">

    <module-button slot="head"></module-button>
    <module-table slot="body"></module-table>
    </Content>
>>>>>>> 2a0a00f23768caf46c08ed9a47451804b7e0b37f
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
