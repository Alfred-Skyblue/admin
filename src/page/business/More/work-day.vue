<template>
  <div class="work-day">
    <main>
      <div class="main-content clearfix">
        <div class="left-info fl">
          <p>任务分配模式：</p>
          <p>工单分配模式：</p>
          <p>回款逾期提醒：</p>
          <p>订单到期提醒：</p>
          <p>上传文件限制：</p>
        </div>
        <div class="right-info fl">
          <ul>
            <li>
            <template>
              <el-radio v-model="radio" label="1">只允许分配给下级</el-radio>
              <el-radio v-model="radio" label="2">随意分配</el-radio>
            </template>
            </li>
            <li>
              <template>
                <el-radio v-model="radio" label="1">只允许分配给下级</el-radio>
                <el-radio v-model="radio" label="2">随意分配</el-radio>
              </template>
            </li>
            <li>
              <div>
                <el-input placeholder="7" v-model="input1">
                  <template slot="append">天</template>
                </el-input>
              </div>
              <p>回款逾期将在以上前日期提前通知</p>
            </li>
            <li>
              <div>
                <el-input placeholder="7" v-model="input2">
                  <template slot="append">天</template>
                </el-input>
              </div>
              <p>订单到期将在以上前日期提前通知</p>
            </li>
            <li>
              <div>
                <el-input placeholder="20" v-model="input3">
                  <template slot="append">MB</template>
                </el-input>
              </div>
              <p>限定单个文件上传的最大值（可填写 1~20 整数）</p>
            </li>
            <li>
              <div class="keep-button">
                <el-button type="primary" class="button">
                  <i class="el-icon-success success-icon"></i>
                  保存
                </el-button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'WorkDay',
  data () {
    return {
      radio: '1',
      radio1: '1',
      input1: '',
      input2: '',
      input3: ''
    }
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
@import '../../../assets/scss/base.scss';
.work-day{
  main{
    box-sizing: border-box;
    width: 1260px;
    background-color: #fff;
    padding: 30px;
    border: 1px solid #E9E9E9;

    .main-content{
      .left-info{
        margin: -1px 0 0 20px;
        p{
          @include font-thin;
          height: 80px;
        }
        p:nth-child(2){
          margin-bottom: 10px;
        }
      }
      .right-info{
        margin-left: 20px;
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
        li{
          height: 80px;
          .el-input-group__append{
            background-color: #fff;
            width: 60px;
            padding: 0;
            text-align: center;
          }
          p{
            @include font-thin(14px,#999);
            margin-top: 5px;
          }
        }
      }
    }
  }
}

</style>
