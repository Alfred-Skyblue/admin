<template>
  <div class="business-cnki">
    <header>
      <i class="el-icon-edit-outline"></i>
      <span>查重设置</span>
    </header>
    <main>
      <p class="header-title">提示：查重设置用于在新增或编辑相关字段时对数据做唯一性检测，有任意字段重复均算重复， 所有数据均在全公司范围内查重。</p>
      <div class="business-cnki-body" v-for="(item1, index) of cnkiList" :key="index">
        <div class="body-title">
          {{item1.title}}
        </div>
        <ul class="approval-pass-ulst">
          <li>
            <span class="left">字段名称</span>
            <span class="right">选择</span>
          </li>
          <li v-for="(item ,index) of List" :key="index">
            <span class="left">{{item}}</span>
            <span class="right">
              <el-checkbox-group v-model="item1.checkList">
                <el-checkbox :label="index">{{ sumn }}</el-checkbox>
              </el-checkbox-group>
            </span>
          </li>
        </ul>
      </div>
    </main>
    <business-footer></business-footer>
  </div>
</template>

<script>
import BusinessFooter from './BusinessFooter'
export default {
  name: 'BusinessCnki',
  data () {
    return {
      sumn: null,
      List: [
        '客户名称',
        '手机号码',
        '固定电话',
        '传真号码',
        '邮箱地址',
        '电子邮箱',
        '微信账号',
        'QQ号码'
      ],
      cnkiList: [
        {
          title: '线索查重字段',
          checkList: []
        },
        {
          title: '客户查重字段',
          checkList: []
        },
        {
          title: '联系人查重字段',
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
.business-cnki{
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
    .header-title{
      @include font-thin;
      height: 40px;
      line-height: 40px;
      margin-top: 10px;
    }
    .body-title{
      @include border-left
    }
    .business-cnki-body{
      @include business-list
    }
  }

}

</style>
