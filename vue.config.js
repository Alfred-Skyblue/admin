
module.exports = {
  // 配置路径别名
  configureWebpack: {
    resolve: {
      alias: {
        Page: '@/page',
        Components: '@/components'
      }
    }
  },
  devServer: {
    host: 'localhost',
    port: 8080
    // proxy: {
    //   '/api': {
    //     target: 'http://axure-admin.cn',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '/api': ''
    //     }
    //   }
    // }
  }
}
