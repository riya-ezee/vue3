import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default function useRegistartion () {
  const router = useRouter()
  const RegistrationData = reactive({
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    confirmPassword: ''
  })

  function registerUser () {
    const users = JSON.parse(localStorage.getItem('USER_INFO'))

    if (users && users.length > 0) {
      users.push(RegistrationData)
      localStorage.setItem('USER_INFO', JSON.stringify(users))
    } else {
      localStorage.setItem('USER_INFO', JSON.stringify([RegistrationData]))
    }

    router.push('/login')
  }

  return {
    RegistrationData,
    registerUser
  }
}
