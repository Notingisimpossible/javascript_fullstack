import * as types from '../types'

const state = {
  showSidebar: false,
  searchHistory: ['123132','545445','断桥残雪']
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSidebar = status
  },
  [types.COM_SAVE_SEARCH_HISTORY] (state, status){
    state.searchHistory = status
  }
}

const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  },
  saveSearchHistory ({commit}, query) {
    let searchHistory = [query, ...state.searchHistory.slice()]
    searchHistory = [...new Set(searchHistory)]//Set方法去除重复搜索数据
    commit(types.COM_SAVE_SEARCH_HISTORY, searchHistory)
  }
}

const getters = {
  showSidebar: state => state.showSidebar,
  searchHistory: state =>state.searchHistory 
}

export default {
  state,
  getters,
  mutations,
  actions
}