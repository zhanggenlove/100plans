<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Sun, Moon, Monitor } from 'lucide-vue-next'
import { useAppStore, type ThemeMode } from '@/stores/app'

const { t } = useI18n()
const appStore = useAppStore()
const open = ref(false)

const modes: { mode: ThemeMode; icon: typeof Sun; labelKey: string }[] = [
  { mode: 'light', icon: Sun, labelKey: 'theme.light' },
  { mode: 'dark', icon: Moon, labelKey: 'theme.dark' },
  { mode: 'system', icon: Monitor, labelKey: 'theme.system' },
]

const currentIcon = computed(() => {
  const m = modes.find((m) => m.mode === appStore.themeMode)
  return m?.icon ?? Monitor
})

function closeMenu() {
  setTimeout(() => (open.value = false), 150)
}

function selectTheme(mode: ThemeMode) {
  open.value = false
  appStore.setTheme(mode)
}
</script>

<template>
  <div class="relative">
    <button
      class="flex items-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
      @click="open = !open"
      @blur="closeMenu"
    >
      <component :is="currentIcon" class="h-4 w-4" />
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
          v-for="m in modes"
          :key="m.mode"
          class="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors"
          :class="
            appStore.themeMode === m.mode
              ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
              : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
          "
          @mousedown.prevent="selectTheme(m.mode)"
        >
          <component :is="m.icon" class="h-4 w-4" />
          {{ t(m.labelKey) }}
        </button>
      </div>
    </Transition>
  </div>
</template>
