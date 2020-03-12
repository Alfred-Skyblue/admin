<template>
 <div class="module">
   <div class="module-item" v-for="(item,index) in modules" :key="index" @click="toPage(item.path)">
     <div>
        <i :class="item.icon" class="icon"></i>
        <p class="title">{{item.title}}</p>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'module',
  props: {
    modules: {
      type: Array,
      value: []
    }
  },
  methods: {
    toPage (path) {
      this.$router.push(path)
    }
  }

}
</script>
<style lang="scss" scoped>
@import "assets/scss/base.scss";
.module {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  .module-item {
    flex:1;
    padding: 15px 40px;
    margin: 10px 15px;
    border:1px solid #eee;
    color:#999;
    text-align:center;
    background: #fcfcfc;
    .icon {
      font-size:40px;
    }
    .title {
      font-size:16px;
      min-width: 80px;
    }
  }
  .module-item :hover {
     color:#333;
   }
}
</style>
