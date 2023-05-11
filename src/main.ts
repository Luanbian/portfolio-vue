import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { messages } from './locales/messages'

const i18n = createI18n({
  locale: 'ptbr',
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages,
})

const app = createApp(App)

app.use(i18n)

app.mount('#app')
