import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import store from '../store'

export default function useLogin () {
  const router = useRouter()
  const loginData = reactive({
    emailId: '',
    password: ''
  })

  function login () {
    store.commit('test', loginData)
    if (store.getters.loginInfo) {
      localStorage.setItem('isAuth', true)
      store.commit('login')
      console.log(store.state)
      router.push('/')
    }
  }

  return {
    loginData,
    login
  }
}
