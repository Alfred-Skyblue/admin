<template>
  <div class="my-admin-content" :style="styleContent">
    <div class="hd">
      <slot name="hd">
      标题
      </slot>
    </div>
    <div class="bd">
      <slot name="bd">
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
  .hd {
    border-bottom: 1px solid #ddd;
    padding: 20px;
  }
  .bd {
    padding: 20px;
  }
}

</style>
