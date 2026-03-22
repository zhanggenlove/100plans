<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const visible = ref(false)
const el = ref<HTMLElement | null>(null)

const dimensions = [
  { key: 'armKeystrokes', target: 78, color: '#f97316' },
  { key: 'armClicks', target: 52, color: '#f59e0b' },
  { key: 'armTrackpad', target: 65, color: '#ec4899' },
  { key: 'armScroll', target: 40, color: '#a855f7' },
  { key: 'armDuration', target: 88, color: '#ef4444' },
]

const presets = ['armRelaxed', 'armStandard', 'armStrict', 'armCustom'] as const
const presetColors = ['text-emerald-400', 'text-amber-400', 'text-rose-400', 'text-blue-400']

const values = ref(dimensions.map(() => 0))
let raf = 0

function animateGauges() {
  const dur = 1600
  const start = performance.now()
  function tick(now: number) {
    const p = Math.min((now - start) / dur, 1)
    const ease = 1 - Math.pow(1 - p, 3)
    values.value = dimensions.map((d) => Math.round(d.target * ease))
    if (p < 1) raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)
}

let obs: IntersectionObserver | null = null
onMounted(() => {
  if (!el.value) return
  obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { visible.value = true; animateGauges(); obs?.disconnect() }
  }, { threshold: 0.15 })
  obs.observe(el.value)
})
onUnmounted(() => { obs?.disconnect(); cancelAnimationFrame(raf) })

function circumference(r: number) { return 2 * Math.PI * r }
const R = 36
const C = circumference(R)
</script>

<template>
  <section ref="el" class="relative overflow-hidden bg-[#070b14] py-28 sm:py-36">
    <div class="zz-grain pointer-events-none absolute inset-0" />
    <div class="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-orange-600/[0.05] blur-[120px]" />

    <div class="relative z-10 mx-auto max-w-5xl px-6">
      <div class="grid items-center gap-16 lg:grid-cols-2">
        <!-- Left: 5 ring gauges -->
        <div
          class="order-2 flex flex-wrap items-center justify-center gap-6 lg:order-1"
          :style="{ opacity: visible ? '1' : '0', transform: visible ? 'scale(1)' : 'scale(0.9)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s' }"
        >
          <div v-for="(dim, i) in dimensions" :key="dim.key" class="flex flex-col items-center gap-2">
            <div class="relative h-20 w-20 sm:h-24 sm:w-24">
              <svg class="h-full w-full -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" :r="R" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="4" />
                <circle
                  cx="40" cy="40" :r="R" fill="none" :stroke="dim.color" stroke-width="4"
                  stroke-linecap="round"
                  :stroke-dasharray="`${(values[i] / 100) * C} ${C}`"
                  style="transition: stroke-dasharray 0.1s linear"
                />
              </svg>
              <span class="absolute inset-0 flex items-center justify-center text-sm font-light tabular-nums text-white/70">
                {{ values[i] }}%
              </span>
            </div>
            <span class="text-[11px] text-white/30">{{ t(`zzzappy.${dim.key}`) }}</span>
          </div>
        </div>

        <!-- Right: text -->
        <div class="order-1 lg:order-2">
          <h2
            class="mb-5 text-3xl font-extralight tracking-tight text-white sm:text-4xl"
            :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)' }"
          >
            {{ t('zzzappy.armTitle') }}
          </h2>
          <p
            class="mb-8 text-base leading-relaxed text-white/45"
            :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s' }"
          >
            {{ t('zzzappy.armDesc') }}
          </p>

          <!-- Presets -->
          <div
            :style="{ opacity: visible ? '1' : '0', transition: 'opacity 0.6s ease 0.3s' }"
          >
            <p class="mb-3 text-xs font-medium tracking-widest text-white/25 uppercase">{{ t('zzzappy.armPresets') }}</p>
            <div class="flex flex-wrap gap-2.5">
              <span
                v-for="(p, i) in presets" :key="p"
                class="rounded-full bg-white/[0.04] px-4 py-1.5 text-xs ring-1 ring-white/[0.06]"
                :class="presetColors[i]"
              >
                {{ t(`zzzappy.${p}`) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.zz-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}
</style>
