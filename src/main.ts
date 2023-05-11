import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { messages } from './locales/messages'

const i18n = createI18n({
  locale: 'ptbr', // set the initial locale
  fallbackLocale: 'en', // set the fallback locale
  messages, // set the messages for each locale
})

const app = createApp(App)

// set the i18n instance on the app
app.use(i18n)

app.mount('#app')
