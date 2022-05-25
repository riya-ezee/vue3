
<template>
  <h1 class="text-white font-bold text-xl">Login</h1>

  <form class="w-full mt-4 text-gray-800">
    <div  class="flex flex-col items-center">
      <BaseInputField  placeholder="Email ID" v-model="loginData.emailId" class="placeholder-gray-500 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-8/12" id="Email ID"/>
      <BaseInputField type="password"  placeholder="Password" v-model="loginData.password" class="placeholder-gray-500 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-8/12" id="Password"/>
      <BaseButton @click.prevent="login()" class="bg-blue-600 text-white rounded-lg mt-4 py-2 px-4 w-8/12">submit</BaseButton>
      <!-- <input type="text" v-model="loginData.emailId" placeholder="Email ID" class="placeholder-gray-500 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-8/12" id="Email ID">
      <input type="text" v-model="loginData.password" placeholder="Password" class="placeholder-gray-500 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-8/12" id="Password"> -->
      <!-- <button class="bg-blue-600 text-white rounded-lg mt-4 py-2 px-4 w-8/12" @click.prevent="login()">Login</button> -->
    </div>

  </form>

  <h4 class="text-white mt-5">Don't have an account ? <a class="text-blue-500" @click="this.$router.push('/registration')">Sign up</a></h4>

</template>

<script>
import useLogin from '../composables/useLogin.js'
export default {
  setup () {
    const { loginData, login } = useLogin()

    return {
      loginData,
      login
    }
  }

}
</script>
