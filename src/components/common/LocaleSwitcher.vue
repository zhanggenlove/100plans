<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { Globe } from 'lucide-vue-next'

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()
const open = ref(false)

const locales = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '简体中文' },
  { code: 'ja', label: '日本語' },
]

function closeMenu() {
  setTimeout(() => (open.value = false), 150)
}

function switchLocale(code: string) {
  open.value = false
  const newPath = route.path.replace(`/${locale.value}`, `/${code}`)
  router.push(newPath)
}
</script>

<template>
  <div class="relative">
    <button
      class="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
      @click="open = !open"
      @blur="closeMenu"
    >
      <Globe class="h-4 w-4" />
      <span class="hidden sm:inline">{{ locales.find((l) => l.code === locale)?.label }}</span>
    </button>
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <div
        v-if="open"
        class="absolute right-0 top-full z-50 mt-2 w-36 origin-top-right rounded-xl border border-slate-200 bg-white/90 p-1 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/90"
      >
        <button
          v-for="l in locales"
          :key="l.code"
          class="flex w-full items-center rounded-lg px-3 py-2 text-sm transition-colors"
          :class="
            locale === l.code
              ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
              : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
          "
          @mousedown.prevent="switchLocale(l.code)"
        >
          {{ l.label }}
        </button>
      </div>
    </Transition>
  </div>
</template>
