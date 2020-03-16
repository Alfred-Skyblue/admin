<template>
<div>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <span>
    请输入新增员工名字：
    <el-input v-model="input" placeholder="请输入内容" autofocus></el-input>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button
      @click="delInput">取 消</el-button>
      <el-button type="primary"
      @click="setInput">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
import ApiPath from '@/api/ApiPath'
export default {
  name: 'BusinessDialog',
  props: {
    contentIndex: String
  },
  data () {
    return {
      // 新增员工名字
      input: '',
      dialogVisible: false,
      // 员工表格
      nameList: []
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认取消？')
        .then(_ => {
          console.log(111)
          done()
        })
        .catch(_ => {
          console.log(123)
        })
    },
    // 获取员工列表
    async getBusinessList () {
      this.nameList = await this.$http.get(ApiPath.business.getBusinessList)
      console.log(this.nameList)
    },
    // 取消添加
    delInput () {
      this.input = null
      this.dialogVisible1(false)
      this.$emit('dialogVisible1', false)
      this.$message('取消添加')
    },
    dialogVisible1 (flag) {
      this.dialogVisible = flag
    },
    // 添加员工
    setInput () {
      // 名字不能为空
      if (!this.input) return this.$message.error('员工名字不能为空')
      // 设置sum值
      let sum = 0
      // 判断是否存在该员工
      for (let i = 0; i < this.nameList.length; i++) {
        if (this.nameList[i].name !== this.input) {
          sum++
          if (sum >= this.nameList.length) {
            // 不存在返回
            return this.$message.error('该员工不存在')
          }
        }
      }
      // 关闭dia
      this.dialogVisible1(false)
      this.$emit('setInput', this.input)
      this.input = null
      return this.$message.success('添加成功')
    }
  },
  mounted () {
    this.getBusinessList()
  }
}
</script>

<style lang="scss"></style>
