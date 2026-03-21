<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ArrowLeft } from 'lucide-vue-next'

const { t, locale } = useI18n()
</script>

<template>
  <div class="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
    <p class="mb-2 text-8xl font-bold text-slate-200 dark:text-slate-800">404</p>
    <p class="mb-8 text-base text-slate-400 dark:text-slate-500">
      {{ t('notFound.message') }}
    </p>
    <router-link
      :to="`/${locale}`"
      class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
    >
      <ArrowLeft class="h-4 w-4" />
      {{ t('notFound.backHome') }}
    </router-link>
  </div>
</template>
