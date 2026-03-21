<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import MarkdownIt from 'markdown-it'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { blogPosts } from '@/data/blog'
import { useSeoMeta } from '@/composables/useSeoMeta'
import type { Locale } from '@/types/product'
import type { BlogPost } from '@/types/blog'

const md = new MarkdownIt()
const { locale, t } = useI18n()
const route = useRoute()
const router = useRouter()

const slug = computed(() => route.params.slug as string)

const postIndex = computed(() => blogPosts.findIndex((p) => p.slug === slug.value))

const post = computed(() => (postIndex.value >= 0 ? blogPosts[postIndex.value] : null))

const rendered = computed(() => {
  const p = post.value
  if (!p) return ''
  const l = locale.value as Locale
  return md.render(p.content[l] ?? p.content.en)
})

useSeoMeta(() => {
  const p = post.value
  if (!p) {
    return { title: t('blog.title'), description: t('blog.subtitle') }
  }
  const l = locale.value as Locale
  return {
    title: p.title[l] ?? p.title.en,
    description: p.excerpt[l] ?? p.excerpt.en,
  }
})

const prevPost = computed(() => {
  const i = postIndex.value
  if (i < 0 || i >= blogPosts.length - 1) return null
  return blogPosts[i + 1]
})

const nextPost = computed(() => {
  const i = postIndex.value
  if (i <= 0) return null
  return blogPosts[i - 1]
})

function titleOf(p: BlogPost) {
  const l = locale.value as Locale
  return p.title[l] ?? p.title.en
}

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat(locale.value === 'zh' ? 'zh-CN' : locale.value === 'ja' ? 'ja-JP' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}
</script>

<template>
  <div v-if="post" class="pb-24 pt-12">
    <div class="mx-auto max-w-3xl px-6">
      <button
        type="button"
        class="mb-10 inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300"
        @click="router.push(`/${locale}/blog`)"
      >
        <ArrowLeft class="h-3.5 w-3.5" />
        {{ t('blog.backToList') }}
      </button>

      <header class="mb-10">
        <time class="text-sm text-slate-400 dark:text-slate-500" :datetime="post.date">{{ formatDate(post.date) }}</time>
        <h1 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {{ titleOf(post) }}
        </h1>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="rounded-md bg-slate-100 px-2.5 py-0.5 text-[12px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
          >
            {{ tag }}
          </span>
        </div>
      </header>

      <article
        class="prose prose-slate max-w-none prose-headings:font-semibold prose-a:text-brand-600 dark:prose-invert dark:prose-a:text-brand-400"
        v-html="rendered"
      />

      <nav class="mt-16 grid gap-4 border-t border-slate-100 pt-10 dark:border-slate-800/80 sm:grid-cols-2">
        <router-link
          v-if="prevPost"
          :to="`/${locale}/blog/${prevPost.slug}`"
          class="card-surface flex items-center gap-3 p-4 transition-colors hover:border-brand-200 dark:hover:border-brand-500/30"
        >
          <ChevronLeft class="h-5 w-5 shrink-0 text-slate-400" />
          <div class="min-w-0 text-left">
            <p class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">{{ t('blog.prev') }}</p>
            <p class="truncate text-sm font-medium text-slate-900 dark:text-white">{{ titleOf(prevPost) }}</p>
          </div>
        </router-link>
        <div v-else class="hidden sm:block" />

        <router-link
          v-if="nextPost"
          :to="`/${locale}/blog/${nextPost.slug}`"
          class="card-surface flex flex-row-reverse items-center gap-3 p-4 text-right transition-colors hover:border-brand-200 dark:hover:border-brand-500/30 sm:col-start-2"
        >
          <ChevronRight class="h-5 w-5 shrink-0 text-slate-400" />
          <div class="min-w-0 flex-1">
            <p class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">{{ t('blog.next') }}</p>
            <p class="truncate text-sm font-medium text-slate-900 dark:text-white">{{ titleOf(nextPost) }}</p>
          </div>
        </router-link>
      </nav>
    </div>
  </div>

  <div v-else class="mx-auto max-w-3xl px-6 pb-24 pt-12">
    <button
      type="button"
      class="mb-8 inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300"
      @click="router.push(`/${locale}/blog`)"
    >
      <ArrowLeft class="h-3.5 w-3.5" />
      {{ t('blog.backToList') }}
    </button>
    <p class="text-slate-500 dark:text-slate-400">{{ t('notFound.message') }}</p>
  </div>
</template>
