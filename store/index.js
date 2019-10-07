export const actions = {
  async nuxtServerInit({ commit }, { req, app }) {
    // 获取并向 Vuex 中写入当前城市
    const {
      status: statusP,
      data: { province, city }
    } = await this.$axios.get('/geo/getPosition')
    commit(
      'geo/setPosition',
      statusP === 200
        ? {
            province,
            city
          }
        : {
            province: '',
            city: ''
          }
    )
    // 获取并向 Vuex 中写入菜单
    const {
      status: statusM,
      data: { menu }
    } = await this.$axios.get('/geo/menu')
    commit('menu/setMenu', statusM === 200 ? menu : [])
    // 获取并向 Vuex 中写入热门景点
    const {
      status: statusH,
      data: { result }
    } = await this.$axios.get('/search/hotPlace', {
      params: {
        city: app.store.state.geo.position.city.replace('市', '')
      }
    })
    commit('city/setHotPlace', statusH === 200 ? result : [])
  }
}
