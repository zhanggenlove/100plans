<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const show = ref(false)

function onScroll() {
  show.value = window.scrollY > 400
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-2 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-2 opacity-0"
  >
    <button
      v-show="show"
      @click="scrollToTop"
      aria-label="Back to top"
      class="fixed bottom-8 right-8 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-500 shadow-lg backdrop-blur-sm transition-colors hover:bg-white hover:text-slate-900 dark:border-slate-700/80 dark:bg-slate-800/90 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
    >
      <ArrowUp class="h-4.5 w-4.5" />
    </button>
  </Transition>
</template>
