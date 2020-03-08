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
              <input type="checkbox" name="" id="awesome">
              <label for="awesome">手机短信</label>
              <input type="checkbox" name="" id="awesome1">
              <label for="awesome1">电子邮箱</label>
              <input type="checkbox" name="" id="awesome2">
              <label for="awesome2">系统消息</label>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
    <div class="keep">
      <i class="el-icon-circle-check"></i>
      <a href="javascript:;">保存</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BusinessWarn',
  data () {
    return {
      List: [
        {
          id: 0
        },
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        },
        {
          id: 7
        }
      ]
    }
  },
  props: {
    businessList: Array
  }
}
</script>

<style lang="scss" scoped>
.business-warn{
  background-color: #FCFCFC;
  margin-left: 20px;
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
      font: 700 16px '微软雅黑 Bold';
      text-align: left;
      line-height: 60px;
      color: #666;
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
        color: #666;
        font: 700 14px '微软雅黑 Bold';
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
        input[type="checkbox"] + label::before {
          content: "\a0";  /*不换行空格*/
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-color: silver;
          line-height: .8;
        }
        input[type="checkbox"]:checked + label::before {
          content: "\2714";
          background-color: #0079FE;
          color: #fff;
        }
        input {
          position: absolute;
          clip: rect(0, 0, 0, 0);
        }
        label {
          margin-right: 15px;
        }
      }
    }
  }
  .keep{
    display: block;
    margin: 50px auto 0;
    width: 140px;
    height: 40px;
    background-color: rgba(0, 121, 254, 1);
    border-radius: 3px;
    text-align: center;
    line-height: 2.9;
    i,a{
      font-size: 14px;
      color: #fff;
      font-weight: 700;
    }
    i{
      margin-right: 4px;
    }
  }
}

</style>
