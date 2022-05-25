import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import DashboardLayout from '@/layouts/Dashbordlayout'
import LoginLayout from '@/layouts/LoginLayout'
import BaseInputField from '@/components/core/BaseInputField/BaseInputField.vue'
import BaseButton from '@/components/core/BaseButton/BaseButton.vue'

// createApp(App).use(store).use(router).mount('#app')
// App.component('DashboardLayout', DashboardLayout)

const app = createApp(App)

app.component('DashboardLayout', DashboardLayout) // global registration - can be used anywhere
app.component('LoginLayout', LoginLayout)
app.component('BaseInputField', BaseInputField)
app.component('BaseButton', BaseButton)
app.use(store)
app.use(router)
app.mount('#app')
