<template>
  <div class="received">
    <main>
      <div class="on-off">
        <span class="body-titiel">审批开关:</span>
        <el-switch
          v-model="value"
          active-color="#0079fe"
          inactive-color="#ff4949">
        </el-switch>
        <p>1、关闭审批后，系统将自动通过所有未审批完成的订单回款；</p>
        <p>2、关闭审批后，使用审批通过时间的业绩指标将无法正常统计；</p>
      </div>
      <div class="body-content">
        <span class="body-titiel body-titiel-put">审批设置:</span>
        <ul>
          <el-checkbox-group v-model="checkList">
            <li>
                <el-checkbox :label="0">负责人主管</el-checkbox>
            </li>
            <li>
                <el-checkbox :label="1">指定用户(任意一人)</el-checkbox>
                <div class="name-list">
                <span class="staff-name" v-for="item of nameList" :key="item.id">
                {{item.name}}
                <i class="el-icon-close" @click="delClick(index, index1)"></i></span>
                <span class="add el-icon-s-custom" @click="addClick(index)" value-key='index'></span>
              </div>
            </li>
          </el-checkbox-group>
        </ul>
      </div>
      <div class="approval-font">
        <p>1、当选择“负责人主管”审批时。系统仅会通知负责人主管，但负责人所有上级（主管、主管的主管）均可审批。</p>
        <p>2、当选择多个“指定用户”审批时。如果指定用户没有权限查看对应的订单，系统不会通知其审批。</p>
        <p>3、当选择“指定用户（任意一人）”表示指定用户中任意一人审批即可。当选择“指定用户（多人会签）”表示指定用户中所有人都要审批。</p>
      </div>
    </main>
    <business-footer></business-footer>
  </div>
</template>

<script>
import BusinessFooter from '../BusinessFooter'
export default {
  name: 'received',
  data () {
    return {
      value: true,
      radio: 1,
      checkList: [],
      nameList: [
        {
          id: 1,
          name: '李小明'
        },
        {
          id: 2,
          name: '李小明'
        }
      ]
    }
  },
  components: {
    BusinessFooter
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/mixin.scss';
.received{
  main{
    @include on-off;
  @include business-more-main;
    padding-left: 120px;
    .body-titiel{
    position: absolute;
    left: -80px;
    @include font-thin
    }
    .body-titiel-put{
      top: 14px;
    }
    .body-content{
      position: relative;
      ul{
        border: 1px solid #E4E4E4;
        li{
          box-sizing: border-box;
          @include font-thin;
          padding-left: 15px;
          border-bottom: 1px solid #E4E4E4;
          height: 50px;
          line-height: 50px;
        }
        li:last-child{
          border-bottom: none;
        }
        .name-list{
          position: relative;
          display: inline-block;
          width: 600px;
          height: 35px;
          line-height: 35px;
          margin-left: 20px;
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
    }
    @include approval-info;
  }
}

</style>
