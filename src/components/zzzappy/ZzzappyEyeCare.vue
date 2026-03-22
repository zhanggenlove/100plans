<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Check } from 'lucide-vue-next'

const { t } = useI18n()
const visible = ref(false)
const el = ref<HTMLElement | null>(null)

const features = ['eyeF1', 'eyeF2', 'eyeF3', 'eyeF4'] as const

let obs: IntersectionObserver | null = null
onMounted(() => {
  if (!el.value) return
  obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { visible.value = true; obs?.disconnect() }
  }, { threshold: 0.15 })
  obs.observe(el.value)
})
onUnmounted(() => obs?.disconnect())
</script>

<template>
  <section ref="el" class="relative overflow-hidden bg-[#0a0e1a] py-28 sm:py-36">
    <div class="zz-grain pointer-events-none absolute inset-0" />
    <!-- Subtle indigo glow -->
    <div class="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/[0.07] blur-[120px]" />

    <div class="relative z-10 mx-auto max-w-5xl px-6">
      <div class="grid items-center gap-16 lg:grid-cols-2">
        <!-- Left: text -->
        <div>
          <span
            class="mb-4 inline-block rounded-full bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-400 ring-1 ring-indigo-500/20"
            :style="{ opacity: visible ? '1' : '0', transition: 'opacity 0.5s ease' }"
          >
            {{ t('zzzappy.eyeBadge') }}
          </span>
          <h2
            class="mb-5 text-3xl font-extralight tracking-tight text-white sm:text-4xl"
            :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s' }"
          >
            {{ t('zzzappy.eyeTitle') }}
          </h2>
          <p
            class="mb-8 text-base leading-relaxed text-white/45"
            :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s' }"
          >
            {{ t('zzzappy.eyeDesc') }}
          </p>
          <ul class="space-y-4">
            <li
              v-for="(f, i) in features" :key="f"
              class="flex items-start gap-3"
              :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateX(0)' : 'translateX(-12px)', transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.08}s` }"
            >
              <div class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/15">
                <Check class="h-3 w-3 text-indigo-400" />
              </div>
              <span class="text-sm text-white/60">{{ t(`zzzappy.${f}`) }}</span>
            </li>
          </ul>
        </div>

        <!-- Right: 20-20-20 visual -->
        <div
          class="flex items-center justify-center"
          :style="{ opacity: visible ? '1' : '0', transform: visible ? 'scale(1)' : 'scale(0.9)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s' }"
        >
          <div class="zz-frost relative flex h-72 w-72 items-center justify-center rounded-full sm:h-80 sm:w-80">
            <!-- Animated ring -->
            <svg class="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(99,102,241,0.08)" stroke-width="1" />
              <circle
                cx="50" cy="50" r="46" fill="none" stroke="rgba(99,102,241,0.5)" stroke-width="1.5"
                stroke-linecap="round"
                :stroke-dasharray="visible ? '190 289' : '0 289'"
                style="transition: stroke-dasharray 2s cubic-bezier(0.16,1,0.3,1) 0.6s"
              />
            </svg>
            <div class="text-center">
              <div class="flex items-baseline justify-center gap-1">
                <span class="text-5xl font-extralight tabular-nums text-indigo-300">20</span>
                <span class="text-lg text-white/20">-</span>
                <span class="text-5xl font-extralight tabular-nums text-indigo-300">20</span>
                <span class="text-lg text-white/20">-</span>
                <span class="text-5xl font-extralight tabular-nums text-indigo-300">20</span>
              </div>
              <p class="mt-3 text-xs tracking-widest text-white/25 uppercase">min · feet · sec</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.zz-frost {
  background: rgba(255,255,255,0.02);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.05);
}
.zz-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}
</style>
