<template>
  <div class="other">
    <main>
      <div class="main-header">
        <p>提示：自定义时间优先级高于工作日</p>
      </div>
      <div class="main-content">
        <p class="header">
            工作日设置
        </p>
        <div class="header-timer">
          <div class="container">
            <div class="block">
              <el-date-picker
                v-model="value3"
                type="year"
                placeholder="选择年">
              </el-date-picker>
            </div>
          </div>
          <div class="week">
            <template>
              <el-checkbox-group v-model="checkList" class="week">
                <el-checkbox class="week-info" :label="item.id" v-for="item of timerList" :key="item.id">{{item.name}}</el-checkbox>
              </el-checkbox-group>
            </template>
          </div>
          <div class="make-button">
            <el-button type="primary" class="button">
              <i class="el-icon-success"></i>
              确定
            </el-button>
          </div>
        </div>
        <p class="header">
          自定义时间
        </p>
        <div class="add-timer">
            <a href="javascript:;" class="deltiemr"><i class="el-icon-delete-solid"></i>删除选择</a>
            <div class="make-button">
              <el-button type="primary" class="button">
                <i class="el-icon-plus"></i>
                添加自定义时间
              </el-button>
            </div>
        </div>
        <ul class="content">
          <li>
            <span class="manner">
              <el-checkbox-group v-model="checkList">
                <el-checkbox :label="index">{{ sumn }}</el-checkbox>
              </el-checkbox-group>
            </span>
            <span class="left">日期</span>
            <span class="center">状态</span>
            <span class="right">操作</span>
          </li>
          <li v-for="item of List" :key="item">
            <span class="manner">
              <el-checkbox-group v-model="checkList">
                <el-checkbox :label="index">{{ sumn }}</el-checkbox>
              </el-checkbox-group>
            </span>
            <span class="left">2019-10-01</span>
            <span class="center">休息</span>
            <span class="right">
            <a href="javascript:;"><i class="el-icon-edit"></i>编辑</a>
            <a href="javascript:;"><i class="el-icon-delete-solid"></i>删除</a></span>
          </li>
        </ul>
    </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'BusinessMore',
  data () {
    return {
      input: '',
      value3: '',
      startTime: '',
      endTime: '',
      sumn: null,
      checkList: [],
      timerList: [
        {
          id: 0,
          name: '周一'
        },
        {
          id: 1,
          name: '周二'
        },
        {
          id: 2,
          name: '周三'
        },
        {
          id: 3,
          name: '周四'
        },
        {
          id: 4,
          name: '周五'
        },
        {
          id: 5,
          name: '周六'
        },
        {
          id: 6,
          name: '周日'
        }
      ],
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

  },
  methods: {
    addList () {

    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/mixin.scss';
.other{
  main{
    box-sizing: border-box;
    width: 1260px;
    background-color: #fff;
    padding: 30px;
    border: 1px solid #E9E9E9;
    .main-header{
      p{
        @include font-thin;
      }
    }
    .main-content{
      .header{
        @include border-left
      }
      .header-timer{
        width: 1160px;
        height: 100px;
        line-height: 100px;
        padding-left: 20px;
        border: 1px solid #F2F2F2;
        .container{
          display: inline-block;
        }
        .week{
          display: inline-block;
          margin-left: 10px;
          .week-info{
            @include font-thin(14px,#999);
          }
        }
        .make-button{
          float: right;
          margin-right: 40px;
          .button{
            background-color: $colorA;
            width: 140px;
          }
        }
      }
      .add-timer{
        width: 1160px;
        height: 80px;
        line-height: 80px;
        border: 1px solid #F2F2F2;
        padding-left: 20px;
        margin-bottom: 30px;
        .deltiemr{
          display: inline-block;
          width: 100px;
          height: 40px;
          line-height: 40px;
          @include font-thin(14px,#999);
          border: 1px solid #E4E4E4;
          text-align: center;
          border-radius: 3px;
          &:hover{
            border: 1px solid $colorA;
            color: $colorA;
          }
        }
        .make-button{
          float: right;
          margin-right: 40px;
          .button{
            background-color: $colorA;
            width: 140px;
            height: 40px;
            padding: 0;
          }
        }
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
          padding-left: 10px;
          @include font-thin;
          border-bottom: 1px solid #E4E4E4;
        }
        .manner{
          box-sizing: border-box;
          display: inline-block;
          height: 40px;
        }
        .left,
        .right,
        .center{
          display: inline-block;
          width: 29.9%;
          padding-left: 20px;
        }
        .left,
        .center,
        .manner{
          border-right: 1px solid #E4E4E4;
        }
        .right{
          a{
            margin-right: 10px;
            @include font-thin(12px,$colorA);
          }
        }
      }
    }
  }
}

</style>
