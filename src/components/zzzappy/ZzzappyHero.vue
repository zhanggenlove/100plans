<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const show = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    show.value = true
  })
})
</script>

<template>
  <section
    class="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#0d0815]"
  >
    <!-- Base warm wash -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(236,72,153,0.12)_0%,transparent_55%),radial-gradient(ellipse_90%_60%_at_100%_50%,rgba(59,130,246,0.08)_0%,transparent_50%),radial-gradient(ellipse_80%_50%_at_0%_80%,rgba(249,115,22,0.1)_0%,transparent_50%)]"
    />

    <!-- Floating gradient orbs -->
    <div class="pointer-events-none absolute inset-0">
      <div class="zz-orb zz-orb--orange" />
      <div class="zz-orb zz-orb--pink" />
      <div class="zz-orb zz-orb--purple" />
    </div>

    <!-- Grain overlay -->
    <div class="zz-grain pointer-events-none absolute inset-0" />

    <!-- Content -->
    <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
      <!-- App icon -->
      <div
        class="mx-auto mb-12 h-[140px] w-[140px] overflow-hidden rounded-[32px] shadow-2xl shadow-[#ec4899]/15 ring-1 ring-white/10"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'scale(1)' : 'scale(0.88)',
          transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
        }"
      >
        <img
          src="/images/apps/zzzappy-icon-hd.png"
          alt="Zzzappy"
          class="h-full w-full object-cover"
        />
      </div>

      <!-- Title -->
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

      <!-- Tagline -->
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

      <!-- Subtitle -->
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

      <!-- CTA -->
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
          class="zz-cta inline-flex items-center justify-center rounded-full px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-[#f97316]/20 transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#ec4899]/25 active:scale-[0.99]"
        >
          {{ t('zzzappy.ctaSoon') }}
        </button>
      </div>

      <!-- How + badges -->
      <div
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'translateY(0)' : 'translateY(14px)',
          transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
        }"
      >
        <p
          class="mb-6 text-xs font-medium tracking-[0.2em] text-[#fdba74]/90 uppercase"
        >
          {{ t('zzzappy.heroHow') }}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <span
            class="rounded-full bg-white/[0.07] px-4 py-2 text-xs text-white/55 ring-1 ring-white/[0.08]"
            :style="{
              opacity: show ? '1' : '0',
              transform: show ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.58s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.58s',
            }"
          >
            {{ t('zzzappy.badge1') }}
          </span>
          <span
            class="rounded-full bg-white/[0.07] px-4 py-2 text-xs text-white/55 ring-1 ring-white/[0.08]"
            :style="{
              opacity: show ? '1' : '0',
              transform: show ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.66s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.66s',
            }"
          >
            {{ t('zzzappy.badge2') }}
          </span>
          <span
            class="rounded-full border border-[#f97316]/25 bg-gradient-to-r from-[#f97316]/15 to-[#ec4899]/15 px-4 py-2 text-xs text-[#fda4af] ring-1 ring-[#ec4899]/20"
            :style="{
              opacity: show ? '1' : '0',
              transform: show ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.74s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.74s',
            }"
          >
            {{ t('zzzappy.badge3') }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.zz-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  animation: zz-float 22s ease-in-out infinite;
}
.zz-orb--orange {
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, transparent 70%);
  top: 8%;
  left: 12%;
}
.zz-orb--pink {
  width: 440px;
  height: 440px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%);
  top: 42%;
  right: 5%;
  animation-delay: -8s;
  animation-duration: 26s;
}
.zz-orb--purple {
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
  bottom: 6%;
  left: 38%;
  animation-delay: -14s;
  animation-duration: 24s;
}
@keyframes zz-float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(28px, -36px) scale(1.04);
  }
  66% {
    transform: translate(-24px, 22px) scale(0.96);
  }
}
.zz-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}
.zz-cta {
  background: linear-gradient(135deg, #f97316 0%, #ec4899 45%, #8b5cf6 78%, #3b82f6 100%);
  background-size: 140% 140%;
  background-position: 0% 50%;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-position 0.5s ease;
}
.zz-cta:hover {
  background-position: 100% 50%;
}
@media (prefers-reduced-motion: reduce) {
  .zz-orb {
    animation: none;
  }
  .zz-cta {
    background-position: 50% 50%;
  }
  .zz-cta:hover {
    background-position: 50% 50%;
  }
}
</style>
