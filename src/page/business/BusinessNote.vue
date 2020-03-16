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
          <el-row :gutter="20" class="content" v-for="(item, index) of List" :key="item.index">
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
                <span class="add el-icon-s-custom"
                @click="addClick(index)"
                value-key='index'></span>
              </div>
              <span class="del" @click="delNameList(index)">删除</span>
              </div>
            </el-col>
          </el-row>
      </div>
      <div class="add-approval" @click="addList" v-if="!flag">
        <i class="el-icon-plus"></i>
        新增特殊员工
      </div>
      <div class="main-header">
        <p>短信签名设置</p>
      </div>
      <div class="main-footer">
        <p>1、短信签名是由国家工信部规定，附加在短信内容前的标识，用于标识公司或业务；</p>
        <p>2、短信签名内容要求2-8个字(由中英文，数字组成，不能包含其他特殊字符，如"+，@，|等")</p>
        <div class="info">
          <span><i>*</i>短信签名：</span>
          <div>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </div>
    </main>
    <business-dialog
      ref = "children"
      contentIndex = addIndex
      @setInput="setInput"
    ></business-dialog>
    <business-footer @click.native="handelClick"></business-footer>
  </div>
</template>

<script>
import BusinessFooter from './BusinessFooter'
import BusinessDialog from './Businessdialog'
export default {
  name: 'BusinessNote',
  data () {
    return {
      // 信息配额
      input: '',
      // 控制弹窗
      addIndex: null,
      // 控制开关
      radio: '1',
      flag: false,
      // 添加新管理
      listObj: {
        id: null,
        input: '',
        nameList: [
        ]
      },
      // 员工表格
      List: [
        {
          id: 0,
          // 限制配额数量
          input: '',
          // 限制名单
          nameList: [
          ]
        },
        {
          id: 1,
          input: '',
          nameList: [
          ]
        },
        {
          id: 2,
          input: '',
          nameList: [
          ]
        }
      ]
    }
  },
  components: {
    BusinessFooter,
    BusinessDialog
  },
  methods: {
    // 保存索引
    addClick (index) {
      this.addIndex = index
      this.$refs.children.dialogVisible1(true)
    },
    // 删除员工
    delClick (index, index1) {
      this.List[index].nameList.splice(index1, 1)
      this.$message.success('删除成功')
    },
    // 删除列表
    delNameList (index) {
      this.List.splice(index, 1)
    },
    // 增加列表
    addList () {
      const data = Object.assign({}, JSON.parse(JSON.stringify(this.listObj)))
      const sum = this.List.push(data) - 1
      this.List[sum].id = sum
    },
    // 添加员工
    setInput (input) {
      this.List[this.addIndex].nameList.push(input)
    },
    // 返回数据
    handelClick () {
      return [this.List, this.input]
    }
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
    .add-approval{
      @include font-thin(14px,#999);
      width: 120px;
      height: 35px;
      line-height: 35px;
      border: 1px solid #E4E4E4;
      margin: 50px 0;
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
      p{
        @include font-thin(14px,#999)
      }
      .info{
        margin: 30px 0 0 20px;
        span{
          display: inline-block;
          @include font-thin;
          i{
            color: red;
            margin-right: 5px;
            font-style:normal
          }
        }
        div{
          display: inline-block;
        }
      }
    }
    }
}

</style>
