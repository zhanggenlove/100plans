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
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!el.value) return
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.1 },
  )
  observer.observe(el.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <section ref="el" class="relative overflow-hidden bg-[#0d0815] py-24">
    <div class="pointer-events-none absolute inset-0 ss-grain" />

    <div
      class="ss-track flex gap-6 px-6"
      :style="{
        opacity: visible ? '1' : '0',
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
      }"
    >
      <div
        v-for="(file, i) in screenshots"
        :key="file"
        class="ss-card shrink-0"
        :style="{
          opacity: visible ? '1' : '0',
          transform: visible ? 'scale(1)' : 'scale(0.92)',
          transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${0.08 + i * 0.06}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${0.08 + i * 0.06}s`,
        }"
      >
        <img
          :src="`/images/screenshots/zzzappy/${loc}/${file}`"
          :alt="file.replace(/^\d+_/, '').replace('.png', '')"
          class="ss-img"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.ss-track {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding-bottom: 8px;
}
.ss-track::-webkit-scrollbar {
  display: none;
}
.ss-card {
  width: 320px;
  scroll-snap-align: center;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.06);
  transition: transform 0.35s ease;
}
.ss-card:hover {
  transform: scale(1.03) !important;
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
@media (prefers-reduced-motion: reduce) {
  .ss-card:hover {
    transform: none !important;
  }
}
</style>
