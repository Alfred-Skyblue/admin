<template>
  <div class="card">
    <div class="head">
        <slot name="head">标题</slot>
      </div>
      <div class="body">
        <slot name="body">内容</slot>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.head {
  height: 20px;
  border-left: 5px solid var(--color-text);
  padding-left: 10px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color:#666;
}
</style>
