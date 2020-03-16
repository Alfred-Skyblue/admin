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
        <el-radio v-model="radio" label=1>启动</el-radio>
        <el-radio v-model="radio" label=0>不启动</el-radio>
      </div>
      <div class="main-rule">
          <el-row :gutter="20" class="content" >
            <el-col :span="8"><div class="grid-content bg-purple left">
            全员每月默认配额 ：
            <el-input v-model="input" :disabled="flag" placeholder="500" class="content-input"></el-input>条
            </div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple right" v-if="!flag">此规则针对：所有员工（特殊员工和超级管理员除外）</div></el-col>
          </el-row>
          <el-row :gutter="20" class="content" v-for="(item, index) of List" :key="item.id">
            <el-col :span="8"><div class="grid-content bg-purple left">
            全员每月默认配额 ：
            <el-input v-model="item.input" :disabled="flag" placeholder="1000" class="content-input"></el-input>条
            </div>
            </el-col>
            <el-col :span="16"><div class="grid-content bg-purple right" v-if="!flag">此规则针对：
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
      flag: false,
      List: [
        {
          id: 0,
          input: '',
          nameList: [
            '赵小刚',
            '李小明',
            '李小明'
          ]
        },
        {
          id: 1,
          input: '',
          nameList: [
            '赵小刚',
            '李小明'
          ]
        },
        {
          id: 2,
          input: '',
          nameList: [
            '赵小刚',
            '李小明'
          ]
        },
        {
          id: 3,
          input: '',
          nameList: [
            '赵小刚',
            '李小明'
          ]
        },
        {
          id: 4,
          input: '',
          nameList: [
            '赵小刚',
            '李小明'
          ]
        },
        {
          id: 5,
          input: '',
          nameList: [
            '赵小刚',
            '李小明'
          ]
        },
        {
          id: 6,
          input: '',
          nameList: [
            '赵小刚',
            '李小明'
          ]
        },
        {
          id: 7,
          input: '',
          nameList: [
            '赵小刚',
            '李小明'
          ]
        }
      ],
      nameList: []
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
      const sum = this.nameList
      this.List[index].nameList.push(sum)
    },
    delClick (index, index1) {
      this.List[index].nameList.splice(index1, 1)
    },
    delNameList (index) {
      this.List.splice(index, 1)
    }
  },
  mounted () {
  },
  watch: {
    radio: {
      handler (newVal) {
        console.log(this.radio)
        if (newVal === '0') {
          this.flag = true
        } else {
          this.flag = false
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/mixin.scss';
.business-note{
  header{
    @include business-header;
    i,
    span{
      @include font-wide(14px);
      text-align: left;
      line-height: 60px;
      margin-left: 3px;
    }
  }
    main{
    @include business-more-main;
    padding: 30px 0 30px 50px;
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
