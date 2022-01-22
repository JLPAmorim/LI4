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
    setUserName(state, name){state.userName = name},
    setUserType(state, type){state.userType = type}
  },
  getters: {
    logged: function (state) {
      return state.logged;
    },
  }
})

export default store
