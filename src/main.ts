import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

// Import Quasar libraries
import { Quasar, Notify } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './assets/scss/main.scss'

// // Import Components
// import dayjs from './config/dayjs'

const app = createApp(App)
const pinia = createPinia()

// Components


pinia.use(piniaPluginPersistedstate)

app.use(pinia)
  .use(router)
  .use(Quasar, {
    plugins: {
      Notify,
    }, // import Quasar plugins and add here
  })
  .mount('#app')
