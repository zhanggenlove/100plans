<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const visible = ref(false)
const el = ref<HTMLElement | null>(null)

const stats = [
  { end: 10, suffix: 'h+', key: 'problemEye', color: 'text-indigo-400' },
  { end: 80, suffix: '%', key: 'problemBlink', color: 'text-purple-400' },
  { end: 17000, suffix: '+', key: 'problemKey', color: 'text-orange-400' },
  { end: 64, suffix: '%', key: 'problemRsi', color: 'text-rose-400' },
]

const counters = ref(stats.map(() => 0))
let raf = 0

function animateCounters() {
  const duration = 1800
  const start = performance.now()
  function tick(now: number) {
    const p = Math.min((now - start) / duration, 1)
    const ease = 1 - Math.pow(1 - p, 3)
    counters.value = stats.map((s) => Math.round(s.end * ease))
    if (p < 1) raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)
}

let obs: IntersectionObserver | null = null
onMounted(() => {
  if (!el.value) return
  obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) {
      visible.value = true
      animateCounters()
      obs?.disconnect()
    }
  }, { threshold: 0.2 })
  obs.observe(el.value)
})
onUnmounted(() => { obs?.disconnect(); cancelAnimationFrame(raf) })
</script>

<template>
  <section ref="el" class="relative overflow-hidden bg-[#070b14] py-28 sm:py-36">
    <div class="zz-grain pointer-events-none absolute inset-0" />
    <div class="relative z-10 mx-auto max-w-5xl px-6">
      <!-- Title -->
      <h2
        class="mb-16 text-center text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl"
        :style="{
          opacity: visible ? '1' : '0',
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
        }"
      >
        {{ t('zzzappy.problemTitle') }}
      </h2>

      <!-- Stats grid -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(stat, i) in stats"
          :key="stat.key"
          class="zz-frost rounded-2xl p-6 text-center"
          :style="{
            opacity: visible ? '1' : '0',
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms`,
          }"
        >
          <p class="mb-2 text-4xl font-light tabular-nums sm:text-5xl" :class="stat.color">
            {{ counters[i].toLocaleString() }}<span class="text-2xl">{{ stat.suffix }}</span>
          </p>
          <p class="text-sm leading-relaxed text-white/40">{{ t(`zzzappy.${stat.key}`) }}</p>
        </div>
      </div>

      <!-- Summary -->
      <p
        class="mx-auto mt-14 max-w-2xl text-center text-base leading-relaxed text-emerald-300/70 sm:text-lg"
        :style="{
          opacity: visible ? '1' : '0',
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s',
        }"
      >
        {{ t('zzzappy.problemSummary') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.zz-frost {
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.06);
}
.zz-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}
</style>
