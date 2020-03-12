<template>
  <div>
    <system-header></system-header>
    <div class="system-main">
      <header>
        <el-button type="primary" icon="el-icon-plus" size="small"
          >发布公告</el-button
        >
        <el-button icon="el-icon-menu" size="small">分类管理</el-button>
      </header>
      <!-- 表格 -->
      <div class="system-main-teble">
        <el-table
          border
          ref="multipleTable"
          :data="
            tableData.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            )
          "
          tooltip-effect="dark"
          style="width: 100%"
          :header-cell-style="{ background: '#f6f6f6' }"
          :row-class-name="tableRowClassName"
        >
          <el-table-column type="selection"> </el-table-column>
          <af-table-column prop="title" label="公告标题"> </af-table-column>
          <af-table-column prop="name" label="发布人员"> </af-table-column>
          <af-table-column label="发布时间" prop="date"> </af-table-column>
          <af-table-column prop="column" label="所属栏目"> </af-table-column>
          <af-table-column prop="take" label="接受人员"> </af-table-column>
          <af-table-column prop="view" label="浏览人数"> </af-table-column>
          <af-table-column label="操作">
            <template>
              <a href="javascript:;"><span class="el-icon-info"></span>详情</a>
              <a href="javascript:;"
                ><span class="el-icon-delete-solid"></span>删除</a
              ></template
            >
          </af-table-column>
        </el-table>
        <div style="margin-top: 20px" class="clearfix">
          <div class="fl">
            <el-button @click="toggleSelection(tableData)">全选</el-button>
            <el-button @click="toggleSelection()">取消</el-button>
          </div>
          <div class="fr">
            <Pagination
              :totalNum="tableData.length"
              :currentPage="currentPage"
              :pageSize="pageSize"
              @sizeChange="sizeChange"
              @CurrentChange="CurrentChange"
            ></Pagination>
          </div>
        </div>
      </div>
      <!-- 表格end -->
    </div>
  </div>
</template>

<script>
import SystemHeader from './SystemHeader'
import Pagination from '../../../components/Pagination/Pagination'
import ApiPath from '@/api/ApiPath'
export default {
  name: 'StstemMain',
  data () {
    return {
      tableData: [{ operation: { details: '详情' } }],
      currentPage: 1, // 默认显示第一页
      pageSize: 10 // 默认每页显示10条
    }
  },
  created () {
    // 请求表格数据
    this.getSystemTableData()
  },
  methods: {
    // 请求表格数据的方法
    async getSystemTableData () {
      const data = await this.$http.get(ApiPath.system.getSystemTableData)
      this.tableData = data
    },
    // 设置表格的类名
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex % 2 !== 0) {
        return 'my-el-row'
      }
    },
    // 全选
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    // 分页组件传值
    sizeChange (val) {
      this.pageSize = val
    },
    CurrentChange (val) {
      this.currentPage = val
    }
  },
  components: {
    SystemHeader,
    Pagination
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
  /deep/.my-el-row {
    background-color: #f6f6f6;
  }
  .el-table .cell {
    display: flex;
    a {
      flex: 1;
    }
  }
}
</style>
