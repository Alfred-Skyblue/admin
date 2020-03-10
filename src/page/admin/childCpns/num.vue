<template>
<div class="nums fr">
 <div class="num-item fl" v-for="(item,index) in nums" :key="index">
   <p class="title">{{item.title}}</p>
   <p class="num">{{item.num}}</p>
 </div>
</div>
</template>
<script>
export default {
  name: 'num',
  props: {
    nums: {
      type: Array,
      value: []
    }
  }
}

</script>
<style lang="scss" scoped>
@import "assets/scss/base.scss";
.nums {
  text-align:center;
  color:#666;
  .num-item{
    padding: 0 20px;
    .title {
      font-size:14px;
    }
    .num {
      font-size:30px;
      margin-top: 15px;
    }
  }
}
</style>
