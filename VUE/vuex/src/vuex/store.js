import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    setTimeout(() => {
      state.count--
    }, 3000)
    console.log('同步')
  }
}

const actions = {
  addAction (context, status) {
    context.commit('add', status)
  },
  reduceAction ({commit}) {
    setTimeout(() => {
      commit('reduce')
    }, 3000)
    console.log('异步')
  }
}
const getters = {
  getcount: (state) => {
    return (state.count + 100)
  }
}
export default new Vuex.Store({// 抛出方法
  state,
  mutations,
  getters,
  actions
})
