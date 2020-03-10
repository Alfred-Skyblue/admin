<template>
  <div>
    <system-header></system-header>
    <div class="system-main">
      <header>
        <el-button type="primary"
                   icon="el-icon-plus"
                   size="small">发布公告</el-button>
        <el-button icon="el-icon-menu"
                   size="small">分类管理</el-button>
      </header>
      <!-- 表格 -->
      <div class="system-main-teble">
        <el-table border
                  ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%"
                  :header-cell-style="{background:'#f6f6f6'}"
                  :row-class-name="tableRowClassName">
          <af-table-column type="selection">
          </af-table-column>
          <af-table-column prop="title"
                           label="公告标题">
          </af-table-column>
          <af-table-column prop="name"
                           label="发布人员">
          </af-table-column>
          <af-table-column label="发布时间" prop="date">

          </af-table-column>
          <af-table-column prop="column"
                           label="所属栏目">
          </af-table-column>
          <af-table-column prop="take"
                           label="接受人员">
          </af-table-column>
          <af-table-column prop="view"
                           label="浏览人数">
          </af-table-column>
          <af-table-column label="操作">
            <template slot-scope="scope">
              <a href="javascript:;"><span class="el-icon-info"></span>{{scope.row.operation.details}}</a>
              <a href="javascript:;"><span class="el-icon-delete-solid"></span>{{scope.row.operation.delete}}</a></template>
          </af-table-column>

        </el-table>
      </div>
      <!-- 表格end -->
    </div>
  </div>
</template>

<script>
import SystemHeader from './SystemHeader'
import ApiPath from '@/api/ApiPath'
export default {
  name: 'StstemMain',
  data () {
    return {
      tableData: [

      ]
    }
  },
  mounted () {
    // 请求数据
    this.getSystemTableData()
  },
  methods: {
    async getSystemTableData () {
      await this.$http.get(ApiPath.system.getSystemTableData).then((res) => {
        this.tableData = res
      })
    },
    // 设置表格的类名
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex % 2 !== 0) {
        return 'my-el-row'
      }
    }
  },
  components: {
    SystemHeader
  }
}
</script>

<style lang="scss" scoped>
.system-main {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  header {
    margin-bottom: 15px;
  }
  /deep/.my-el-row{
    background-color:#f6f6f6;
  }
}
</style>
