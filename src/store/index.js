import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentNavTitle: ['个人中心','个人中心'],
    user: {},
    isSpread: false
  },
  mutations: {
    setCurrentNavTitle(state, value) {
      state.currentNavTitle = value
    },
    setUser(state, value) {
      state.user = value
    },
    setSpread(state, value) {
      state.isSpread = value
    }
  },
  actions: {},
  getters: {}
})
