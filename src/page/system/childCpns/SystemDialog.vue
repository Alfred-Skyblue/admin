<template>
  <div>
    <!-- Form -->

    <el-dialog title="发布公告"
               :visible.sync="dialogFormVisible"
               :close-on-click-modal="false"
               :show-close="false"
               :close-on-press-escape="false"
               :closed="handleclose">
      <el-form :model="form">
        <el-form-item label="公告标题"
                      :label-width="formLabelWidth">
          <el-input v-model="form.title"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="发布人员"
                      :label-width="formLabelWidth">
          <el-input v-model="form.name"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属栏目"
                      :label-width="formLabelWidth">
          <el-input v-model="form.column"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="接受人员"
                      :label-width="formLabelWidth">
          <el-input v-model="form.take"
                    autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormChange">取 消</el-button>
        <el-button type="primary"
                   @click="addTableData" >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'SystemDialog',
  props: {
    dialogFormVisible: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      form: {
        title: '',
        name: '',
        column: '',
        take: ''
      },
      formLabelWidth: '120px'
    }
  },

  methods: {
    dialogFormChange () {
      this.$emit('dialogFormChange', false)
      this.$message('取消发布')
    },
    // 发布公告
    addTableData () {
      if (!this.form.title) return this.$message.error('公告标题不能为空')
      if (!this.form.name) return this.$message.error('发布人员不能为空')
      if (!this.form.column) return this.$message.error('所属栏目不能为空')
      if (!this.form.take) return this.$message.error('接受人员不能为空')
      // 触发父元素事件添加公告
      this.$emit('addaddTableData', this.form)
      this.$emit('dialogFormChange', false)
      this.$message.success('发布成功')
    },
    // form 表单绑定的 value 都置为空
    handleclose () {
      for (const key in this.form) {
        this.form[key] = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

/deep/ .el-input__inner{
  width: 80%;
}
</style>
