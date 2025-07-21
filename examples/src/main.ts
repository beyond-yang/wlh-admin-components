import { createApp } from 'vue'
import './style.css'
// import WliAdminComponents from '@wli-admin-components/core'
import '@wli-admin-components/core/dist/wlh-admin-components.css'
import App from './App.vue'

const app = createApp(App)
// app.use(WliAdminComponents)
app.mount('#app')
