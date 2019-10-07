export const state = () => ({
  menu: []
})

export const mutations = {
  setMenu(state, menu) {
    state.menu = menu
  }
}
export const actions = {
  setMenu: ({ commit }, menu) => {
    commit('setMenu', menu)
  }
}
