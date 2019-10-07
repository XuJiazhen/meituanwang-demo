export const state = () => ({
  hotPlace: []
})

export const mutations = {
  setHotPlace(state, hotPlace) {
    state.hotPlace = hotPlace
  }
}
export const actions = {
  setHotPlace: ({ commit }, hotPlace) => {
    commit('setHotPlace', hotPlace)
  }
}
