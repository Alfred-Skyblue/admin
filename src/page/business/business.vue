<template>
  <div class="business">
    <header>
    <i class="el-icon-edit-outline"></i>
    <span>查重设置</span>
    </header>
    <main>
      <div class="main-header">
        <p class="header">短信限额配置</p>
        <div class="info">
            <p>超过N天"未跟进"的客户，由系统定时划入公海 </p><br />
          说明：从开启公海或获得客户（新增、转移、从公海抢到客户）开始，对客户和客户的商机、
          订单写跟进以及新增商机、订单都视为跟进了客户。
        </div>
        <div class="footer">
          <el-radio v-model="radio" label="1">不启动</el-radio>
          <el-radio v-model="radio" label="2">启动</el-radio>
        </div>
      </div>
      <div class="main-content">
        <div class="footer">
          <div class="header-info">
            <el-radio v-model="radio1" label="1"> 所有客户统一设置</el-radio>
            <ul>
              <li class="header">
                <span>客户类型</span>
                <span>未跟进天数</span>
                <span>划入公海时间</span>
                <span>销售人员提醒时间</span>
              </li>
              <li class="footer">
                <span>所有客户</span>
                <span>
                超过
                <div><el-input v-model="input" placeholder="30" class="input-one"></el-input></div>
                天未跟进
                </span>
                <span>
                统会在每天
                <div>
                <el-time-select
                  v-model="value"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                  }"
                  placeholder="17:00">
                </el-time-select>
                </div>
                将客户划入公海
                </span>
                <span>
                并在划入公海前
                <div>
                <el-input v-model="input" placeholder="1"></el-input>
                </div>
                天提醒销售人员及时跟进
                </span>
              </li>
            </ul>
          </div>
          <div class="header-info">
            <el-radio v-model="radio1" label="2">根据客户类型设置</el-radio>
                        <ul>
              <li class="header">
                <span>客户类型</span>
                <span>未跟进天数</span>
                <span>划入公海时间</span>
                <span>销售人员提醒时间</span>
              </li>
              <li class="footer">
                <span>所有客户</span>
                <span>
                超过
                <div><el-input v-model="input" placeholder="30" class="input-one"></el-input></div>
                天未跟进
                </span>
                <span>
                统会在每天
                <div>
                <el-time-select
                  v-model="value"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                  }"
                  placeholder="17:00">
                </el-time-select>
                </div>
                将客户划入公海
                </span>
                <span>
                并在划入公海前
                <div>
                <el-input v-model="input" placeholder="1"></el-input>
                </div>
                天提醒销售人员及时跟进
                </span>
              </li>
              <li class="footer">
                <span>所有客户</span>
                <span>
                超过
                <div><el-input v-model="input" placeholder="30" class="input-one"></el-input></div>
                天未跟进
                </span>
                <span>
                统会在每天
                <div>
                <el-time-select
                  v-model="value"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                  }"
                  placeholder="17:00">
                </el-time-select>
                </div>
                将客户划入公海
                </span>
                <span>
                并在划入公海前
                <div>
                <el-input v-model="input" placeholder="1"></el-input>
                </div>
                天提醒销售人员及时跟进
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main-header">
        <p class="header">客户数量限制</p>
        <div class="info">
            <p>限制每个员工拥有的最大客户数</p><br />
          当员工拥有客户数超过规定上限时，新增客户无法成功。<br/>
          如果在设置最大客户数前，员工所拥有客户数已超过上限，则原有客户不会影响，但是该员工无法再继续添加新客户。
        </div>
        <div class="footer">
          <el-radio v-model="radio" label="1">不启动</el-radio>
          <el-radio v-model="radio" label="2">启动</el-radio>
          <el-checkbox v-model="checked"> 此规则仅限制“未成交”客户</el-checkbox>
        </div>
      </div>
      <div class="main-footer">
          <div class="header">
              <el-radio v-model="radio" label="1">按员工设置不同的客户数上限</el-radio>
              <ul>
                <li>
                  <span>
                    每个员工拥有的最大客户数为
                    <div><el-input v-model="input" placeholder="50" class="input-one"></el-input></div>
                    个
                  </span>
                  <span>
                    此规则针对：所有员工（特殊员工除外）
                  </span>
                </li>
                <li>
                  <span>
                    每个员工拥有的最大客户数为
                    <div><el-input v-model="input" placeholder="100" class="input-one"></el-input></div>
                    个
                  </span>
                  <span>
                    此规则针对：所有员工（特殊员工除外）
                  </span>
                </li>
                <li>
                  <span>
                    每个员工拥有的最大客户数为
                    <div><el-input v-model="input" placeholder="200" class="input-one"></el-input></div>
                    个
                  </span>
                  <span>
                    此规则针对：所有员工（特殊员工除外）
                  </span>
                </li>

              </ul>
          </div>
          <div class="header">
            <el-radio v-model="radio" label="2">根据客户类型分别设置客户数上限</el-radio>
            <ul>
                <li>
                  <span>
                    每个员工拥有的最大客户数为
                    <div><el-input v-model="input" placeholder="50" class="input-one"></el-input></div>
                    个
                  </span>
                  <span>
                    此规则针对：所有员工（特殊员工除外）
                  </span>
                </li>
                <li>
                  <span>
                    每个员工拥有的最大客户数为
                    <div><el-input v-model="input" placeholder="100" class="input-one"></el-input></div>
                    个
                  </span>
                  <span>
                    此规则针对：所有员工（特殊员工除外）
                  </span>
                </li>
              </ul>
          </div>
          <div class="main-header">
            <p class="header">客户保护设置</p>
            <div class="info">
                <p>客户保护期时长设置</p><br />
              说明： 保护期内客户不可进行移入公海、转移、删除等操作，保护期开始时间从客户获取时间开始计算。
            </div>
            <div class="footer">
              <el-radio v-model="radio" label="1">不启动</el-radio>
              <el-radio v-model="radio" label="2">启动</el-radio>
              <div class="bot">
              客户保护期时长
              <div>
              <el-input v-model="input" placeholder="50" class="input-one"></el-input>
              </div>
              天
              </div>
            </div>
          </div>
      </div>
    </main>
    <business-footer></business-footer>
  </div>
</template>

<script>
import BusinessFooter from './BusinessFooter'
export default {
  name: 'drawback',
  data () {
    return {
      input: '',
      radio: '2',
      radio1: '1',
      value: ''
    }
  },
  components: {
    BusinessFooter
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/mixin.scss';
.business{
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
      @include font-wide(14px);
      text-align: left;
      line-height: 60px;
      margin-left: 3px;
    }
  }
  main{
    box-sizing: border-box;
    width: 1260px;
    background-color: #fff;
    padding: 30px;
    border: 1px solid #E9E9E9;
    .main-header{
      margin-bottom: 30px;
      .header{
        @include border-left(16px);
      }
      .info{
        margin-left: 11px;
        p{
          @include font-thin;
        }
        @include font-thin(14px,#999);
      }
      .footer{
        margin-top: 30px;
        .bot{
          display: inline-block;
          @include font-thin;
          div{
            display: inline-block;
            width: 50px;
            height: 30px;
            .el-input__inner{
              height: 30px;
            }
          }
        }
      }
    }
    .main-content{
      .footer {
        @include font-thin;
        .header-info{
          ul{
            margin: 30px 0;
            border: 1px solid #E4E4E4;
            border-bottom: none;
            .header,
            .footer{
              > span{
                box-sizing: border-box;
                display: inline-block;
                padding-left: 20px;
                border-right: 1px solid #E4E4E4;;
                border-bottom: 1px solid #E4E4E4;
                .el-input__inner{
                  height: 30px;
                }
              }
              span:nth-child(1){
                width: 9.9%;
              }
              span:nth-child(2){
                width: 24.9%;
                div{
                  display: inline-block;
                  width: 50px;
                }
              }
              span:nth-child(3){
                width: 29.9%;
                div{
                  display: inline-block;
                  width: 80px;
                  .el-input__inner{
                    padding-right: 0;
                    padding-left: 15px;
                    text-align: center;
                  }
                }
              }
              span:nth-child(4){
                width: 34.9%;
                border-right: none;
                div{
                  display: inline-block;
                  width: 50px;
                }
              }
            }
            .header{
              background-color: #F5F5F5;
              span{
                height: 45px;
                line-height: 45px;
                @include font-wide;
              }
            }
            .footer{
              span{
                height: 50px;
                line-height: 50px;
                @include font-thin;
              }
            }
          }
        }
      }
    }
    .main-footer{
      .header{
        ul{
          margin: 30px 0;
          border: 1px solid #E4E4E4;
          border-bottom: none;
          li{
            > span{
              display: inline-block;
              height: 50px;
              line-height: 50px;
              box-sizing: border-box;
              padding-left: 20px;
              border-right: 1px solid #E4E4E4;;
              border-bottom: 1px solid #E4E4E4;
              @include font-thin;
              .el-input__inner{
                height: 30px;
                padding: 0;
                text-align: center;
              }
              div{
                display: inline-block;
                width: 50px;
              }
            }
            span:nth-child(1){
              width: 33%;
            }
            span:nth-child(2){
              width: 67%;
            }
          }
        }
      }
    }
  }
}

</style>
