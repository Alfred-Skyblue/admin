<template>
  <div class="business-warn">
    <header>
      <i class="el-icon-edit-outline"></i>
      <span>提醒设置</span>
    </header>
    <main>
      <table>
        <thead>
          <th>提醒类型</th>
          <th>事件说明</th>
          <th>提醒方式</th>
        </thead>
        <tbody>
          <tr v-for="item of List" :key="item.id">
            <td>{{item.title}}</td>
            <td>{{item.info}}</td>
            <td>
              <template>
                <el-checkbox-group v-model="item.checkList">
                  <el-checkbox label="手机短信"></el-checkbox>
                  <el-checkbox label="电子邮箱"></el-checkbox>
                  <el-checkbox label="系统消息"></el-checkbox>
                </el-checkbox-group>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
    <business-footer @click.native="handelClick"></business-footer>
  </div>
</template>

<script>
import BusinessFooter from './BusinessFooter'
export default {
  name: 'BusinessWarn',
  data () {
    return {
      List: [
        {
          id: 0,
          title: '审批',
          info: '有新的审批时提醒抄送人',
          checkList: []
        },
        {
          id: 1,
          title: '审批',
          info: '审批通过提醒创建人',
          checkList: []
        },
        {
          id: 2,
          title: '审批',
          info: '审批拒绝提醒创建人',
          checkList: []
        },
        {
          id: 3,
          title: '审批',
          info: '有新的审批时提醒处理人',
          checkList: []
        },
        {
          id: 4,
          title: '工单',
          info: '有新的工单时提醒执行人',
          checkList: []
        },
        {
          id: 5,
          title: '工单',
          info: '有新的工单时提醒抄送人',
          checkList: []
        },
        {
          id: 6,
          title: '工单',
          info: '工单完结时提醒发起人',
          checkList: []
        },
        {
          id: 7,
          title: '工单',
          info: '工单退回时提醒被退回人',
          checkList: []
        },
        {
          id: 8,
          title: '工作报告',
          info: '有新的工作报告时提醒批阅人员',
          checkList: []
        },
        {
          id: 9,
          title: '工作报告',
          info: '有新的工作报告时提醒抄送人员',
          checkList: []
        },
        {
          id: 10,
          title: '工作报告',
          info: '有新的报告批阅时提醒提交人员',
          checkList: []
        },
        {
          id: 11,
          title: '写新跟进',
          info: '提交新的跟进时提醒抄送人员',
          checkList: []
        },
        {
          id: 12,
          title: '普通任务',
          info: '有新的任务时提醒负责人员',
          checkList: []
        },
        {
          id: 13,
          title: '普通任务',
          info: '有新的任务时提醒参与人员',
          checkList: []
        },
        {
          id: 14,
          title: '跟进任务',
          info: '有新的任务时提醒抄送人员',
          checkList: []
        }
      ]
    }
  },
  components: {
    BusinessFooter
  },
  methods: {
    handelClick () {
      return this.List
    }
  }
}
</script>
<style lang="scss">
@import '../../assets/scss/mixin.scss';
.business-warn{
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
    table {
      width: 1182px;
      text-align: left;
      border: 1px solid #E9E9E9;
      th,td{
        width: 33.3%;
        border: 1px solid #E9E9E9;
        padding-left: 10px;
        @include font-wide(14px);
      }
      th{
        height: 45px;
        line-height: 0.9;
        background-color: #F5F5F5;
      }
      td{
        height: 50px;
        line-height: 1;
        font-weight: 400;
      }
    }
  }
}
</style>
