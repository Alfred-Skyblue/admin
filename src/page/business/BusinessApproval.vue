<template>
  <div class="business-approval">
    <header>
        <a href="javascript:;">订单审批</a>
        <a href="javascript:;">回款审批</a>
        <a href="javascript:;">报销审批</a>
        <a href="javascript:;">退款审批</a>
        <a href="javascript:;">办公审批</a>
    </header>
    <main>
      <div class="content">
        <div class="on-off">
          <span class="body-titiel">审批开关:</span>
          <el-switch
            v-model="value"
            active-color="#0079fe"
            inactive-color="#ff4949">
          </el-switch>
          <p>1、关闭审批后，系统将自动通过所有未审批完成的订单；</p>
          <p>2、关闭审批后，使用审批通过时间的业绩指标将无法正常统计；</p>
        </div>
        <div class="body-content">
            <span class="body-titiel body-titiel-put">审批设置:</span>
            <ul>
              <li v-for="item of nameList" :key="item.id">
                {{item.id + 1}} 级审批人：
                <template>
                  <el-radio-group v-model="item.radio">
                    <el-radio :label="3" @change="unappoint(item.id)">负责人主管</el-radio>
                    <el-radio :label="6" @change="appoint(item.id)">指定用户(任意一人)</el-radio>
                    <el-radio :label="9" @change="appoint(item.id)">指定用户(多人会签)</el-radio>
                    <el-radio :label="12" @change="higherup(item.id)" v-if="item.id">上一级审批人主管</el-radio>
                  </el-radio-group>
                </template>
                <div class="name-list" v-show="item.show">
                <span class="staff-name" v-for="(item1 ,index) of item.nameList" :key="index">
                {{item1}}
                <i class="el-icon-close" @click="delClick(index, index1)"></i></span>
                <span class="add el-icon-s-custom" @click="addClick(index)" value-key='index'></span>
                </div>
              </li>
            </ul>
            <div class="add-approval" @click="addList">
            <i class="el-icon-plus"></i>
            添加审批层级
            </div>
            <div class="approval-font">
              <p>1、当选择“负责人主管”审批时。系统仅会通知负责人主管，但负责人所有上级（主管、主管的主管）均可审批。</p>
              <p>2、当选择多个“指定用户”审批时。如果指定用户没有权限查看对应的订单，系统不会通知其审批。</p>
              <p>3、当选择“指定用户（任意一人）”表示指定用户中任意一人审批即可。当选择“指定用户（多人会签）”表示指定用户中所有人都要审批。</p>
              <p>4、如果仍有待审批的订单，允许添加“指定用户”，但不允许修改其他审批规则。</p>
              <p>5、多人会签的下一级不能是“上级审批人主管”。</p>
            </div>
          </div>
          <div class="approval-pass">
            <span class="approval-pass-titiel">编辑规则：</span>
            <span class="approval-pass-font-l">审批通过后</span>
            <el-radio-group v-model="radio">
              <el-radio :label="3">允许</el-radio>
              <el-radio :label="6">不允许</el-radio>
            </el-radio-group>
            <span class="approval-pass-font-r">编辑以下字段</span>
          </div>
          <ul class="approval-pass-ulst">
            <li>
              <span class="left">字段名称</span>
              <span class="right">选择</span>
            </li>
            <li v-for="(item ,index) of signingList" :key="index">
              <span class="left">{{item}}</span>
              <span class="right">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox :label="index">{{ sumn }}</el-checkbox>
                </el-checkbox-group>
              </span>
            </li>
          </ul>
          <div class="announce">
          此规则仅限制非审批人，审批人仍然可以编辑。
          </div>
      </div>
    </main>
    <business-footer></business-footer>
  </div>
</template>

<script>
import BusinessFooter from './BusinessFooter'
export default {
  name: 'BusinessApproval',
  data () {
    return {
      sum: '赵小刚',
      sumn: null,
      checked: true,
      value: true,
      radio: 1,
      checkList: [],
      List: [
        {
          id: 0,
          checkList: []
        },
        {
          id: 1,
          checkList: []
        },
        {
          id: 2,
          checkList: []
        },
        {
          id: 3,
          checkList: []
        },
        {
          id: 4,
          checkList: []
        },
        {
          id: 5,
          checkList: []
        },
        {
          id: 6,
          checkList: []
        },
        {
          id: 7,
          checkList: []
        }
      ],
      nameList: [
        {
          id: 0,
          radio: 1,
          show: false,
          nameList: [
            '赵小刚',
            '李小明'
          ]
        },
        {
          id: 1,
          radio: 1,
          show: false,
          nameList: [
            '赵小刚',
            '李小明'
          ]
        },
        {
          id: 2,
          radio: 1,
          show: false,
          nameList: [
            '赵小刚',
            '李小明'
          ]
        }
      ],
      signingList: [
        '订单标题',
        '关联客户',
        '关联商机',
        '产品记录',
        '订单总金额',
        '签单日期',
        '订单类型',
        '开始日期',
        '到期日期',
        '客户签约人',
        '我方签约人',
        '付款方式',
        '归属人员',
        '备注信息'
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
  //   addClick (index) {
  //     const sum = this.sum
  //     this.nameList.push(sum)
  //   },
    appoint (index) {
      this.nameList[index].show = true
    },
    unappoint (index) {
      this.nameList[index].show = false
    },
    higherup (index) {
      this.nameList[index].nameList = this.nameList[index - 1].nameList
    },
    addList () {

    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/mixin.scss';
.business-approval{
  width: 1260px;
  background-color: #FCFCFC;
  margin-left: auto;
  margin-right: auto;
  header{
    box-sizing: border-box;
    margin-top: 20px;
    width: 1260px;
    height: 80px;
    background-color: #fff;
    border: 1px solid #E9E9E9;
    border-bottom: none;
    padding-left: 20px;
    a{
      @include font-wide(14px);
      text-align: left;
      line-height: 80px;
      margin-left: 50px;
      &:hover{
        color: $colorA;
      }
    }
  }
  main{
    box-sizing: border-box;
    width: 1260px;
    background-color: #fff;
    padding: 30px;
    border: 1px solid #E9E9E9;
    padding-left: 120px;
    .content{
      width: 1000px;
      .on-off{
        position: relative;
        p {
          @include font-thin(14px,#999);
          margin: 30px 0;
        }
        p:nth-of-type(2){
          margin-top: -20px;
        }
      }
      .body-content{
        position: relative;
        ul{
          border: 1px solid #E4E4E4;
          li{
            @include font-thin;
            padding: 15px 0 15px 15px;
            border-bottom: 1px solid #E4E4E4;
          }
          li:last-child{
            border-bottom: none;
          }
          .name-list{
            position: relative;
            display: inline-block;
            width: 600px;
            height: 35px;
            line-height: 2.5;
            margin-right: 30px;
            margin-top: 10px;
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
        }
        .add-approval{
          @include font-thin(14px,#999);
          width: 120px;
          height: 35px;
          line-height: 35px;
          border: 1px solid #E4E4E4;
          margin-top: 50px;
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
        .approval-font{
          margin-top: 30px;
          @include font-thin(14px,#999);
          line-height: 30px;
        }
      }
      .approval-pass {
          @include font-thin;
          position: relative;
          margin: 30px 0;
        .approval-pass-font-l,
        .approval-pass-font-r{
          @include font-thin;
        }
        .approval-pass-font-l{
          margin-right: 20px;
        }
        .approval-pass-font-r{
          margin-left: 20px;
        }
      }
      @include business-list;
      .announce{
        @include font-thin(14px,#999);
        height: 28px;
        line-height: 28px;
        margin: 30px 0;
      }
    }
  }
  .body-titiel,
  .approval-pass-titiel{
    position: absolute;
    left: -80px;
    @include font-thin
  }
  .body-titiel-put{
    top: 14px;
  }
}

</style>
