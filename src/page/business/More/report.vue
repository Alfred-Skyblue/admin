<template>
  <div class="report">
    <main>
      <div class="main-header">
        <p>提示：企业更改密码设置后，所有员工都将遵循以下规则。</p>
      </div>
      <div class="main-content">
        <ul>
          <span class="content-info-one">密码组成：</span>
          <li>
            <el-checkbox-group v-model="checkList" class="pass-info">
              <el-checkbox label="A">数字</el-checkbox>
              <el-checkbox label="B">小写字母</el-checkbox>
              <el-checkbox label="C">大写字母</el-checkbox>
              <el-checkbox label="D">特殊符号（如 "," "@" 等）</el-checkbox>
            </el-checkbox-group>
          </li>
          <p>密码必须包含以上字符</p>
          <br/>
          <span class="content-info-two">密码长度：</span>
          <li>
            <div style="margin-top: 15px;">
              <el-input placeholder="请输入内容" v-model="input2">
                <template slot="append">位</template>
              </el-input>
            </div>

          </li>
            <p>密码最短长度</p>
          <br/>
          <span class="content-info-three">登录失效时间：</span>
          <li>
            <template>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
          </li>
            <p>WEB端在以上时间内无操作，退出到登录页面。 </p>
          <br/>
          <span class="content-info-five">短信验证：</span>
          <li>
              <div class="on-off">
                <span class="body-titiel">审批开关:</span>
                <el-switch
                  v-model="value2"
                  active-color="#0079fe"
                  inactive-color="#ff4949">
                </el-switch>
            </div>
          </li>
          <p>开启短信验证后，帐号在新设备登录时，输入密码后，需通过短信验证，方可完成登录。 </p>
        </ul>
      </div>
      <business-footer></business-footer>
    </main>
  </div>
</template>

<script>
import BusinessFooter from '../BusinessFooter'
export default {
  name: 'report',
  data () {
    return {
      checkList: ['选中且禁用', '复选框 A'],
      options: [{
        value: '选项1',
        label: '5分钟'
      }, {
        value: '选项2',
        label: '10分钟'
      }, {
        value: '选项3',
        label: '30分钟'
      }, {
        value: '选项4',
        label: '1小时'
      }, {
        value: '选项5',
        label: '5小时'
      }],
      value: '',
      value2: ''
    }
  },
  props: {
    businessList: Array
  },
  components: {
    BusinessFooter
  },
  methods: {
    addList () {

    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/mixin.scss';
.report{
  main{
    box-sizing: border-box;
    width: 1260px;
    background-color: #fff;
    padding: 30px;
    border: 1px solid #E9E9E9;
    .main-header{
      @include font-thin
    }
    .main-content{
      ul{
        margin-top: 50px;
        span{
          @include font-thin;
        }
        p{
          @include font-thin(14px,#999);
          margin: 10px 0 10px 120px;
        }
        .content-info-one,
        .content-info-two,
        .content-info-five{
          margin-left: 27px;
        }
        li{
          height: 40px;
          padding-left: 20px;
          display: inline-block;
          .el-input-group__append{
            background-color: #fff;
          }
          .body-titiel{
            margin-right: 15px;
          }
        }
        li:nth-of-type(2){
          margin-bottom: 30px;
        }
      }
    }
  }
}

</style>
