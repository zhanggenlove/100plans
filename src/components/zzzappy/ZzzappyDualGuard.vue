<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Eye, Activity, Check, X } from 'lucide-vue-next'

const { t } = useI18n()
const visible = ref(false)
const el = ref<HTMLElement | null>(null)

const compareRows = [
  'compareTimedBreaks',
  'compareInputMonitor',
  'compareDynamic',
  'compareBlink',
  'comparePosture',
  'compareSceneDetect',
  'compareDashboard',
  'compareNative',
] as const

type SupportLevel = 'yes' | 'no' | 'partial'
const competitors: Record<string, Record<string, SupportLevel>> = {
  Zzzappy: { compareTimedBreaks: 'yes', compareInputMonitor: 'yes', compareDynamic: 'yes', compareBlink: 'yes', comparePosture: 'yes', compareSceneDetect: 'yes', compareDashboard: 'yes', compareNative: 'yes' },
  LookAway: { compareTimedBreaks: 'yes', compareInputMonitor: 'no', compareDynamic: 'no', compareBlink: 'yes', comparePosture: 'yes', compareSceneDetect: 'yes', compareDashboard: 'no', compareNative: 'yes' },
  'Time Out': { compareTimedBreaks: 'yes', compareInputMonitor: 'no', compareDynamic: 'no', compareBlink: 'no', comparePosture: 'no', compareSceneDetect: 'partial', compareDashboard: 'no', compareNative: 'yes' },
  Stretchly: { compareTimedBreaks: 'yes', compareInputMonitor: 'no', compareDynamic: 'no', compareBlink: 'no', comparePosture: 'no', compareSceneDetect: 'no', compareDashboard: 'no', compareNative: 'no' },
}

let obs: IntersectionObserver | null = null
onMounted(() => {
  if (!el.value) return
  obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { visible.value = true; obs?.disconnect() }
  }, { threshold: 0.1 })
  obs.observe(el.value)
})
onUnmounted(() => obs?.disconnect())
</script>

<template>
  <section ref="el" class="relative overflow-hidden bg-[#070b14] py-28 sm:py-36">
    <div class="zz-grain pointer-events-none absolute inset-0" />
    <div class="relative z-10 mx-auto max-w-5xl px-6">
      <!-- Title -->
      <h2
        class="mb-16 text-center text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl"
        :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)' }"
      >
        {{ t('zzzappy.dualTitle') }}
      </h2>

      <!-- Two cards -->
      <div class="mb-20 grid gap-6 sm:grid-cols-2">
        <!-- Eye Guard -->
        <div
          class="zz-frost group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5"
          :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s' }"
        >
          <div class="absolute inset-0 rounded-3xl opacity-0 ring-1 ring-indigo-400/30 transition-opacity duration-500 group-hover:opacity-100" />
          <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10">
            <Eye class="h-7 w-7 text-indigo-400" />
          </div>
          <h3 class="mb-3 text-xl font-medium text-white">{{ t('zzzappy.dualEyeTitle') }}</h3>
          <p class="text-sm leading-relaxed text-white/45">{{ t('zzzappy.dualEyeDesc') }}</p>
        </div>

        <!-- Arm Guard -->
        <div
          class="zz-frost group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5"
          :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s' }"
        >
          <div class="absolute inset-0 rounded-3xl opacity-0 ring-1 ring-orange-400/30 transition-opacity duration-500 group-hover:opacity-100" />
          <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">
            <Activity class="h-7 w-7 text-orange-400" />
          </div>
          <h3 class="mb-3 text-xl font-medium text-white">{{ t('zzzappy.dualArmTitle') }}</h3>
          <p class="text-sm leading-relaxed text-white/45">{{ t('zzzappy.dualArmDesc') }}</p>
        </div>
      </div>

      <!-- Comparison table -->
      <h3
        class="mb-8 text-center text-lg font-medium text-white/60"
        :style="{ opacity: visible ? '1' : '0', transition: 'opacity 0.6s ease 0.4s' }"
      >
        {{ t('zzzappy.compareTitle') }}
      </h3>
      <div
        class="zz-frost overflow-x-auto rounded-2xl"
        :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1) 0.5s' }"
      >
        <table class="w-full min-w-[540px] text-sm">
          <thead>
            <tr class="border-b border-white/[0.06]">
              <th class="px-5 py-4 text-left font-medium text-white/40">{{ t('zzzappy.compareFeature') }}</th>
              <th
                v-for="name in Object.keys(competitors)" :key="name"
                class="px-4 py-4 text-center font-medium"
                :class="name === 'Zzzappy' ? 'text-emerald-400' : 'text-white/40'"
              >
                {{ name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in compareRows" :key="row"
              class="border-b border-white/[0.03] last:border-0"
            >
              <td class="px-5 py-3.5 text-white/50">{{ t(`zzzappy.${row}`) }}</td>
              <td
                v-for="name in Object.keys(competitors)" :key="name"
                class="px-4 py-3.5 text-center"
              >
                <Check v-if="competitors[name][row] === 'yes'" class="mx-auto h-4 w-4" :class="name === 'Zzzappy' ? 'text-emerald-400' : 'text-white/30'" />
                <X v-else-if="competitors[name][row] === 'no'" class="mx-auto h-4 w-4 text-white/10" />
                <span v-else class="text-xs text-white/25">~</span>
              </td>
            </tr>
          </tbody>
        </table>
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
