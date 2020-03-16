<template>
  <div class="my-admin-content" :style="styleContent">
    <div class="head">
      <slot name = "head" >标题</slot>
    </div>
    <div class="body">
      <slot name = "body">
            内容
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    styleContent: {
      type: Object,
      default () {
        return { }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-admin-content {
  background-color: #fff;
  margin: 30px 100px;
  min-width: 800px;
  min-height: 760px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  .head {
  border-bottom: 1px solid #ddd;
  padding: 20px;
  }
  .body {
    padding: 20px;
  }
}

</style>
