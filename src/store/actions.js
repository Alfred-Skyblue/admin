
export default {
  // 设置顶部标题显示内容
  setTopTitle (context, topTitle) {
    context.commit('setTopTitle', topTitle)
  },
  // 设置面包屑
  setCrumbs (context, crumbs) {
    context.commit('setCrumbs', crumbs)
  },

  setNavTopCrumbs (context, index) {
    context.commit('setNavTopCrumbs', index)
  }
}
