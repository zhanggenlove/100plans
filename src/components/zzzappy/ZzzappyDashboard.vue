<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Shield } from 'lucide-vue-next'

const { t } = useI18n()
const visible = ref(false)
const el = ref<HTMLElement | null>(null)

const bars = [65, 80, 45, 70, 55, 90, 75]
const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

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
    <div class="relative z-10 mx-auto max-w-5xl px-6">
      <div class="grid items-center gap-16 lg:grid-cols-2">
        <!-- Left: text -->
        <div>
          <h2
            class="mb-5 text-3xl font-extralight tracking-tight text-white sm:text-4xl"
            :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)' }"
          >
            {{ t('zzzappy.dashTitle') }}
          </h2>
          <p
            class="mb-8 text-base leading-relaxed text-white/45"
            :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s' }"
          >
            {{ t('zzzappy.dashDesc') }}
          </p>
          <div
            class="flex items-start gap-3 rounded-xl bg-emerald-500/[0.06] p-4 ring-1 ring-emerald-500/10"
            :style="{ opacity: visible ? '1' : '0', transition: 'opacity 0.6s ease 0.3s' }"
          >
            <Shield class="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
            <p class="text-sm leading-relaxed text-emerald-300/70">{{ t('zzzappy.dashPrivacy') }}</p>
          </div>
        </div>

        <!-- Right: chart mockup -->
        <div
          class="zz-frost rounded-3xl p-6 sm:p-8"
          :style="{ opacity: visible ? '1' : '0', transform: visible ? 'scale(1)' : 'scale(0.92)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s' }"
        >
          <div class="mb-4 flex items-center justify-between">
            <span class="text-xs font-medium tracking-wider text-white/30 uppercase">Weekly Screen Time</span>
            <span class="text-xs text-emerald-400/60">86% completion</span>
          </div>

          <!-- Bar chart -->
          <div class="flex items-end gap-3" style="height: 140px">
            <div
              v-for="(bar, i) in bars" :key="i"
              class="flex flex-1 flex-col items-center justify-end gap-2"
              style="height: 100%"
            >
              <div
                class="w-full rounded-t-lg"
                :style="{
                  height: visible ? `${bar}%` : '0%',
                  background: `linear-gradient(to top, rgba(34,197,94,0.5), rgba(34,197,94,0.2))`,
                  transition: `height 1s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.08}s`,
                }"
              />
              <span class="text-[10px] text-white/20">{{ days[i] }}</span>
            </div>
          </div>

          <!-- Mini stats -->
          <div class="mt-6 grid grid-cols-3 gap-3 border-t border-white/[0.04] pt-5">
            <div class="text-center">
              <p class="text-lg font-light tabular-nums text-white/70">6.2h</p>
              <p class="text-[10px] text-white/25">Avg / day</p>
            </div>
            <div class="text-center">
              <p class="text-lg font-light tabular-nums text-white/70">42</p>
              <p class="text-[10px] text-white/25">Breaks taken</p>
            </div>
            <div class="text-center">
              <p class="text-lg font-light tabular-nums text-emerald-400/70">7d</p>
              <p class="text-[10px] text-white/25">Streak</p>
            </div>
          </div>
        </div>
      </div>
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
