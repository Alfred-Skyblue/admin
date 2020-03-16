<template>
 <div class="title">
   <slot>标题</slot>
 </div>
</template>

<script>
export default {
  name: 'Title',
  data () {
    return {
    }
  }

}

</script>
<style lang="scss" scoped>
.title {
  height: 25px;
  line-height: 25px;
  padding-left: 10px;
  border-left:5px solid var(--color-text);
  font-size: 16px;
  font-weight: 700;
  color:#666;
}
</style>
