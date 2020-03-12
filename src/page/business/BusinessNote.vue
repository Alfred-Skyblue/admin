<template>
  <div class="business-note">
    <header>
      <i class="el-icon-edit-outline"></i>
      <span>提醒设置</span>
    </header>
    <main>
      <div class="main-header">
        <p>短信限额配置</p>
        <span class="title">限制每个员工每月发送短信的额度</span>
      </div>
      <div class="choose">
        <el-radio v-model="radio" label="1">不启动</el-radio>
        <el-radio v-model="radio" label="2">启动</el-radio>
      </div>
      <div class="main-rule">
        <transition-group appear tag="div">
          <el-row :gutter="20" class="content" >
            <el-col :span="8"><div class="grid-content bg-purple left">
            全员每月默认配额 ：
            <el-input v-model="input" placeholder="500" class="content-input"></el-input>条
            </div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple right">此规则针对：所有员工（特殊员工和超级管理员除外）</div></el-col>
          </el-row>
          <el-row :gutter="20" class="content" v-for="(item, index) of List" :key="item.id">
            <el-col :span="8"><div class="grid-content bg-purple left">
            全员每月默认配额 ：{{item.id}}
            <el-input v-model="input" placeholder="1000" class="content-input"></el-input>条
            </div>
            </el-col>
            <el-col :span="16"><div class="grid-content bg-purple right">此规则针对：
              <div class="name-list">
                <span class="staff-name" v-for="(item1 ,index1) of item.nameList" :key="index1">
                {{item1}}
                <i class="el-icon-close" @click="delClick(index, index1)"></i></span>
                <span class="add el-icon-s-custom" @click="addClick(index)" value-key='index'></span>
              </div>
              <span class="del" @click="delNameList(index)">删除</span>
              </div>
            </el-col>
          </el-row>
        </transition-group>
      </div>
    </main>
    <business-footer></business-footer>
  </div>
</template>

<script>
import BusinessFooter from './BusinessFooter'
export default {
  name: 'BusinessNote',
  data () {
    return {
      input: '',
      sum: '李小红',
      radio: '1',
      List: [
        {
          id: 0,
          nameList: [
            '赵小刚',
            '李小明',
            '李小明'
          ]
        },
        {
          id: 1,
          nameList: [
            '赵小刚',
            '李小明'
          ]
        },
        {
          id: 2,
          nameList: [
            '赵小刚',
            '李小明'
          ]
        },
        {
          id: 3,
          nameList: [
            '赵小刚',
            '李小明'
          ]
        },
        {
          id: 4,
          nameList: [
            '赵小刚',
            '李小明'
          ]
        },
        {
          id: 5,
          nameList: [
            '赵小刚',
            '李小明'
          ]
        },
        {
          id: 6,
          nameList: [
            '赵小刚',
            '李小明'
          ]
        },
        {
          id: 7,
          nameList: [
            '赵小刚',
            '李小明'
          ]
        }
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
    addClick (index) {
      const sum = this.sum
      this.List[index].nameList.push(sum)
    },
    delClick (index, index1) {
      this.List[index].nameList.splice(index1, 1)
    },
    delNameList (index) {
      this.List.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/mixin.scss';
.v-enter,
.v-leave-to {
    opacity: 0;
    transform: translateY(80px);
}

.v-enter-active,
.v-leave-active {
    transition: all 0.6s ease;
}

/* 下面的 .v-move 和 .v-leave-active 配合使用，能够实现列表后续的元素，渐渐地漂上来的效果 */
.v-move {
    transition: all 0.6s ease;
}

.v-leave-active {
    position: absolute;
}
.business-note{
  width: 1260px;
  background-color: #FCFCFC;
  margin-left: auto;
  margin-right: auto;
  header{
    box-sizing: border-box;
    margin-top: 20px;
    width: 1260px;
    height: 60px;
    background-color: #fff;
    border: 1px solid #E9E9E9;
    border-bottom: none;
    padding-left: 20px;
    i,
    span{
      @include font-wide;
      text-align: left;
      line-height: 60px;
      margin-left: 3px;
    }
  }
    main{
    box-sizing: border-box;
    width: 1260px;
    background-color: #fff;
    padding: 30px 0 30px 50px;
    border: 1px solid #E9E9E9;
    .main-header{
      line-height: 1;
      p {
        @include font-wide;
        border-left: 5px solid $colorA;
        padding-left: 10px;
        margin-bottom: 40px;
      }
      .title{
      @include font-thin;
      margin-left: 10px;
    }
    }
    .choose {
      margin-top: 30px;
      margin-bottom: 20px;
      @include font-thin;
      .choose-start,
      .choose-stop{
        display: inline-block;
        vertical-align: bottom;
        width: 14px;
        height: 14px;
        background-color: #fff;
        border-radius: 8px;
        border: 1px solid #C2C2C2;
        margin-right: 8px;
      }
      .choose-start{
        margin-left: 10px;
      }
    }
    .main-rule {
      width: 1140px;
      margin-left: auto;
      margin-right: auto;
      border: 1px solid #E4E4E4;
      border-right: none;
      border-bottom: none;
      .content {
        height: 50px;
        line-height: 50px;
        div{
          @include font-thin;
        }
        .left,.right{
          border-right:1px solid #E4E4E4;
          border-bottom:1px solid #E4E4E4;
          height: 50px;
          line-height: 50px;
          box-sizing: border-box;
        }
        .left{
          padding-left: 10px;
          .content-input {
            width: 65px;
            height: 30px;
            margin-right: 10px;
          }
        }
        .right{
          padding-left: 20px;
          margin-left: -20px;
          .name-list{
            position: relative;
            display: inline-block;
            width: 600px;
            height: 35px;
            line-height: 2.5;
            margin-right: 30px;
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
          .del{
              @include font-thin(12px,$colorA);
          }
        }
      }
    }

    }
}

</style>
