import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import "./index.css"

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.use(vue3GoogleLogin, {
  clientId:
    "297794256889-07r06uomp9ljj7869c8ihlmea2li1p8b.apps.googleusercontent.com",
});

app.mount('#app')
