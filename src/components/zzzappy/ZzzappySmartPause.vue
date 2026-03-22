<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Video, Play, Calendar, Gamepad2, Target, Clock } from 'lucide-vue-next'

const { t } = useI18n()
const visible = ref(false)
const el = ref<HTMLElement | null>(null)

const scenes = [
  { key: 'pauseMeeting', icon: Video, color: 'text-blue-400 bg-blue-500/10' },
  { key: 'pauseVideo', icon: Play, color: 'text-purple-400 bg-purple-500/10' },
  { key: 'pauseCalendar', icon: Calendar, color: 'text-amber-400 bg-amber-500/10' },
  { key: 'pauseGaming', icon: Gamepad2, color: 'text-rose-400 bg-rose-500/10' },
  { key: 'pauseFocus', icon: Target, color: 'text-emerald-400 bg-emerald-500/10' },
  { key: 'pauseIdle', icon: Clock, color: 'text-cyan-400 bg-cyan-500/10' },
]

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
    <div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
      <h2
        class="mb-5 text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl"
        :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)' }"
      >
        {{ t('zzzappy.pauseTitle') }}
      </h2>
      <p
        class="mx-auto mb-14 max-w-xl text-base text-white/40"
        :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s' }"
      >
        {{ t('zzzappy.pauseDesc') }}
      </p>

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <div
          v-for="(scene, i) in scenes" :key="scene.key"
          class="zz-frost group flex flex-col items-center gap-3 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
          :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.07}s` }"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110" :class="scene.color.split(' ')[1]">
            <component :is="scene.icon" class="h-6 w-6" :class="scene.color.split(' ')[0]" />
          </div>
          <span class="text-xs text-white/50">{{ t(`zzzappy.${scene.key}`) }}</span>
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
