<template>
  <div>
    <!-- 系统公告头部 -->

    <el-row class="system-header">
      <el-col :span="24">
        <header class="grid-content">
          <div class="system-content">
            <header>
              <el-row :gutter="10">
                <el-col :xs="4"
                        :sm="4"
                        :md="4"
                        :lg="4"
                        :xl="4">
                  <div class="grid-content bg-purple">
                    <el-input v-model="henderInfo"
                              placeholder="请输入内容"
                              :style="style"></el-input>
                  </div>
                </el-col>
                <el-col :xs="4"
                        :sm="4"
                        :md="4"
                        :lg="4"
                        :xl="4">
                  <el-date-picker type="date"
                  v-model="time"
                  value-format="yyyy-MM-dd"
                                  placeholder="发布时间">
                  </el-date-picker>
                </el-col>
                <el-col :xs="4"
                        :sm="4"
                        :md="4"
                        :lg="4"
                        :xl="4">
                  <div class="grid-content bg-purple">
                    <el-select v-model="value"
                               placeholder="选择栏目">
                      <el-option v-for="item in options"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                </el-col>
                <el-col :xs="4"
                        :sm="4"
                        :md="4"
                        :lg="4"
                        :xl="4">
                  <div class="grid-content bg-purple">
                    <el-input placeholder="发布人员"
                              suffix-icon="el-icon-user-solid"
                              v-model="staff"
                              :style="style">
                    </el-input>
                  </div>
                </el-col>

                <el-col :xs="8"
                        :sm="8"
                        :md="8"
                        :lg="8"
                        :xl="8">
                  <div class="grid-content">
                    <div class="grid-content my-header-button">
                      <el-button type="primary" @click="handleSystemSearch"><span class="el-icon-search"></span>搜索</el-button>
                      <el-button type="info"
                                 plain
                                 @click="handleReset">重置</el-button>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </header>
          </div>
        </header>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SystemHeader',
  data () {
    return {
      henderInfo: '',
      time: '',
      staff: '',
      style: {
        minWidth: '110px',
        marginRight: '5px'
      },
      options: [{
        value: '选项1',
        label: '马拉松'
      }, {
        value: '选项2',
        label: '山地越野'
      }, {
        value: '选项3',
        label: '铁人三项'
      }, {
        value: '选项4',
        label: '游泳'
      }],
      value: ''
    }
  },
  methods: {
    handleSystemSearch () { // 搜索逻辑
      this.$emit('filter', this.henderInfo, this.time, this.staff)
    },
    handleReset () { // 重置逻辑
      this.henderInfo = this.time = this.staff = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.system-header {
  border: 1px solid #ccc;
  padding: 30px 20px;
  margin-bottom: 16px;
  background-color: #fff;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .my-header-button {
    button {
      width: 90px;
      margin-left: 10px;
      text-align: center;
    }
  }
  /deep/ .el-input__inner {
    min-width: 120px !important;
    padding-right: 0 !important;
  }
  /deep/ .el-date-editor.el-input {
    width: 100%;
  }
}
</style>
