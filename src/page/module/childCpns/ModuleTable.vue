<template>
  <div class="module-table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="moduleName" label="模块名称"> </el-table-column>
      <el-table-column prop="name" label="显示名称"> </el-table-column>
      <el-table-column prop="describe" label="模块描述"> </el-table-column>
      <el-table-column label="启用">
        <template scope="scope">
          <el-switch

            v-model="scope.row.switch"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <a href="javascript:;"><span class="el-icon-edit-outline"></span>编辑</a>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ApiPath from '@/api/ApiPath'
export default {
  name: 'ModuleTable',
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.getModuleTable()
  },
  methods: {
    async getModuleTable () {
      const data = await this.$http.get(
        ApiPath.moduleSupport.getModuleTableData
      )
      this.tableData = data
    }
  }
}
</script>

<style lang="scss" scoped></style>
