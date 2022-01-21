import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    logged: false,
    userName:"",
    userType:"",
  },
  mutations: {
    logout(state){state.logged = false},
    login(state){state.logged = true},
  },
  getters: {
    logged: function (state) {
      return state.logged;
    },
  }
})

export default store
