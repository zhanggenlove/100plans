<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import reviewData from '@/data/reviews-cache.json'
import { products } from '@/data/products'

const { t } = useI18n()

interface Review {
  author: string
  rating: number
  title: string
  content: string
  appSlug: string
  appName: string
}

const reviews = reviewData.reviews as Review[]

const ICON_BY_SLUG: Record<string, string> = Object.fromEntries(
  products.map((p) => [p.slug, p.icon]),
)

const visible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.02 },
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

const row1 = computed(() => {
  if (reviews.length === 0) return []
  const mid = Math.ceil(reviews.length / 2)
  return reviews.slice(0, mid)
})

const row2 = computed(() => {
  if (reviews.length === 0) return []
  const mid = Math.ceil(reviews.length / 2)
  const second = reviews.slice(mid)
  return second.length > 0 ? second : reviews
})

const row1Dup = computed(() => [...row1.value, ...row1.value])
const row2Dup = computed(() => [...row2.value, ...row2.value])

function iconFor(slug: string): string {
  return ICON_BY_SLUG[slug] ?? ''
}
</script>

<template>
  <section
    v-if="reviews.length > 0"
    ref="sectionRef"
    class="relative overflow-hidden pb-28 pt-16"
  >
    <div class="mx-auto max-w-6xl px-6">
      <div
        class="mb-12 max-w-xl"
        :style="{
          opacity: visible ? '1' : '0',
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
        }"
      >
        <h2 class="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          {{ t('home.testimonials') }}
        </h2>
      </div>
    </div>

    <div class="space-y-6">
      <div class="marquee-pause overflow-hidden">
        <div class="flex w-max gap-4 marquee-left">
          <article
            v-for="(rev, i) in row1Dup"
            :key="`r1-${i}-${rev.title}`"
            class="card-surface w-[300px] shrink-0 p-5"
          >
            <div class="mb-2 text-amber-500 dark:text-amber-400" aria-hidden="true">
              <span v-for="s in rev.rating" :key="s" class="text-base leading-none">★</span>
            </div>
            <p class="font-bold leading-snug text-slate-900 dark:text-slate-100">
              {{ rev.title }}
            </p>
            <p class="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {{ rev.content }}
            </p>
            <div class="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <img
                v-if="iconFor(rev.appSlug)"
                :src="iconFor(rev.appSlug)"
                :alt="rev.appName"
                class="app-icon h-5 w-5 shrink-0"
                loading="lazy"
              />
              <span class="min-w-0">
                <span class="font-medium text-slate-700 dark:text-slate-300">{{ rev.author }}</span>
                <span class="text-slate-400 dark:text-slate-500"> · </span>
                <span>{{ rev.appName }}</span>
              </span>
            </div>
          </article>
        </div>
      </div>

      <div class="marquee-pause overflow-hidden">
        <div class="flex w-max gap-4 marquee-right">
          <article
            v-for="(rev, i) in row2Dup"
            :key="`r2-${i}-${rev.title}`"
            class="card-surface w-[300px] shrink-0 p-5"
          >
            <div class="mb-2 text-amber-500 dark:text-amber-400" aria-hidden="true">
              <span v-for="s in rev.rating" :key="s" class="text-base leading-none">★</span>
            </div>
            <p class="font-bold leading-snug text-slate-900 dark:text-slate-100">
              {{ rev.title }}
            </p>
            <p class="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {{ rev.content }}
            </p>
            <div class="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <img
                v-if="iconFor(rev.appSlug)"
                :src="iconFor(rev.appSlug)"
                :alt="rev.appName"
                class="app-icon h-5 w-5 shrink-0"
                loading="lazy"
              />
              <span class="min-w-0">
                <span class="font-medium text-slate-700 dark:text-slate-300">{{ rev.author }}</span>
                <span class="text-slate-400 dark:text-slate-500"> · </span>
                <span>{{ rev.appName }}</span>
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
