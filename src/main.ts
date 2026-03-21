import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import { useAppStore } from './stores/app'
import en from './locales/en'
import zh from './locales/zh'
import ja from './locales/ja'
import './style.css'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, zh, ja },
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(i18n)
app.use(router)

const appStore = useAppStore()
appStore.initTheme()

router.beforeEach((to) => {
  const locale = to.params.locale as string
  if (locale && ['en', 'zh', 'ja'].includes(locale)) {
    i18n.global.locale.value = locale as 'en' | 'zh' | 'ja'
    localStorage.setItem('locale', locale)
  }
})

app.mount('#app')
