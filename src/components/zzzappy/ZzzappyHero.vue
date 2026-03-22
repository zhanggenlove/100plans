<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const show = ref(false)

const mouse = reactive({ x: 0, y: 0 })
let rafId = 0

function onMouseMove(e: MouseEvent) {
  cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(() => {
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    mouse.x = (e.clientX - cx) / cx
    mouse.y = (e.clientY - cy) / cy
  })
}

onMounted(() => {
  requestAnimationFrame(() => { show.value = true })
  window.addEventListener('mousemove', onMouseMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <section
    class="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#0d0815]"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(236,72,153,0.12)_0%,transparent_55%),radial-gradient(ellipse_90%_60%_at_100%_50%,rgba(59,130,246,0.08)_0%,transparent_50%),radial-gradient(ellipse_80%_50%_at_0%_80%,rgba(249,115,22,0.1)_0%,transparent_50%)]"
    />

    <div class="pointer-events-none absolute inset-0">
      <div
        class="zz-orb zz-orb--orange"
        :style="{ transform: `translate(${mouse.x * -30}px, ${mouse.y * -20}px)` }"
      />
      <div
        class="zz-orb zz-orb--pink"
        :style="{ transform: `translate(${mouse.x * 25}px, ${mouse.y * 15}px)` }"
      />
      <div
        class="zz-orb zz-orb--purple"
        :style="{ transform: `translate(${mouse.x * -18}px, ${mouse.y * 22}px)` }"
      />
    </div>

    <div class="zz-grain pointer-events-none absolute inset-0" />

    <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
      <div
        class="zz-icon-glow mx-auto mb-12 h-[140px] w-[140px] overflow-hidden rounded-[32px] ring-1 ring-white/10"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'scale(1)' : 'scale(0.88)',
          transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
        }"
      >
        <img src="/images/apps/zzzappy-icon-hd.png" alt="Zzzappy" class="h-full w-full object-cover" />
      </div>

      <h1
        class="mb-6 text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.08s, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.08s',
        }"
      >
        Zzzappy
      </h1>

      <p
        class="mb-6 text-lg font-medium tracking-wide text-[#fb7185] sm:text-xl"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'translateY(0)' : 'translateY(22px)',
          transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.18s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.18s',
        }"
      >
        {{ t('zzzappy.tagline') }}
      </p>

      <p
        class="mx-auto mb-12 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.78s cubic-bezier(0.16, 1, 0.3, 1) 0.28s, transform 0.78s cubic-bezier(0.16, 1, 0.3, 1) 0.28s',
        }"
      >
        {{ t('zzzappy.subtitle') }}
      </p>

      <div
        class="mb-12"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'translateY(0)' : 'translateY(18px)',
          transition: 'opacity 0.78s cubic-bezier(0.16, 1, 0.3, 1) 0.38s, transform 0.78s cubic-bezier(0.16, 1, 0.3, 1) 0.38s',
        }"
      >
        <button
          type="button"
          class="zz-cta group relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-[#f97316]/20 transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#ec4899]/30 active:scale-[0.99]"
        >
          <span class="zz-shimmer" />
          <span class="relative z-10">{{ t('zzzappy.ctaSoon') }}</span>
        </button>
      </div>

      <div
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'translateY(0)' : 'translateY(14px)',
          transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
        }"
      >
        <p class="mb-6 text-xs font-medium tracking-[0.2em] text-[#fdba74]/90 uppercase">
          {{ t('zzzappy.heroHow') }}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <span
            v-for="(badge, i) in ['badge1', 'badge2', 'badge3']"
            :key="badge"
            class="rounded-full px-4 py-2 text-xs ring-1 transition-colors duration-300 hover:bg-white/[0.06]"
            :class="badge === 'badge3'
              ? 'border border-[#f97316]/25 bg-gradient-to-r from-[#f97316]/15 to-[#ec4899]/15 text-[#fda4af] ring-[#ec4899]/20'
              : 'bg-white/[0.07] text-white/55 ring-white/[0.08]'"
            :style="{
              opacity: show ? '1' : '0',
              transform: show ? 'translateY(0)' : 'translateY(10px)',
              transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${0.58 + i * 0.08}s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${0.58 + i * 0.08}s`,
            }"
          >
            {{ t(`zzzappy.${badge}`) }}
          </span>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2"
      :style="{ opacity: show ? '1' : '0', transition: 'opacity 1s ease 1.2s' }"
    >
      <div class="zz-scroll-arrow" />
    </div>
  </section>
</template>

<style scoped>
.zz-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  animation: zz-float 22s ease-in-out infinite;
  transition: transform 0.3s ease-out;
  will-change: transform;
}
.zz-orb--orange {
  width: 520px; height: 520px;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, transparent 70%);
  top: 8%; left: 12%;
}
.zz-orb--pink {
  width: 440px; height: 440px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%);
  top: 42%; right: 5%;
  animation-delay: -8s; animation-duration: 26s;
}
.zz-orb--purple {
  width: 380px; height: 380px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
  bottom: 6%; left: 38%;
  animation-delay: -14s; animation-duration: 24s;
}
@keyframes zz-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(28px, -36px) scale(1.04); }
  66% { transform: translate(-24px, 22px) scale(0.96); }
}

.zz-icon-glow {
  box-shadow:
    0 8px 40px -4px rgba(236, 72, 153, 0.3),
    0 0 60px -8px rgba(249, 115, 22, 0.2);
  animation: icon-pulse 4s ease-in-out infinite;
}
@keyframes icon-pulse {
  0%, 100% { box-shadow: 0 8px 40px -4px rgba(236, 72, 153, 0.3), 0 0 60px -8px rgba(249, 115, 22, 0.2); }
  50% { box-shadow: 0 8px 50px -2px rgba(236, 72, 153, 0.45), 0 0 80px -4px rgba(249, 115, 22, 0.35); }
}

.zz-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}

.zz-cta {
  background: linear-gradient(135deg, #f97316 0%, #ec4899 45%, #8b5cf6 78%, #3b82f6 100%);
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.zz-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 30%,
    rgba(255, 255, 255, 0.2) 45%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0.2) 55%,
    transparent 70%
  );
  background-size: 200% 100%;
  animation: shimmer 3s ease-in-out infinite;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.zz-scroll-arrow {
  width: 20px; height: 20px;
  border-right: 2px solid rgba(255,255,255,0.2);
  border-bottom: 2px solid rgba(255,255,255,0.2);
  transform: rotate(45deg);
  animation: scroll-bounce 2s ease-in-out infinite;
}
@keyframes scroll-bounce {
  0%, 100% { transform: rotate(45deg) translateY(0); opacity: 0.4; }
  50% { transform: rotate(45deg) translateY(8px); opacity: 0.8; }
}

@media (prefers-reduced-motion: reduce) {
  .zz-orb { animation: none; }
  .zz-icon-glow { animation: none; }
  .zz-cta { animation: none; background-position: 50% 50%; }
  .zz-shimmer { animation: none; display: none; }
  .zz-scroll-arrow { animation: none; }
}
</style>
