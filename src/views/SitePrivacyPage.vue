<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { ArrowLeft, Shield } from 'lucide-vue-next'
import MarkdownIt from 'markdown-it'
import { sitePrivacy } from '@/data/site-legal'
import { useSeoMeta } from '@/composables/useSeoMeta'
import type { Locale } from '@/types/product'

const md = new MarkdownIt()
const { locale, t } = useI18n()
const router = useRouter()

const rendered = computed(() => md.render(sitePrivacy[locale.value as Locale] ?? sitePrivacy.en))

useSeoMeta(() => ({
  title: `${t('footer.sitePrivacy')} — 100Plans`,
  description: '100Plans website privacy policy.',
}))
</script>

<template>
  <div class="mx-auto max-w-3xl px-6 pb-24 pt-8">
    <button
      class="mb-8 inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300"
      @click="router.push(`/${locale}`)"
    >
      <ArrowLeft class="h-3.5 w-3.5" />
      {{ t('product.backToHome') }}
    </button>

    <div class="mb-10 flex items-center gap-4">
      <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-600/10 dark:text-brand-400">
        <Shield class="h-6 w-6" />
      </div>
      <div>
        <h1 class="text-2xl font-bold">{{ t('footer.sitePrivacy') }}</h1>
        <p class="text-sm text-slate-400 dark:text-slate-500">100Plans</p>
      </div>
    </div>

    <article
      class="prose prose-slate max-w-none prose-headings:font-semibold prose-a:text-brand-600 dark:prose-invert dark:prose-a:text-brand-400"
      v-html="rendered"
    />
  </div>
</template>
