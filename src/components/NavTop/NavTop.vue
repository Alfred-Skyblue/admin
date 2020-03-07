<template>
  <div>
   <header>
      <i :class="topTitle.icon"></i><span>{{ topTitle.title }}</span>
    </header>
  </div>
</template>

<script>
export default {
  name: 'NavTop',
  data () {
    return {

    }
  },

  computed: {
    topTitle () {
      return this.$store.state.topTitle
    }
  }
}
</script>

<style lang="scss" scoped>
 header {
    height: 60px;
    box-shadow: 0px 3px 5px rgba(153, 153, 153, 0.2);
    line-height: 60px;
    padding-left: 20px;
    color: #999;
    span {
      margin-left: 5px;
    }
  }
</style>
