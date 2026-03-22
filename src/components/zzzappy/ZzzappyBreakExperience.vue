<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Heart, Lock, MessageSquare } from 'lucide-vue-next'

const { t } = useI18n()
const visible = ref(false)
const el = ref<HTMLElement | null>(null)

const effects = ['breakFrost', 'breakBlur', 'breakGrain', 'breakGlow'] as const
const activeEffect = ref(0)

const highlights = [
  { key: 'breakHeart', icon: Heart },
  { key: 'breakLock', icon: Lock },
  { key: 'breakCustomMsg', icon: MessageSquare },
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
    <!-- Full-width break simulation -->
    <div class="pointer-events-none absolute inset-0">
      <div class="zz-orb-break zz-orb-break--a" />
      <div class="zz-orb-break zz-orb-break--b" />
    </div>
    <div class="zz-grain pointer-events-none absolute inset-0" />

    <div class="relative z-10 mx-auto max-w-5xl px-6">
      <!-- Title -->
      <div class="mb-16 text-center">
        <h2
          class="mb-5 text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl"
          :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)' }"
        >
          {{ t('zzzappy.breakTitle') }}
        </h2>
        <p
          class="mx-auto max-w-xl text-base text-white/40"
          :style="{ opacity: visible ? '1' : '0', transition: 'opacity 0.6s ease 0.15s' }"
        >
          {{ t('zzzappy.breakDesc') }}
        </p>
      </div>

      <!-- Break mockup -->
      <div
        class="zz-frost-deep mx-auto mb-14 max-w-lg rounded-3xl p-10 text-center sm:p-14"
        :style="{ opacity: visible ? '1' : '0', transform: visible ? 'scale(1)' : 'scale(0.92)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s' }"
      >
        <!-- Heart SVG -->
        <div class="mx-auto mb-6 h-24 w-24 sm:h-28 sm:w-28">
          <svg viewBox="0 0 100 100" class="h-full w-full">
            <defs>
              <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#22c55e" />
                <stop offset="100%" stop-color="#84cc16" />
              </linearGradient>
              <clipPath id="heartClip">
                <path d="M50 88 C25 65,5 50,5 32 A20 20 0 0 1 50 20 A20 20 0 0 1 95 32 C95 50,75 65,50 88Z" />
              </clipPath>
            </defs>
            <path d="M50 88 C25 65,5 50,5 32 A20 20 0 0 1 50 20 A20 20 0 0 1 95 32 C95 50,75 65,50 88Z" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />
            <rect clip-path="url(#heartClip)" x="0" :y="visible ? 25 : 100" width="100" height="75" fill="url(#heartGrad)" opacity="0.7" style="transition: y 2.5s cubic-bezier(0.16,1,0.3,1) 0.5s" />
          </svg>
        </div>

        <p class="mb-2 text-4xl font-extralight tabular-nums text-white/80">3:42</p>
        <p class="text-sm text-white/30">Rest your eyes and stretch your arms</p>
      </div>

      <!-- Effect tabs -->
      <div
        class="mb-12 flex flex-wrap items-center justify-center gap-2"
        :style="{ opacity: visible ? '1' : '0', transition: 'opacity 0.6s ease 0.5s' }"
      >
        <button
          v-for="(eff, i) in effects" :key="eff"
          class="rounded-full px-4 py-1.5 text-xs transition-all duration-200"
          :class="activeEffect === i
            ? 'bg-white/10 text-white ring-1 ring-white/20'
            : 'text-white/30 hover:text-white/50'"
          @click="activeEffect = i"
        >
          {{ t(`zzzappy.${eff}`) }}
        </button>
      </div>

      <!-- Highlights -->
      <div class="grid gap-4 sm:grid-cols-3">
        <div
          v-for="(h, i) in highlights" :key="h.key"
          class="zz-frost flex items-start gap-4 rounded-2xl p-5"
          :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${0.5 + i * 0.1}s` }"
        >
          <div class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
            <component :is="h.icon" class="h-4 w-4 text-emerald-400" />
          </div>
          <p class="text-sm leading-relaxed text-white/50">{{ t(`zzzappy.${h.key}`) }}</p>
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
.zz-frost-deep {
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 0 80px rgba(34,197,94,0.05);
}
.zz-orb-break {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  animation: zz-drift 30s ease-in-out infinite;
}
.zz-orb-break--a {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%);
  top: 20%; left: 10%;
}
.zz-orb-break--b {
  width: 350px; height: 350px;
  background: radial-gradient(circle, rgba(132,204,22,0.1) 0%, transparent 70%);
  bottom: 15%; right: 15%;
  animation-delay: -10s;
}
@keyframes zz-drift {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(20px, -30px); }
}
.zz-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}
@media (prefers-reduced-motion: reduce) {
  .zz-orb-break { animation: none; }
}
</style>
