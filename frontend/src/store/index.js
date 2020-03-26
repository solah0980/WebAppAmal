import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  plugins:[createPersistedState({paths:['user','token','isLogedIn']})],
  state: {
    user:null,
    token:null,
    isLogedIn:false
  },
  mutations: {
    SetUser(state,playload){
      state.user = playload

    },
    SetToken(state,playload){
      state.token = playload
    },
    SetLogedIn(state,playload){
      state.isLogedIn = playload
    }
  },
  actions: {
    setUser({commit},user){
      commit('SetUser',user)
    },
    setToken({commit},token){
      commit('SetToken',token)
    },
    setLogedIn({commit},status){
      commit('SetLogedIn',status)
    }
  },
  modules: {
  }
})
