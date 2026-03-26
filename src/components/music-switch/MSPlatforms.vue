<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const visible = ref(false)
let observer: IntersectionObserver | null = null
const sectionRef = ref<HTMLElement>()

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) visible.value = true },
    { threshold: 0.15 },
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => observer?.disconnect())

const platforms = [
  {
    key: 'platformApple',
    icon: '/images/platforms/apple_music.png',
    color: '#FF2F56',
    bg: 'from-[#FF2F56]/8 to-[#FF2F56]/3',
    region: 'platformGlobal',
    features: ['OAuth', 'Library', 'Playlist'],
  },
  {
    key: 'platformYT',
    icon: '/images/platforms/youtube_music.png',
    color: '#FF0000',
    bg: 'from-[#FF0000]/8 to-[#FF0000]/3',
    region: 'platformGlobal',
    features: ['OAuth', 'Public URL', 'Playlist'],
  },
  {
    key: 'platformNetease',
    icon: '/images/platforms/netease.png',
    color: '#FF314A',
    bg: 'from-[#FF314A]/8 to-[#FF314A]/3',
    region: 'platformChina',
    features: ['Share Link', 'Playlist'],
  },
  {
    key: 'platformQQ',
    icon: '/images/platforms/qq_music.png',
    color: '#31C27C',
    bg: 'from-[#31C27C]/8 to-[#31C27C]/3',
    region: 'platformChina',
    features: ['Share Link', 'Playlist'],
  },
]
</script>

<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-950"
  >
    <!-- decorative lines -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-800" />
      <div class="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-800" />
    </div>

    <div class="relative z-10 mx-auto max-w-6xl px-6">
      <div
        class="mb-16 text-center"
        :style="{
          opacity: visible ? '1' : '0',
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }"
      >
        <h2 class="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          {{ t('ms.platformTitle') }}
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-gray-500 dark:text-gray-400">
          {{ t('ms.platformDesc') }}
        </p>
      </div>

      <!-- platform cards -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(p, i) in platforms"
          :key="p.key"
          class="ms-platform-card group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
          :style="{
            opacity: visible ? '1' : '0',
            transform: visible ? 'translateY(0)' : 'translateY(32px)',
            transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + i * 0.1}s`,
          }"
        >
          <!-- color accent bar -->
          <div
            class="absolute top-0 left-0 h-1 w-full transition-all duration-500 group-hover:h-1.5"
            :style="{ background: `linear-gradient(90deg, ${p.color}, ${p.color}88)` }"
          />

          <div class="mb-4 flex items-center gap-3">
            <img
              :src="p.icon"
              :alt="t(`ms.${p.key}`)"
              class="h-14 w-14 rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-105"
              :style="{ boxShadow: `0 8px 24px -4px ${p.color}22` }"
            />
          </div>

          <h3 class="mb-1 text-lg font-bold text-gray-900 dark:text-white">
            {{ t(`ms.${p.key}`) }}
          </h3>

          <span
            class="mb-4 inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
            :style="{ color: p.color, background: `${p.color}12` }"
          >
            {{ t(`ms.${p.region}`) }}
          </span>

          <div class="mt-3 flex flex-wrap gap-1.5">
            <span
              v-for="feat in p.features"
              :key="feat"
              class="rounded-md bg-gray-50 px-2 py-0.5 text-[11px] font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400"
            >
              {{ feat }}
            </span>
          </div>

          <!-- hover glow -->
          <div
            class="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
            :style="{ background: `${p.color}15` }"
          />
        </div>
      </div>

      <!-- connection lines visual -->
      <div
        class="ms-connections mx-auto mt-12 flex items-center justify-center gap-3"
        :style="{
          opacity: visible ? '1' : '0',
          transition: 'opacity 0.8s ease 0.6s',
        }"
      >
        <div v-for="(p, i) in platforms" :key="i" class="flex items-center">
          <img :src="p.icon" :alt="p.key" class="h-8 w-8 rounded-lg" />
          <svg v-if="i < platforms.length - 1" class="mx-2 h-4 w-12 text-gray-300 dark:text-gray-700" viewBox="0 0 48 16">
            <line x1="0" y1="8" x2="48" y2="8" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" class="ms-dash" />
            <circle cx="24" cy="8" r="2.5" :fill="p.color" class="ms-node" :style="{ animationDelay: `${i * 0.3}s` }" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ms-dash {
  stroke-dashoffset: 0;
  animation: dash-flow 2s linear infinite;
}
@keyframes dash-flow {
  to { stroke-dashoffset: -14; }
}
.ms-node {
  animation: node-pulse 2s ease-in-out infinite;
}
@keyframes node-pulse {
  0%, 100% { opacity: 0.5; r: 2.5; }
  50% { opacity: 1; r: 3.5; }
}

@media (prefers-reduced-motion: reduce) {
  .ms-dash, .ms-node { animation: none; }
}
</style>
