<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const loc = computed(() => (['zh', 'ja'].includes(locale.value) ? locale.value : 'en'))

const screenshots = [
  '01_eye_guard.png',
  '02_arm_guard.png',
  '03_break_plan.png',
  '04_smart_pause.png',
  '05_wellness.png',
  '06_break_screen.png',
  '07_dashboard.png',
]

const visible = ref(false)
const el = ref<HTMLElement | null>(null)
const paused = ref(false)
const lightbox = ref<string | null>(null)
const lightboxReady = ref(false)
let observer: IntersectionObserver | null = null

function openLightbox(file: string) {
  lightbox.value = `/images/screenshots/zzzappy/${loc.value}/${file}`
  requestAnimationFrame(() => {
    lightboxReady.value = true
  })
}

function closeLightbox() {
  lightboxReady.value = false
  setTimeout(() => { lightbox.value = null }, 300)
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') closeLightbox()
}

onMounted(() => {
  if (!el.value) return
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.05 },
  )
  observer.observe(el.value)
  window.addEventListener('keydown', onKey)
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <section ref="el" class="relative overflow-hidden bg-[#0d0815] py-20">
    <div class="pointer-events-none absolute inset-0 ss-grain" />

    <div
      class="ss-marquee-wrap"
      :style="{
        opacity: visible ? '1' : '0',
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
      }"
      @mouseenter="paused = true"
      @mouseleave="paused = false"
    >
      <div class="ss-marquee" :class="{ 'ss-paused': paused }">
        <div
          v-for="(file, i) in [...screenshots, ...screenshots]"
          :key="`${file}-${i}`"
          class="ss-card"
          @click="openLightbox(screenshots[i % screenshots.length])"
        >
          <img
            :src="`/images/screenshots/zzzappy/${loc}/${screenshots[i % screenshots.length]}`"
            :alt="screenshots[i % screenshots.length].replace(/^\d+_/, '').replace('.png', '')"
            class="ss-img"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="lightbox"
        class="ss-lightbox"
        :class="{ 'ss-lightbox--active': lightboxReady }"
        @click.self="closeLightbox"
      >
        <button
          class="absolute right-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl ring-1 ring-white/20 transition hover:bg-white/20"
          @click="closeLightbox"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <img
          :src="lightbox"
          alt=""
          class="ss-lightbox-img"
          :class="{ 'ss-lightbox-img--active': lightboxReady }"
        />
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.ss-marquee-wrap {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
}
.ss-marquee {
  display: flex;
  gap: 20px;
  width: max-content;
  animation: marquee 40s linear infinite;
}
.ss-marquee.ss-paused {
  animation-play-state: paused;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.ss-card {
  width: 300px;
  flex-shrink: 0;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.06);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
}
.ss-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 0 30px -4px rgba(236, 72, 153, 0.2);
}
.ss-img {
  width: 100%;
  height: auto;
  display: block;
}
.ss-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}

.ss-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0px);
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
}
.ss-lightbox--active {
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(20px);
}
.ss-lightbox-img {
  max-width: 90vw;
  max-height: 85vh;
  border-radius: 16px;
  box-shadow: 0 32px 80px rgba(0,0,0,0.6);
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.ss-lightbox-img--active {
  opacity: 1;
  transform: scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .ss-marquee { animation: none; }
  .ss-card:hover { transform: none; }
}
</style>
