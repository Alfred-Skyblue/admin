<template>
 <div class="notice">
   <div class="notice-hd clearfix">
     <div class="notice-hd-l fl">
        <i class="el-icon-microphone"></i>
        <strong>系统公告</strong>
     </div>
     <div class="notice-hd-r fr">
       <div class="publish fl">
          <i class="el-icon-plus"></i>
          <span>发布公告</span>
       </div>
        <div class="more fl">
          <span>查看更多</span>
            <i class="el-icon-arrow-right"></i>
        </div>
     </div>
   </div>
   <div class="notice-bd">
      <div v-for="(item,index) in notices" :key="index">
        <div class="list-row clearfix">
          <div class="list-row-left fl">
              【{{item.category}}】{{item.title}}
          </div>
          <div class="list-row-right fr">
            <div class="author fl">
             <i class="el-icon-user-solid"></i> {{item.author}}
            </div>
            <div class="createtime fl"><i class="el-icon-time"></i>{{item.createtime}}</div>
          </div>
        </div>
      </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'notice',
  props: {
    notices: {
      type: Array,
      value: []
    }
  }

}

</script>
<style lang="scss" scoped>
@import "assets/scss/base.scss";
.notice {
  margin-top: 20px;
  .notice-hd{
    .notice-hd-l {
      color:#666;
      i{
        font-size:20px;
      }
      strong {
        font-size:16px;
      }
    }
    .notice-hd-r {
      color:var(--color-high-text);
      i{
        font-size:16px;
      }
      span {
        font-size:14px;
        line-height: 14px;
      }
      .publish {
        margin-right: 15px;
        i {
          font-weight: 700;
        }
      }
    }
  }
  .notice-bd{
    border-top: 1px solid #ccc;
    margin-top: 20px;
    .list-row {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
      font-size: 14px;
      .list-row-left:hover {
        color:#999;
      }
      .list-row-right {
        color:#999;
        i{
          margin-right: 5px;
        }
        .author{
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
