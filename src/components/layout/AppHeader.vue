<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Menu, X, Search } from 'lucide-vue-next'
import LocaleSwitcher from '@/components/common/LocaleSwitcher.vue'
import ThemeSwitcher from '@/components/common/ThemeSwitcher.vue'
import { useCommandPalette } from '@/composables/useCommandPalette'

const { t, locale } = useI18n()
const scrolled = ref(false)
const mobileOpen = ref(false)
const { open: openSearch } = useCommandPalette()
const isMac = typeof navigator !== 'undefined' && navigator.platform.toUpperCase().includes('MAC')

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    role="banner"
    class="fixed inset-x-0 top-0 z-50 transition-all duration-200"
    :class="
      scrolled
        ? 'border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800/60 dark:bg-[#0a0a0f]/80'
        : 'bg-transparent'
    "
  >
    <nav class="mx-auto flex h-14 max-w-6xl items-center justify-between px-6" aria-label="Main navigation">
      <router-link :to="`/${locale}`" class="text-base font-bold tracking-tight text-slate-900 dark:text-white">
        100Plans
      </router-link>

      <div class="hidden items-center gap-1 md:flex">
        <router-link
          :to="`/${locale}`"
          class="rounded-lg px-3 py-1.5 text-[13px] font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        >
          {{ t('nav.home') }}
        </router-link>
        <router-link
          :to="`/${locale}/about`"
          class="rounded-lg px-3 py-1.5 text-[13px] font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        >
          {{ t('nav.about') }}
        </router-link>
        <router-link
          :to="`/${locale}/blog`"
          class="rounded-lg px-3 py-1.5 text-[13px] font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        >
          {{ t('nav.blog') }}
        </router-link>
        <button
          @click="openSearch"
          class="ml-1 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50/80 px-2.5 py-1 text-[12px] text-slate-400 transition-colors hover:border-slate-300 hover:text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-500 dark:hover:border-slate-600 dark:hover:text-slate-300"
          aria-label="Search"
        >
          <Search class="h-3.5 w-3.5" />
          <kbd class="font-sans text-[11px]">{{ isMac ? '⌘' : 'Ctrl+' }}K</kbd>
        </button>
        <div class="mx-1.5 h-4 w-px bg-slate-200 dark:bg-slate-800" />
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>

      <button
        class="rounded-lg p-1.5 text-slate-500 md:hidden dark:text-slate-400"
        aria-label="Toggle mobile menu"
        :aria-expanded="mobileOpen"
        @click="mobileOpen = !mobileOpen"
      >
        <Menu v-if="!mobileOpen" class="h-5 w-5" />
        <X v-else class="h-5 w-5" />
      </button>
    </nav>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="-translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-1 opacity-0"
    >
      <div
        v-if="mobileOpen"
        class="border-b border-slate-200/60 bg-white/95 px-6 pb-4 backdrop-blur-xl md:hidden dark:border-slate-800/60 dark:bg-[#0a0a0f]/95"
      >
        <div class="flex flex-col gap-0.5">
          <router-link
            :to="`/${locale}`"
            class="rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-400"
            @click="mobileOpen = false"
          >
            {{ t('nav.home') }}
          </router-link>
          <router-link
            :to="`/${locale}/about`"
            class="rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-400"
            @click="mobileOpen = false"
          >
            {{ t('nav.about') }}
          </router-link>
          <router-link
            :to="`/${locale}/blog`"
            class="rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-400"
            @click="mobileOpen = false"
          >
            {{ t('nav.blog') }}
          </router-link>
          <div class="my-1 h-px bg-slate-100 dark:bg-slate-800" />
          <div class="flex items-center gap-2 px-3 py-1">
            <ThemeSwitcher />
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
