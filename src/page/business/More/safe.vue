<template>
  <div class="safe">
    <main>
      <div class="main-header">
        <p>设置工作报告查看范围</p>
      </div>
      <div class="main-content">
          <div class="content-header">
            <el-checkbox-group v-model="checkList">
              <div>
                <el-checkbox label="A">超级管理员查看全公司的工作报告</el-checkbox>
              </div>
              <div class="scope-info">
                <el-checkbox label="B">管查看下属的工作报告(包括下属的下属)</el-checkbox>
              </div>
              <p>勾选后，可对工作报告查看点评, 非批阅人不起批阅作用。</p>
            </el-checkbox-group>
          </div>
      </div>
      <div class="main-header">
        <p>以下职务不参与报告统计</p>
      </div>
      <ul>
          <li>
            <div class="name-list">
              <span class="staff-name" v-for="item of nameList" :key="item.id">
              {{item.name}}
              <i class="el-icon-close" @click="delClick(index, index1)"></i></span>
              <span class="add el-icon-s-custom" @click="addClick(index)" value-key='index'></span>
            </div>
          </li>
      </ul>
      <div class="main-header">
        <p>日报统计包括周末</p>
      </div>
      <div class="weekend">
        <el-checkbox-group v-model="checkList1">
            <el-checkbox label="A">周六</el-checkbox>
            <el-checkbox label="B">周日</el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="keep-button">
        <el-button type="primary" class="button">
          <i class="el-icon-success success-icon"></i>
          保存
        </el-button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'report',
  data () {
    return {
      checkList: ['选中且禁用', '复选框 A'],
      checkList1: ['选中且禁用', '复选框 A'],
      nameList: [
        {
          id: 1,
          name: '李小明'
        },
        {
          id: 2,
          name: '李小明'
        }
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
.safe{
  main{
    box-sizing: border-box;
    width: 1260px;
    background-color: #fff;
    padding: 30px;
    border: 1px solid #E9E9E9;
    .main-header{
      p{
        @include font-wide(14px);
        margin-bottom: 35px;
      }
    }
    .main-content{
      .content-header{
        @include font-thin;
        .scope-info{
          margin: 20px 0;
        }
        p{
          @include font-thin(14px,#999);
          margin-bottom: 40px;
        }
      }
    }
    .name-list{
      position: relative;
      display: inline-block;
      width: 600px;
      height: 35px;
      line-height: 35px;
      margin-bottom: 40px;
      border: 1px solid #D7D7D7;
      vertical-align:middle;
      .staff-name{
        @include font-thin(12px);
        margin: 0 0 0 10px;
        border: 1px solid #E4E4E4;
        border-radius: 1px;
        padding: 5px;
      }
      i{
        margin-left: 5px;
        font-weight: 700;
      }
      .add {
        position: absolute;
        right: 10px;
        top: 11px;
      }
    }
    .keep-button{
      margin-top: 30px;
      .success-icon{
        font-size: 14px;
        color: #fff;
        font-weight: 400;
        margin-right: 4px;
      }
      .button {
        background-color: $colorA;
        width: 140px;
      }
    }
  }
}

</style>
