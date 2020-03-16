<template>
  <div>
    <system-content>
      <system-header @filter="handlefilter"></system-header>
      <system-main @dialogFormChange="dialogFormChange"
                   :tableData="tableData"
                   @handlefilter="handlefilter"></system-main>
      <system-dialog :dialogFormVisible="dialogFormVisible"
                     @dialogFormChange="dialogFormChange"
                     @addaddTableData="addaddTableData"></system-dialog>
    </system-content>

  </div>
</template>

<script>
import SystemMain from './childCpns/SystemMain'
import SystemContent from './childCpns/SystemContent'
import SystemDialog from './childCpns/SystemDialog'
import SystemHeader from './childCpns/SystemHeader'

import ApiPath from '@/api/ApiPath'

export default {
  name: 'system',
  data: function () {
    return {
      dialogFormVisible: false,
      tableData: []
    }
  },
  created () {
    // 请求表格数据
    this.getSystemTableData()
  },
  components: {
    SystemMain,
    SystemContent,
    SystemDialog,
    SystemHeader
  },
  methods: {
    dialogFormChange (flag) {
      this.dialogFormVisible = flag
    },
    async getSystemTableData () {
      const data = await this.$http.get(ApiPath.system.getSystemTableData)
      this.tableData = data
    },
    handlefilter (henderInfo, time, staff) {
      // 通过数组的 filter 方法实现筛选功能
      if (henderInfo) {
        this.tableData = this.tableData.filter(
          item => item.title === henderInfo
        )
      }
      if (time) {
        this.tableData = this.tableData.filter(item => item.date === time)
      }
      if (staff) {
        this.tableData = this.tableData.filter(item => item.name === staff)
      }
      if (!henderInfo && !time && !staff) {
        this.getSystemTableData()
      }
    },
    // 添加公告
    addaddTableData (item) {
      const formItem = item
      formItem.date = this.getNowFormatDate()
      formItem.view = this.random(1, 800)
      formItem.id = this.tableData.length + 1
      this.tableData.unshift(formItem)
    },
    // 获取当前日期
    getNowFormatDate () {
      var date = new Date()
      var seperator1 = '-'
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate
      return currentdate
    },
    // 获取随机整数
    random (min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
