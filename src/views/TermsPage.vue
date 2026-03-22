<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import MarkdownIt from 'markdown-it'
import { loadPolicy } from '@/data/policy-loader'
import { useProduct } from '@/composables/useProduct'
import { useSeoMeta } from '@/composables/useSeoMeta'
import type { Locale } from '@/types/product'

const props = defineProps<{ slugOverride?: string }>()

const md = new MarkdownIt()
const { locale, t } = useI18n()
const router = useRouter()
const { localized, product, slug } = useProduct(props.slugOverride)

const termsMarkdown = ref('')
const termsLoading = ref(true)

watch(
  () => [slug.value, locale.value] as const,
  async ([s, loc], _, onCleanup) => {
    if (!s) {
      termsMarkdown.value = ''
      termsLoading.value = false
      return
    }
    termsLoading.value = true
    let cancelled = false
    onCleanup(() => {
      cancelled = true
    })
    const pol = await loadPolicy(s)
    if (cancelled) return
    termsMarkdown.value = pol?.terms[loc as Locale] ?? ''
    termsLoading.value = false
  },
  { immediate: true },
)

const renderedTerms = computed(() => {
  if (!termsMarkdown.value) return ''
  return md.render(termsMarkdown.value)
})

useSeoMeta(() => ({
  title: `${t('product.terms')} — ${localized.value?.name ?? ''}`,
}))
</script>

<template>
  <div v-if="localized && product" class="mx-auto max-w-3xl px-6 pb-24 pt-8">
    <button
      class="mb-8 inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300"
      @click="router.push(`/${locale}/app/${localized.slug}`)"
    >
      <ArrowLeft class="h-3.5 w-3.5" />
      {{ localized.name }}
    </button>

    <div class="mb-10 flex items-center gap-4">
      <img :src="product.icon" :alt="localized.name" class="app-icon h-12 w-12 shadow-md" loading="eager" />
      <div>
        <h1 class="text-2xl font-bold">{{ t('product.terms') }}</h1>
        <p class="text-sm text-slate-400 dark:text-slate-500">{{ localized.name }}</p>
      </div>
    </div>

    <p v-if="termsLoading" class="text-sm text-slate-500 dark:text-slate-400">Loading…</p>
    <article
      v-else
      class="prose prose-slate max-w-none prose-headings:font-semibold prose-a:text-brand-600 dark:prose-invert dark:prose-a:text-brand-400"
      v-html="renderedTerms"
    />
  </div>
</template>
