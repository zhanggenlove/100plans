<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronDown } from 'lucide-vue-next'

const { t } = useI18n()
const show = ref(false)

onMounted(() => {
  requestAnimationFrame(() => { show.value = true })
})
</script>

<template>
  <section class="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#070b14]">
    <!-- Floating gradient orbs -->
    <div class="pointer-events-none absolute inset-0">
      <div class="zz-orb zz-orb--green" />
      <div class="zz-orb zz-orb--purple" />
      <div class="zz-orb zz-orb--orange" />
    </div>

    <!-- Grain overlay -->
    <div class="zz-grain pointer-events-none absolute inset-0" />

    <!-- Content -->
    <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
      <!-- App icon -->
      <div
        class="mx-auto mb-8 h-28 w-28 overflow-hidden rounded-[28px] shadow-2xl shadow-emerald-500/20 ring-1 ring-white/10"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'scale(1)' : 'scale(0.7)',
          transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
        }"
      >
        <img src="/images/apps/zzzappy.png" alt="Zzzappy" class="h-full w-full" />
      </div>

      <!-- Title -->
      <h1
        class="mb-4 text-6xl font-extralight tracking-tight text-white sm:text-7xl md:text-8xl"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s',
        }"
      >
        Zzzappy
      </h1>

      <!-- Tagline -->
      <p
        class="mb-3 text-lg font-light tracking-wide text-emerald-300/90 sm:text-xl"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s',
        }"
      >
        {{ t('zzzappy.tagline') }}
      </p>

      <!-- Subtitle -->
      <p
        class="mx-auto mb-10 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s',
        }"
      >
        {{ t('zzzappy.subtitle') }}
      </p>

      <!-- CTA -->
      <div
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s',
        }"
      >
        <button
          class="group relative inline-flex items-center gap-2.5 rounded-full bg-white/10 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.15] hover:shadow-lg hover:shadow-emerald-500/10"
        >
          <span class="relative z-10">{{ t('zzzappy.ctaSoon') }}</span>
          <span class="absolute inset-0 rounded-full ring-1 ring-inset ring-white/[0.08]" />
        </button>
      </div>

      <!-- Badges -->
      <div
        class="mt-8 flex flex-wrap items-center justify-center gap-3"
        :style="{
          opacity: show ? '1' : '0',
          transition: 'opacity 0.7s ease 0.7s',
        }"
      >
        <span class="rounded-full bg-white/[0.06] px-3.5 py-1.5 text-xs text-white/40 ring-1 ring-white/[0.06]">
          {{ t('zzzappy.macOS') }}
        </span>
        <span class="rounded-full bg-white/[0.06] px-3.5 py-1.5 text-xs text-white/40 ring-1 ring-white/[0.06]">
          {{ t('zzzappy.languages') }}
        </span>
        <span class="rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs text-emerald-400/70 ring-1 ring-emerald-500/20">
          {{ t('zzzappy.freeTrial') }}
        </span>
      </div>
    </div>

    <!-- Scroll hint -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      :style="{
        opacity: show ? '1' : '0',
        transition: 'opacity 1s ease 1.2s',
      }"
    >
      <p class="mb-2 text-xs tracking-widest text-white/20 uppercase">{{ t('zzzappy.scrollHint') }}</p>
      <ChevronDown class="mx-auto h-4 w-4 animate-bounce text-white/20" />
    </div>
  </section>
</template>

<style scoped>
.zz-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  animation: zz-float 20s ease-in-out infinite;
}
.zz-orb--green {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(34,197,94,0.25) 0%, transparent 70%);
  top: 10%; left: 20%;
}
.zz-orb--purple {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%);
  top: 50%; right: 10%;
  animation-delay: -7s;
  animation-duration: 25s;
}
.zz-orb--orange {
  width: 350px; height: 350px;
  background: radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%);
  bottom: 10%; left: 40%;
  animation-delay: -13s;
  animation-duration: 22s;
}
@keyframes zz-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -40px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}
.zz-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}
@media (prefers-reduced-motion: reduce) {
  .zz-orb { animation: none; }
}
</style>
