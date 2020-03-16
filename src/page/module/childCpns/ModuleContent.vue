<template>
  <div class="my-admin-content" :style="styleContent">
    <slot >
      插槽默认内容
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    styleContent: {
      type: Object,
      default () {
        return {}
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
}
</style>
