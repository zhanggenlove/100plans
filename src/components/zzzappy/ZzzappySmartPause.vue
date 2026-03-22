<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const loc = computed(() => (['zh', 'ja'].includes(locale.value) ? locale.value : 'en'))

const screenshotSrc = computed(
  () => `/images/screenshots/zzzappy/${loc.value}/04_smart_pause.png`,
)

const visible = ref(false)
const el = ref<HTMLElement | null>(null)

const scenarios = [
  { key: 'pauseMeeting' as const, emoji: '📹', accent: 'from-[#f97316]/30 to-[#ec4899]/15 ring-[#f97316]/20' },
  { key: 'pauseVideo' as const, emoji: '▶️', accent: 'from-[#ec4899]/25 to-[#8b5cf6]/15 ring-[#ec4899]/20' },
  { key: 'pauseCalendar' as const, emoji: '📅', accent: 'from-[#8b5cf6]/28 to-[#3b82f6]/12 ring-[#8b5cf6]/22' },
  { key: 'pauseGaming' as const, emoji: '🎮', accent: 'from-[#3b82f6]/28 to-[#f97316]/12 ring-[#3b82f6]/22' },
  { key: 'pauseFocus' as const, emoji: '🎯', accent: 'from-[#f97316]/22 to-[#8b5cf6]/18 ring-[#ec4899]/18' },
  { key: 'pauseIdle' as const, emoji: '💤', accent: 'from-[#ec4899]/22 to-[#3b82f6]/15 ring-[#8b5cf6]/18' },
]

let obs: IntersectionObserver | null = null
onMounted(() => {
  if (!el.value) return
  obs = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting) {
        visible.value = true
        obs?.disconnect()
      }
    },
    { threshold: 0.12 },
  )
  obs.observe(el.value)
})
onUnmounted(() => obs?.disconnect())
</script>

<template>
  <section
    ref="el"
    class="pause-section relative overflow-hidden bg-[#0d0815] py-32"
  >
    <div class="pause-grain pointer-events-none absolute inset-0" />
    <div
      class="pointer-events-none absolute -left-28 top-1/3 h-[400px] w-[400px] rounded-full bg-[#f97316]/[0.07] blur-[100px]"
    />
    <div
      class="pointer-events-none absolute -right-20 bottom-1/4 h-[360px] w-[360px] rounded-full bg-[#8b5cf6]/[0.08] blur-[100px]"
    />
    <div
      class="pointer-events-none absolute left-1/3 top-0 h-[260px] w-[520px] rounded-full bg-[#ec4899]/[0.06] blur-[110px]"
    />
    <div
      class="pointer-events-none absolute right-1/4 bottom-0 h-[220px] w-[440px] rounded-full bg-[#3b82f6]/[0.05] blur-[100px]"
    />

    <div class="relative z-10 mx-auto max-w-6xl px-6">
      <div
        class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24"
      >
        <!-- Left: copy + scenario grid -->
        <div class="flex flex-col gap-12 text-center lg:text-left">
          <div class="mx-auto flex max-w-xl flex-col gap-5 lg:mx-0">
            <p
              class="text-xs font-semibold uppercase tracking-widest text-[#fb7185]"
              :style="{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.55s ease 0.05s, transform 0.55s ease 0.05s',
              }"
            >
              {{ t('zzzappy.pauseSubtitle') }}
            </p>
            <h2
              class="text-4xl font-bold leading-tight text-white md:text-5xl md:leading-[1.1]"
              :style="{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition:
                  'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
              }"
            >
              {{ t('zzzappy.pauseTitle') }}
            </h2>
            <p
              class="text-lg leading-relaxed text-white/65"
              :style="{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition:
                  'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.18s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.18s',
              }"
            >
              {{ t('zzzappy.pauseDesc') }}
            </p>
          </div>

          <div
            class="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
          >
            <div
              v-for="(s, i) in scenarios"
              :key="s.key"
              class="pause-frost flex flex-col items-center gap-2.5 rounded-2xl px-3 py-4 sm:px-4 sm:py-5"
              :style="{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(18px)',
                transition: `opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${0.26 + i * 0.06}s, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${0.26 + i * 0.06}s`,
              }"
            >
              <span
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-lg ring-1 sm:h-12 sm:w-12 sm:text-xl"
                :class="s.accent"
                aria-hidden="true"
              >{{ s.emoji }}</span>
              <span class="text-center text-[11px] leading-snug text-white/70 sm:text-xs">{{
                t(`zzzappy.${s.key}`)
              }}</span>
            </div>
          </div>
        </div>

        <!-- Right: screenshot -->
        <div
          :style="{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
            transition:
              'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.12s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.12s',
          }"
        >
          <div
            class="pause-window overflow-hidden rounded-2xl bg-[#14101c] ring-1 ring-white/[0.12]"
          >
            <div
              class="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.03] px-4 py-3 backdrop-blur-xl"
            >
              <div class="flex gap-2">
                <span class="h-3 w-3 rounded-full bg-[#ff5f57] ring-1 ring-black/10" />
                <span class="h-3 w-3 rounded-full bg-[#febc2e] ring-1 ring-black/10" />
                <span class="h-3 w-3 rounded-full bg-[#3b82f6] ring-1 ring-black/10" />
              </div>
              <span
                class="ml-1 flex-1 truncate text-center text-[11px] font-medium tracking-wide text-white/35"
              >Zzzappy</span>
            </div>
            <div class="relative bg-[#0d0815] p-2 sm:p-3">
              <img
                :src="screenshotSrc"
                :alt="t('zzzappy.pauseTitle')"
                class="h-auto w-full rounded-lg object-cover object-top shadow-inner"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pause-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}

.pause-frost {
  background-color: rgb(255 255 255 / 0.04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 0.04) inset;
  border: 1px solid rgb(255 255 255 / 0.06);
}

.pause-window {
  box-shadow:
    0 32px 80px -20px rgba(0, 0, 0, 0.75),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset;
}
</style>
