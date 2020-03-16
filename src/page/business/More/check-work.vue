<template>
  <div class="check-work">
    <main>
      <div class="main-header">
        <p class="header">
          上班出勤时间
        </p>
        <div class="content">
          <template>
            <div class="start">
              <span><i class="star">*</i> 上班时间：</span>
              <el-time-select
                placeholder="起始时间"
                v-model="startTime"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30'
                }">
              </el-time-select>
            </div>
            <div class="stop">
              <span><i class="star">*</i> 下班时间：</span>
              <el-time-select
              placeholder="结束时间"
              v-model="endTime"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
                minTime: startTime
              }">
              </el-time-select>
            </div>
          </template>
        </div>
      </div>
      <div class="main-content">
        <p class="header">
            考勤路由
        </p>
        <ul class="content">
          <li>
            <span class="left">Wifi名称</span>
            <span class="center">Mac地址</span>
            <span class="right">操作</span>
          </li>
          <li v-for="item of List" :key="item">
            <span class="left">AxureUX</span>
            <span class="center">E8-4E-06-51-3B-16</span>
            <span class="right">
            <a href="javascript:;"><i class="el-icon-edit"></i>编辑</a>
            <a href="javascript:;"><i class="el-icon-delete-solid"></i>删除</a></span>
          </li>
        </ul>
        <div class="add-more" @click="addList">
          <i class="el-icon-plus"></i>
          添加审批层级
        </div>
        <div class="main-footer">
          <p class="header">
            考勤位置
          </p>
          <div class="content">
            <div class="start">
              <span><i class="star">* </i>出勤地点：
              <a href="javascript:;">深圳市南山区科苑路15号</a>
              <a href="javascript:;"><i class="el-icon-location"></i>选择</a>
              <a href="javascript:;"><i class="el-icon-delete-solid"></i>删除</a>
              </span>
            </div>
            <div class="stop">
              <span><i class="star">*</i> 下班时间：</span>
              <el-input v-model="input" class="stop-input" placeholder="请输入数值">
                <div slot="append">米</div>
              </el-input>
            </div>
            <div class="footer">超出此范围将无法完成打卡</div>
          </div>
        </div>
      </div>
    </main>
    <business-footer></business-footer>
  </div>
</template>

<script>
import BusinessFooter from '../BusinessFooter'
export default {
  name: 'CheckWork',
  data () {
    return {
      input: '',
      startTime: '',
      endTime: '',
      sumn: null,
      List: [
        1,
        2,
        3,
        4
      ]
    }
  },
  props: {
    businessList: Array
  },
  components: {
    BusinessFooter
  },
  methods: {
    addList () {

    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/mixin.scss';
.check-work{
  main{
    @include business-more-main;
    .main-header{
      .header{
        @include border-left
      }
      .content {
        padding-left: 50px;
        .stop{
          margin: 30px 0;
        }
      }
    }
    .main-content{
      .header{
        @include border-left
      }
      .content{
        border: 1px solid #E4E4E4;
        li:first-child{
          background-color: #F5F5F5;
          @include font-wide(14px);
        }
        li:last-child{
          border-bottom: none;
        }
        li{
          height: 40px;
          line-height: 40px;
          padding-left: 20px;
          @include font-thin;
          border-bottom: 1px solid #E4E4E4;
        }
        .left,
        .right,
        .center{
          display: inline-block;
          width: 29.9%;
          padding-left: 20px;
        }
        .left,
        .center{
          border-right: 1px solid #E4E4E4;
        }
        .left{
          padding-left: 0;
        }
        .right{
          a{
            margin-right: 10px;
            @include font-thin(12px,$colorA);
          }
        }
      }
      .add-more{
        @include font-thin(14px,#999);
        width: 120px;
        height: 35px;
        line-height: 35px;
        border: 1px solid #E4E4E4;
        margin-top: 30px;
        text-align: center;
        border-radius: 3px;
        &:hover{
          color: $colorA;
          border: 1px solid $colorA;
          i{
            color: $colorA;
          }
        }
        i{
          @include font-thin($size:14px,$color:#999,$weight: 700);
        }
      }
      .main-footer{
        .header{
          @include border-left
        }
      }
    }
    .main-footer{
      .content{
        padding-left: 50px;
        border: none;
        .start{
          margin-bottom: 10px;
          a{
            @include font-thin(14px,$colorA);
            i{
              @include font-thin(14px,$colorA);
            }
            margin-right: 20px;
          }
        }
        .stop{
          .stop-input{
            width: 500px;
            .el-input-group__append{
              background-color: #fff;
            }
          }
        }
        .footer{
          margin: 10px 0 0 80px;
          @include font-thin(14px,#999);
        }
      }
    }
  }
  .start,
  .stop {
    span{
      @include font-thin;
      .star{
        @include font-thin(14px,#FF3B30);
      }
      i{
        @include font-thin(18px,#ccc);
      }
    }
  }
}

</style>
