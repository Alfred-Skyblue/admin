<template>
  <div>
    <organization-content :styleContent="{marginLeft:'50px',minWidth:'1000px'}">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <organization-sidebar></organization-sidebar>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple">
            <organization-main :tableData="organizationTable"
                               @deleteTableData="deleteTableData"
                               @dialogSectionChange="dialogSectionChange"></organization-main>
          </div>
        </el-col>
      </el-row>

    </organization-content>
    <organization-dialog :dialogSection="dialogSection"
                         @dialogSectionChange="dialogSectionChange"
                         @addaddTableData="addaddTableData"></organization-dialog>
  </div>
</template>

<script>
import OrganizationSidebar from './childCpns/OrganizationSidebar'
import OrganizationContent from './childCpns/OrganizationContent'
import OrganizationMain from './childCpns/OrganizationMain'
import OrganizationDialog from './childCpns/OrganizationDialog'
import ApiPath from '@/api/ApiPath'
export default {
  name: 'organization',
  data () {
    return {
      organizationTable: [],
      dialogSection: false
    }
  },
  mounted () {
    this.getOrganizationTable()
  },
  methods: {
    async getOrganizationTable () {
      const data = await this.$http.get(
        ApiPath.organization.getOrganizationTable
      )
      this.organizationTable = data
      console.log(data)
    },
    deleteTableData (id) {
      this.organizationTable = this.organizationTable.filter(
        item => item.id !== id
      )
    },
    dialogSectionChange (flag) {
      this.dialogSection = flag
    },
    addaddTableData (item) {
      item.id = this.organizationTable.length + 1
      item.date = this.getNowFormatDate()
      item.switch = true
      this.organizationTable.unshift(item)
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
    }
  },
  components: {
    OrganizationSidebar,
    OrganizationContent,
    OrganizationMain,
    OrganizationDialog
  }
}
</script>

<style lang="scss" scoped>
</style>
