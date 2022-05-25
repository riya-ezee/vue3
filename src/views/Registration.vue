<template>
  <h1 class="text-white font-bold text-xl">Create An account</h1>
  <form class="w-full mt-4 text-gray-800">
    <div class="flex flex-col items-center">
      <BaseInputField  placeholder="First Name" v-model="RegistrationData.firstName" class="placeholder-gray-500 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-8/12" />
      <BaseInputField  placeholder="last Name" v-model="RegistrationData.lastName" class="placeholder-gray-500 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-8/12" />
      <BaseInputField  placeholder="Email Id" v-model="RegistrationData.emailId" class="placeholder-gray-500 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-8/12" />
      <BaseInputField type="password" placeholder="Password" v-model="RegistrationData.password" class="placeholder-gray-500 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-8/12" />
      <BaseInputField type="password" placeholder="Confirm Password" v-model="RegistrationData.confirmPassword" class="placeholder-gray-500 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-8/12" />

      <button
        type="submit"
        class="bg-blue-600 text-white rounded-lg mt-4 py-2 px-4 w-8/12"
        @click.prevent="registerUser()"
      >
        Create account
      </button>
    </div>
  </form>
  <h4 class="text-white mt-5">
    Already have an account ?
    <router-link to="/login" class="text-blue-500">Login</router-link>
  </h4>
</template>

<script>
import useRegistration from '../composables/useRegistration.js'

export default {

  setup () {
    const { RegistrationData, registerUser } = useRegistration()

    return {
      RegistrationData,
      registerUser
    }
  }
}
</script>
