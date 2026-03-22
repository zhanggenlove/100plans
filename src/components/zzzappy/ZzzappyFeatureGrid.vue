<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Volume2, Keyboard, Monitor, Globe, Sparkles, SkipForward, Lock, MonitorSmartphone } from 'lucide-vue-next'

const { t } = useI18n()
const visible = ref(false)
const el = ref<HTMLElement | null>(null)

const items = [
  { key: 'gridSounds', descKey: 'gridSoundsDesc', icon: Volume2, color: 'text-amber-400 bg-amber-500/10' },
  { key: 'gridShortcuts', descKey: 'gridShortcutsDesc', icon: Keyboard, color: 'text-blue-400 bg-blue-500/10' },
  { key: 'gridMenuBar', descKey: 'gridMenuBarDesc', icon: Monitor, color: 'text-emerald-400 bg-emerald-500/10' },
  { key: 'gridLanguages', descKey: 'gridLanguagesDesc', icon: Globe, color: 'text-purple-400 bg-purple-500/10' },
  { key: 'gridMicro', descKey: 'gridMicroDesc', icon: Sparkles, color: 'text-cyan-400 bg-cyan-500/10' },
  { key: 'gridSkip', descKey: 'gridSkipDesc', icon: SkipForward, color: 'text-rose-400 bg-rose-500/10' },
  { key: 'gridLock', descKey: 'gridLockDesc', icon: Lock, color: 'text-indigo-400 bg-indigo-500/10' },
  { key: 'gridMultiDisplay', descKey: 'gridMultiDisplayDesc', icon: MonitorSmartphone, color: 'text-teal-400 bg-teal-500/10' },
]

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
      <h2
        class="mb-14 text-center text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl"
        :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)' }"
      >
        {{ t('zzzappy.gridTitle') }}
      </h2>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(item, i) in items" :key="item.key"
          class="zz-frost group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5"
          :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.06}s` }"
        >
          <div class="mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110" :class="item.color.split(' ')[1]">
            <component :is="item.icon" class="h-5 w-5" :class="item.color.split(' ')[0]" />
          </div>
          <h3 class="mb-1 text-sm font-medium text-white/80">{{ t(`zzzappy.${item.key}`) }}</h3>
          <p class="text-xs leading-relaxed text-white/35">{{ t(`zzzappy.${item.descKey}`) }}</p>
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
