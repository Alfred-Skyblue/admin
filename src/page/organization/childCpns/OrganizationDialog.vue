<template>
  <div>
    <!-- Form -->

    <el-dialog title="新增部门"
               :visible.sync="dialogSection"
               :close-on-click-modal="false"
               :show-close="false"
               :close-on-press-escape="false"
               @open="handleopen">
      <el-form :model="form"
               ref="dialogSection">
        <el-form-item label="部门名称"
                      :label-width="formLabelWidth">
          <el-input v-model="form.department"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="成员数量"
                      :label-width="formLabelWidth">
          <el-input v-model.number="form.memberNum"
                    type="text"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="负责人员"
                      :label-width="formLabelWidth">
          <el-input v-model="form.name"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="部门描述"
                      :label-width="formLabelWidth">
          <el-input v-model="form.departmentInfo"
                    autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogSectionChange">取 消</el-button>
        <el-button type="primary"
                   @click="addTableData()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'OrganizationDialog',
  props: {
    dialogSection: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      form: {
        department: '',
        memberNum: null,
        name: '',
        departmentInfo: ''
      },
      formLabelWidth: '120px'
    }
  },

  methods: {
    dialogSectionChange () {
      this.$emit('dialogSectionChange', false)
      this.$message('未增加部门')
    },
    // 发布公告
    addTableData () {
      if (!this.form.department) return this.$message.error('部门名称不能为空')
      if (!this.form.memberNum) return this.$message.error('成员数量不能为空')
      if (typeof this.form.memberNum !== 'number') { return this.$message.error('成员数量只能输入数字类型') }
      if (!this.form.name) return this.$message.error('负责人不能为空')
      if (!this.form.departmentInfo) { return this.$message.error('部门描述不能为空') }
      // 触发父元素事件添加公告
      this.$emit('addaddTableData', this.deepClone(this.form))
      this.$emit('dialogSectionChange', false)
      this.$message.success(`成功添加${this.form.department}部门`)
    },
    // form 表单绑定的 value 都置为空
    handleopen () {
      for (const key in this.form) {
        this.form[key] = ''
      }
    },
    deepClone (obj = {}) {
      if (typeof obj !== 'object' || obj == null) {
        return obj
      }
      let result
      if (obj instanceof Array) {
        result = []
      } else {
        result = {}
      }

      for (const key in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(key)) {
          // TODO:手写深拷贝失误======>this.deepClone(key)
          result[key] = this.deepClone(obj[key])
        }
      }
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-input__inner {
  width: 80%;
}
/deep/ input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
