import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export type ThemeMode = 'light' | 'dark' | 'system'

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(resolved: 'light' | 'dark') {
  document.documentElement.classList.toggle('dark', resolved === 'dark')
}

export const useAppStore = defineStore('app', () => {
  const saved = localStorage.getItem('theme') as ThemeMode | null
  const themeMode = ref<ThemeMode>(saved ?? 'system')

  function resolveTheme(): 'light' | 'dark' {
    return themeMode.value === 'system' ? getSystemTheme() : themeMode.value
  }

  function setTheme(mode: ThemeMode) {
    themeMode.value = mode
    localStorage.setItem('theme', mode)
    applyTheme(resolveTheme())
  }

  function initTheme() {
    applyTheme(resolveTheme())
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (themeMode.value === 'system') {
        applyTheme(getSystemTheme())
      }
    })
  }

  watch(themeMode, () => applyTheme(resolveTheme()))

  return { themeMode, setTheme, initTheme, resolveTheme }
})
