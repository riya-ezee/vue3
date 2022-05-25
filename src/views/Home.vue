<template>
  <div class="home">
    <button @click="logout()">Logout</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import { useRouter } from 'vue-router'
import store from '../store'
export default {
  name: 'Home',

  components: {
    HelloWorld
  },
  setup () {
    const router = useRouter()
    function logout () {
      localStorage.removeItem('isAuth')
      localStorage.removeItem('LOGIN_USER_INFO')
      store.commit('logout')
      router.push('/login')
    }

    return {
      logout
    }
  }
}
</script>
