<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { blogPosts } from '@/data/blog'
import { useSeoMeta } from '@/composables/useSeoMeta'
import type { Locale } from '@/types/product'
import type { BlogPost } from '@/types/blog'

const { t, locale } = useI18n()

useSeoMeta(() => ({
  title: t('blog.title'),
  description: t('blog.subtitle'),
}))

const selectedTag = ref<string | null>(null)

const allTags = computed(() => {
  const set = new Set<string>()
  blogPosts.forEach((p) => p.tags.forEach((tag) => set.add(tag)))
  return [...set].sort()
})

const filteredPosts = computed(() => {
  if (!selectedTag.value) return blogPosts
  return blogPosts.filter((p) => p.tags.includes(selectedTag.value!))
})

function loc(post: BlogPost, field: 'title' | 'excerpt'): string {
  const l = locale.value as Locale
  return post[field][l] ?? post[field].en
}

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat(locale.value === 'zh' ? 'zh-CN' : locale.value === 'ja' ? 'ja-JP' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

const headerVisible = ref(false)
const listVisible = ref(false)
const headerRef = ref<HTMLElement | null>(null)
const listRef = ref<HTMLElement | null>(null)

function observeOnce(el: HTMLElement | null, cb: () => void) {
  if (!el) return
  const obs = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting) {
        cb()
        obs.disconnect()
      }
    },
    { threshold: 0.05 },
  )
  obs.observe(el)
}

onMounted(() => {
  observeOnce(headerRef.value, () => {
    headerVisible.value = true
  })
  observeOnce(listRef.value, () => {
    listVisible.value = true
  })
})

function cardStyle(idx: number) {
  return {
    opacity: listVisible.value ? '1' : '0',
    transform: listVisible.value ? 'translateY(0)' : 'translateY(28px)',
    transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
    transitionDelay: listVisible.value ? `${idx * 70}ms` : '0ms',
  }
}
</script>

<template>
  <div class="pb-24 pt-12">
    <div class="mx-auto max-w-3xl px-6">
      <div
        ref="headerRef"
        class="mb-12"
        :style="{
          opacity: headerVisible ? '1' : '0',
          transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
        }"
      >
        <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          {{ t('blog.title') }}
        </p>
        <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">
          {{ t('blog.subtitle') }}
        </h1>
      </div>

      <div ref="listRef">
        <div
          class="mb-10 flex flex-wrap items-center gap-2"
          :style="{
            opacity: listVisible ? '1' : '0',
            transform: listVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.55s cubic-bezier(0.16,1,0.3,1), transform 0.55s cubic-bezier(0.16,1,0.3,1)',
          }"
        >
          <button
            type="button"
            class="rounded-full px-3 py-1 text-[13px] font-medium transition-colors"
            :class="
              selectedTag === null
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
            "
            @click="selectedTag = null"
          >
            {{ t('blog.allPosts') }}
          </button>
          <button
            v-for="tag in allTags"
            :key="tag"
            type="button"
            class="rounded-full px-3 py-1 text-[13px] font-medium transition-colors"
            :class="
              selectedTag === tag
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
            "
            @click="selectedTag = tag"
          >
            {{ tag }}
          </button>
        </div>

        <div class="flex flex-col gap-5">
          <router-link
            v-for="(post, idx) in filteredPosts"
            :key="post.slug"
            :to="`/${locale}/blog/${post.slug}`"
            class="card-surface group block p-6 transition-shadow hover:shadow-md dark:hover:shadow-lg/10"
            :style="cardStyle(idx)"
          >
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-slate-400 dark:text-slate-500">
              <time :datetime="post.date">{{ formatDate(post.date) }}</time>
            </div>
            <h2 class="mt-3 text-xl font-semibold tracking-tight text-slate-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
              {{ loc(post, 'title') }}
            </h2>
            <p class="mt-2 line-clamp-2 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
              {{ loc(post, 'excerpt') }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <button
                v-for="tag in post.tags"
                :key="tag"
                type="button"
                class="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 transition-colors hover:bg-brand-100 hover:text-brand-800 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-brand-500/15 dark:hover:text-brand-300"
                @click.stop.prevent="selectedTag = tag"
              >
                {{ tag }}
              </button>
            </div>
            <p class="mt-4 text-[13px] font-medium text-brand-600 dark:text-brand-400">
              {{ t('blog.readMore') }}
              <span aria-hidden="true" class="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
