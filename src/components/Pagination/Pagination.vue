<template>
  <div>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      layout="prev, pager, next"
      :total="totalNum"
      :page-size="pageSize"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  // 分页组件
  name: 'Pagination',
  props: {
    // 总条数
    totalNum: {
      type: Number,
      default () {
        return 10
      }
    },
    // 当前页
    currentPage: {
      type: Number,
      default () {
        return 1
      }
    },
    // 每页显示个数
    pageSize: {
      type: Number,
      default () {
        return 10
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
      this.pageSize = val // 动态改变
      this.$emit('sizeChange', val)
    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`)
      this.$emit('CurrentChange', val)
    }
  }
}
</script>

<style lang="scss" scoped></style>
