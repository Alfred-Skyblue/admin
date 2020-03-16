<template>
  <div>
    <div class="my-organization-main">
      <header>
        <el-button type="primary"
                   icon="el-icon-plus"
                   size="small"
                   @click="addSection">新增部门</el-button>
        <el-link icon="el-icon-question"
                 class="my-organization-main-help"
                 @click="$message.error('功能正在研发中')">帮助提示</el-link>
      </header>
      <!-- 表格 -->
      <div class="my-organization-main-teble">
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
          <el-table-column min-width=100
                           prop="department"
                           label="部门名称"> </el-table-column>
          <el-table-column label="成员数量"
                           prop="memberNum"> </el-table-column>
          <el-table-column prop="name"
                           label="负责人员"> </el-table-column>

          <el-table-column min-width=150
                           prop="departmentInfo"
                           label="部门描述"> </el-table-column>
          <el-table-column label="启用">
            <template scope="scope">
              <el-switch v-model="scope.row.switch">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="date"
                           label="更新时间"> </el-table-column>
          <el-table-column label="操作"
                           min-width=100>
            <template slot-scope="scope">
              <a href="javascript:;" @click="$message.error('功能正在研发中')"><span class="el-icon-info"></span>详情</a>
              <a href="javascript:;"
                 @click="deleteTableData(scope.row.id)"><span class="el-icon-delete-solid"></span>删除</a>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px"
             class="clearfix">

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
  name: 'OrganizationMain',
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
      pageSize: 20 // 默认每页显示10条
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
      this.$emit('deleteTableData', id)
    },
    addSection () {
      this.$emit('dialogSectionChange', true)
    }
  },
  components: {
    Pagination
  }
}
</script>

<style lang="scss" scoped>
.my-organization-main {
  height: 1150px;
  box-sizing: border-box;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  header {
    margin-bottom: 15px;
    .my-organization-main-help {
      margin-left: 10px;
    }
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
