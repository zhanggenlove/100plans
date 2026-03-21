<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { Search, CornerDownLeft, ArrowUp, ArrowDown, FileText, AppWindow } from 'lucide-vue-next'
import { useCommandPalette } from '@/composables/useCommandPalette'

const { t } = useI18n()
const {
  isOpen,
  query,
  activeIndex,
  results,
  close,
  select,
} = useCommandPalette()

const inputRef = ref<HTMLInputElement | null>(null)
const listRef = ref<HTMLElement | null>(null)

watch(isOpen, (open) => {
  if (open) nextTick(() => inputRef.value?.focus())
})

watch(activeIndex, (idx) => {
  nextTick(() => {
    const el = listRef.value?.children[idx] as HTMLElement | undefined
    el?.scrollIntoView({ block: 'nearest' })
  })
})

</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[70] flex items-start justify-center bg-black/50 px-4 pt-[12vh] backdrop-blur-sm sm:pt-[15vh]"
        @click.self="close"
      >
        <Transition
          enter-active-class="transition duration-150 ease-out"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
          appear
        >
          <div class="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl dark:border-slate-700/80 dark:bg-slate-900">
            <!-- Search input -->
            <div class="flex items-center gap-3 border-b border-slate-100 px-4 dark:border-slate-800">
              <Search class="h-4.5 w-4.5 shrink-0 text-slate-400" />
              <input
                ref="inputRef"
                v-model="query"
                :placeholder="t('search.placeholder')"
                class="h-14 flex-1 bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
              />
              <kbd class="hidden rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[11px] font-medium text-slate-400 sm:inline-block dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500">
                ESC
              </kbd>
            </div>

            <!-- Results list -->
            <div ref="listRef" class="max-h-80 overflow-y-auto overscroll-contain p-2">
              <div
                v-if="results.length === 0"
                class="py-10 text-center text-sm text-slate-400 dark:text-slate-500"
              >
                {{ t('search.noResults') }}
              </div>

              <button
                v-for="(item, idx) in results"
                :key="item.id"
                class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors"
                :class="idx === activeIndex
                  ? 'bg-brand-50 text-brand-700 dark:bg-brand-600/10 dark:text-brand-300'
                  : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/60'"
                @click="select(item)"
                @mouseenter="activeIndex = idx"
              >
                <div v-if="item.icon" class="shrink-0">
                  <img :src="item.icon" :alt="item.name" class="app-icon h-9 w-9 shadow-sm" />
                </div>
                <div v-else class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                  <FileText v-if="item.type === 'page'" class="h-4 w-4 text-slate-400" />
                  <AppWindow v-else class="h-4 w-4 text-slate-400" />
                </div>

                <div class="min-w-0 flex-1">
                  <p class="truncate text-sm font-medium">{{ item.name }}</p>
                  <p class="truncate text-xs opacity-60">{{ item.subtitle }}</p>
                </div>

                <CornerDownLeft
                  v-if="idx === activeIndex"
                  class="h-3.5 w-3.5 shrink-0 opacity-40"
                />
              </button>
            </div>

            <!-- Footer hints -->
            <div class="flex items-center gap-4 border-t border-slate-100 px-4 py-2.5 text-[11px] text-slate-400 dark:border-slate-800 dark:text-slate-500">
              <span class="inline-flex items-center gap-1">
                <ArrowUp class="h-3 w-3" /><ArrowDown class="h-3 w-3" />
                {{ t('search.navigate') }}
              </span>
              <span class="inline-flex items-center gap-1">
                <CornerDownLeft class="h-3 w-3" />
                {{ t('search.select') }}
              </span>
              <span class="inline-flex items-center gap-1">
                <kbd class="rounded border border-slate-200 px-1 text-[10px] dark:border-slate-700">ESC</kbd>
                {{ t('search.close') }}
              </span>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
