<template>
  <div class="business-warn">
    <header>
      <i class="el-icon-edit-outline"></i>
      <span>提醒设置</span>
    </header>
    <main>
      <table>
        <thead>
          <th>提醒</th>
          <th>提醒</th>
          <th>提醒</th>
        </thead>
        <tbody>
          <tr v-for="item of List" :key="item.id">
            <td>审批</td>
            <td>有新的审批时提醒处理人</td>
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
    <business-footer></business-footer>
  </div>
</template>

<script>
import BusinessFooter from './BusinessFooter'
export default {
  name: 'BusinessWarn',
  data () {
    return {
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
      ]
    }
  },
  props: {
    businessList: Array
  },
  components: {
    BusinessFooter
  }
}
</script>
<style lang="scss">
@import '../../assets/scss/mixin.scss';
.business-warn{
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
    }
    span {
      margin-left: 3px;
    }
  }
  main{
    box-sizing: border-box;
    width: 1260px;
    background-color: #fff;
    padding: 30px;
    border: 1px solid #E9E9E9;
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
