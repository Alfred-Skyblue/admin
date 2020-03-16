<template>
  <div>
    enterprise
    <Card>

    </Card>
    <div>
    <Content :styleContent="styleContent"> <div slot="head">1</div><div slot="body">2</div></Content>

    </div>
  </div>
</template>

<script>
import Card from 'Components/Content/Card'
import Content from 'Components/Content/Content'
export default {
  name: 'enterprise',
  components: {
    Card,
    Content
  },
  data () {
    return {
      styleContent: { width: '200px' }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
