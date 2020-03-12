<template>
  <div>
    <Content>
      <div slot="hd" class="head clearfix">
        <div class="fl">
          <i class="el-icon-edit-outline"></i>
          <strong>企业信息</strong>
        </div>
        <div class="fr">
          为必填项
        </div>
      </div>
      <div slot="bd" class="content">
       <Title></Title>
      </div>
    </Content>

  </div>
</template>

<script>
import Content from 'Components/Content/Content'
import Title from 'Components/Content/Title'

export default {
  name: 'enterprise',
  components: {
    Content,
    Title
  }
}
</script>

<style lang="scss" scoped>

.head {
  font-size: 16px;
  color:#666;
  i {
    margin-right: 5px;
    font-size: 16px;
    font-weight: 700;
  }
  .fr {
  font-size: 14px;
  }
  .fr::before {
    content: '*';
    color:#f00;
  }
}
.content {
  margin: 20px auto;
  padding-left: 300px;
}
</style>
