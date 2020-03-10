<template>
  <div>
    <!-- 系统公告头部 -->

    <el-row class="system-header">
      <el-col :span="20">
        <header class="grid-content">
          <div class="system-content">
            <header>
              <el-row :gutter="10">
                <el-col :span="4">
                  <div class="grid-content bg-purple">
                    <el-input v-model="henderInfo"
                              placeholder="请输入内容"
                              :style="style"></el-input>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple">
                    <el-input placeholder="发布时间"
                              suffix-icon="el-icon-date"
                              v-model="time"
                              :style="style">
                    </el-input>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple">
                    <el-input placeholder="选择栏目"
                              suffix-icon="el-icon-arrow-down"
                              v-model="column"
                              :style="style">
                    </el-input>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple">
                    <el-input placeholder="发布人员"
                              suffix-icon="el-icon-user-solid"
                              v-model="column"
                              :style="style">
                    </el-input>
                  </div>
                </el-col>

                <el-col :span="8">
                  <div class="grid-content">
                    <div class="grid-content my-header-button">
                      <el-button type="primary"><span class="el-icon-search"></span>搜索</el-button>
                      <el-button type="info"
                                 plain>重置</el-button>
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
      column: '',
      style: {
        minWidth: '110px',
        marginRight: '5px'
      }
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
  .el-input__inner {
    min-width: 120px !important;
  }
}
</style>
