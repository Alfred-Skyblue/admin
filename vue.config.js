module.exports = {
  // 配置路径别名
  configureWebpack: {
    resolve: {
      alias: {
        Page: '@/page',
        Components: '@/components'
      }
    }
  }
}
