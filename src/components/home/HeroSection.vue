<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { products } from '@/data/products'
import HeroBg from './HeroBg.vue'

const { t, locale } = useI18n()

const stats = [
  { value: 8, labelKey: 'nav.products' },
  { value: 3, labelKey: 'product.platform' },
  { value: 6, labelKey: 'product.released' },
]

const entered = ref(false)
const statValues = ref<number[]>([0, 0, 0])

function fadeStyle(delay: number) {
  return computed(() => ({
    opacity: entered.value ? '1' : '0',
    transform: entered.value ? 'translateY(0)' : 'translateY(24px)',
    transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
    transitionDelay: `${delay}s`,
  }))
}

function scaleStyle(delay: number) {
  return computed(() => ({
    opacity: entered.value ? '1' : '0',
    transform: entered.value ? 'scale(1)' : 'scale(0.75)',
    transition: 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)',
    transitionDelay: `${delay}s`,
  }))
}

onMounted(() => {
  setTimeout(() => { entered.value = true }, 60)
  setTimeout(() => {
    const duration = 1200
    const start = performance.now()
    const targets = stats.map((s) => s.value)
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      statValues.value = targets.map((t) => Math.round(eased * t))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, 900)
})
</script>

<template>
  <section class="relative overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-40">
    <!-- Canvas animated background -->
    <HeroBg />

    <!-- Noise grain overlay -->
    <div class="hero-grain pointer-events-none absolute inset-0" />

    <!-- Subtle grid -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
      style="background-image: url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M60%200H0v60%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-width%3D%220.4%22%2F%3E%3C%2Fsvg%3E')"
    />

    <!-- Top gradient / bottom border -->
    <div class="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/60 to-transparent dark:from-[#0a0a0f]/60" />
    <div class="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800" />

    <div class="relative z-10 mx-auto max-w-5xl px-6">
      <div class="mx-auto max-w-2xl text-center">
        <!-- Badge -->
        <p
          class="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3.5 py-1 text-[13px] font-medium text-slate-500 backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-800/60 dark:text-slate-400"
          :style="fadeStyle(0).value"
        >
          <span class="relative flex h-1.5 w-1.5">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          {{ t('hero.badge') }}
        </p>

        <!-- Title with gradient + shimmer -->
        <h1
          class="hero-title mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          :style="fadeStyle(0.1).value"
        >
          {{ t('hero.title') }}
        </h1>

        <!-- Subtitle -->
        <p
          class="mx-auto mb-8 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg dark:text-slate-400"
          :style="fadeStyle(0.2).value"
        >
          {{ t('hero.subtitle') }}
        </p>

        <!-- CTA with glow -->
        <div :style="fadeStyle(0.3).value">
          <a
            href="#products"
            class="hero-cta group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-slate-900 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-slate-900/20 hover:shadow-xl active:scale-[0.98] dark:bg-white dark:text-slate-900 dark:shadow-white/10"
          >
            <span class="hero-cta-shine absolute inset-0" />
            <span class="relative">{{ t('hero.cta') }}</span>
            <svg
              class="relative h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      <!-- App showcase strip -->
      <div class="mt-16 sm:mt-20" :style="fadeStyle(0.4).value">
        <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 sm:gap-5">
          <router-link
            v-for="(p, idx) in products"
            :key="p.id"
            :to="`/${locale}/app/${p.slug}`"
            class="group flex flex-col items-center gap-2.5"
            :style="scaleStyle(0.5 + idx * 0.06).value"
          >
            <div class="relative">
              <div
                class="absolute -inset-2 rounded-[28%] bg-gradient-to-br opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-40"
                :class="[`from-${p.gradient.from}`, `to-${p.gradient.to}`]"
              />
              <img
                :src="p.icon"
                :alt="p.name"
                class="app-icon relative h-14 w-14 shadow-lg ring-1 ring-black/[0.06] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl sm:h-[4.5rem] sm:w-[4.5rem]"
                loading="lazy"
                decoding="async"
              />
              <span
                v-if="p.status === 'coming-soon'"
                class="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[8px] font-bold text-white shadow-sm ring-2 ring-white dark:ring-[#0a0a0f]"
              >
                !
              </span>
            </div>
            <span class="text-center text-[11px] font-medium leading-tight text-slate-400 transition-colors duration-300 group-hover:text-slate-700 dark:text-slate-500 dark:group-hover:text-slate-300 sm:text-xs">
              {{ p.name }}
            </span>
          </router-link>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-16 flex items-center justify-center" :style="fadeStyle(0.8).value">
        <div class="flex items-center gap-0">
          <template v-for="(stat, i) in stats" :key="stat.labelKey">
            <div class="px-8 text-center sm:px-12">
              <p class="text-3xl font-bold tracking-tight text-slate-900 tabular-nums sm:text-4xl dark:text-white">
                {{ statValues[i] }}
              </p>
              <p class="mt-1.5 text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                {{ t(stat.labelKey) }}
              </p>
            </div>
            <div
              v-if="i < stats.length - 1"
              class="h-10 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent dark:via-slate-700"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
