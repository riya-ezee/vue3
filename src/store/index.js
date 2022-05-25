import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuth: localStorage.getItem('isAuth')
  },
  getters: {
    loginInfo (state) {
      return localStorage.getItem('LOGIN_USER_INFO')
    }
  },
  mutations: {
    test (state, payload) {
      const users = JSON.parse(localStorage.getItem('USER_INFO'))

      users.filter(function (user) {
        if (payload.emailId === user.emailId && payload.password === user.password) {
          localStorage.setItem('LOGIN_USER_INFO', JSON.stringify(user))
        }
      })
    },
    login (state) {
      state.isAuth = true
    },
    logout (state) {
      state.isAuth = false
    }
  },
  actions: {
  },
  modules: {
  }
})
