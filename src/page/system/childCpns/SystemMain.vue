<template>
  <div>

    <div class="system-main">
      <header>
        <el-button type="primary"
                   icon="el-icon-plus"
                   size="small"
                   @click="handleIssue">发布公告</el-button>
        <el-button icon="el-icon-menu"
                   size="small">分类管理</el-button>
      </header>
      <!-- 表格 -->
      <div class="system-main-teble">
        <el-table border
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
                  :row-class-name="tableRowClassName">
          <el-table-column type="selection"> </el-table-column>
          <af-table-column prop="title"
                           label="公告标题"> </af-table-column>
          <af-table-column prop="name"
                           label="发布人员"> </af-table-column>
          <af-table-column label="发布时间"
                           prop="date"> </af-table-column>
          <af-table-column prop="column"
                           label="所属栏目"> </af-table-column>
          <af-table-column prop="take"
                           label="接受人员"> </af-table-column>
          <af-table-column prop="view"
                           label="浏览人数"> </af-table-column>
          <af-table-column label="操作"
          prop="id">
            <template slot-scope="scope">
              <a href="javascript:;"><span class="el-icon-info"></span>详情</a>
              <a href="javascript:;" @click="deleteTableData(scope.row.id)"><span class="el-icon-delete-solid"></span>删除</a>
              </template>
          </af-table-column>
        </el-table>
        <div style="margin-top: 20px"
             class="clearfix">
          <div class="fl">
            <el-button @click="toggleSelection(tableData)">全选</el-button>
            <el-button @click="toggleSelection()">取消</el-button>
          </div>
          <div class="fr">
            <Pagination :totalNum="tableData.length"
                        :currentPage="currentPage"
                        :pageSize="pageSize"
                        @sizeChange="sizeChange"
                        @CurrentChange="CurrentChange"></Pagination>
          </div>
        </div>
      </div>
      <!-- 表格end -->
    </div>
  </div>
</template>

<script>
import Pagination from '../../../components/Pagination/Pagination'
export default {
  name: 'StstemMain',
  props: {
    tableData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentPage: 1, // 默认显示第一页
      pageSize: 10 // 默认每页显示10条
    }
  },

  methods: {
    // 请求表格数据的方法

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
    },

    deleteTableData (id) {
      this.tableData = this.tableData.filter((item) => item.id !== id)
    },
    handleIssue () {
      this.$emit('dialogFormChange', true)
    },
    handlefilter () {
      this.$emit('handlefilter')
    }
  },
  components: {
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
