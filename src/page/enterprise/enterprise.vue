<template>
  <div>
        <Title slot="hd"></Title>

    <Content>
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

</style>
