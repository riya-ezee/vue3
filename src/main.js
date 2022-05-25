import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import BaseInputField from '@/components/core/BaseInputField.vue'
import BaseButton from '@/components/core/BaseButton.vue'
import InfoBox from '@/components/core/InfoBox.vue'
import InfoHeader from '@/components/core/InfoHeader.vue'

const app = createApp(App)

app.use(router)
app.component('BaseInputField', BaseInputField)
app.component('BaseButton', BaseButton)
app.component('InfoBox', InfoBox)
app.component('InfoHeader', InfoHeader)
app.mount('#app')
