/**
 * 商城Vuex-mutations
 */
export default {
  // 设置顶部标题显示内容
  setTopTitle (state, topTitle) {
    state.topTitle = topTitle
  },
  // 设置面包屑
  setCrumbs (state, crumbs) {
    // 默认菜单级别为0

    if (crumbs.children) {
      // 有子菜单走这里
      if (crumbs.childTitle) {
        state.crumbs.push(crumbs)
      } else {
        state.crumbs.length = 0
        state.crumbs.push(crumbs)
      }
    } else {
      // 没有子菜单走这里
      state.crumbs[1] = crumbs
    }
  },
  setNavTopCrumbs (state, index) {
    if (index !== undefined) {
      state.crumbs = state.crumbs.splice(0, index + 1)
    } else {
      state.crumbs = []
    }
  }
}
