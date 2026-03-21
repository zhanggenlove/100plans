<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Download, Globe, Clock } from 'lucide-vue-next'

defineProps<{
  appStoreUrl?: string
  websiteUrl?: string
  status: 'released' | 'coming-soon'
  gradient: { from: string; to: string }
}>()

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <a
      v-if="appStoreUrl && status === 'released'"
      :href="appStoreUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
    >
      <Download class="h-4 w-4" />
      {{ t('product.download') }}
    </a>
    <a
      v-if="websiteUrl"
      :href="websiteUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
    >
      <Globe class="h-4 w-4" />
      {{ t('product.visitWebsite') }}
    </a>
    <div
      v-if="status === 'coming-soon' && !appStoreUrl && !websiteUrl"
      class="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-6 py-2.5 text-sm font-medium text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400"
    >
      <Clock class="h-4 w-4" />
      {{ t('product.comingSoon') }}
    </div>
  </div>
</template>
