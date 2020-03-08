<template>
  <div>
    admin
  </div>
</template>

<script>
export default {
  name: 'admin',
  mounted () {
    this.axios.get('/test').then((res) => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
