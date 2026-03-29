<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ZzzappyLightbox from './ZzzappyLightbox.vue'

const { t, locale } = useI18n()
const lightboxRef = ref<InstanceType<typeof ZzzappyLightbox>>()

const loc = computed(() => (['zh', 'ja'].includes(locale.value) ? locale.value : 'en'))

const screenshotSrc = computed(
  () => `/images/screenshots/zzzappy/${loc.value}/07_dashboard.png`,
)

const tilt = reactive({ x: 0, y: 0, active: false })
function onWindowMove(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  tilt.x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
  tilt.y = ((e.clientY - rect.top) / rect.height - 0.5) * -12
}
function onWindowEnter() { tilt.active = true }
function onWindowLeave() { tilt.active = false; tilt.x = 0; tilt.y = 0 }

const visible = ref(false)
const el = ref<HTMLElement | null>(null)

let obs: IntersectionObserver | null = null
onMounted(() => {
  if (!el.value) return
  obs = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting) {
        visible.value = true
        obs?.disconnect()
      }
    },
    { threshold: 0.12 },
  )
  obs.observe(el.value)
})
onUnmounted(() => obs?.disconnect())
</script>

<template>
  <section
    ref="el"
    class="dash-section relative overflow-hidden bg-[#0d0815] py-32"
  >
    <div class="dash-grain pointer-events-none absolute inset-0" />
    <div
      class="pointer-events-none absolute -left-20 top-1/3 h-[320px] w-[320px] rounded-full bg-[#f97316]/[0.06] blur-[90px]"
    />
    <div
      class="pointer-events-none absolute -right-24 bottom-1/4 h-[300px] w-[300px] rounded-full bg-[#8b5cf6]/[0.07] blur-[95px]"
    />
    <div
      class="pointer-events-none absolute left-1/3 top-0 h-[200px] w-[400px] rounded-full bg-[#ec4899]/[0.05] blur-[100px]"
    />

    <div class="relative z-10 mx-auto max-w-6xl px-6">
      <div
        class="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20"
      >
        <!-- Left: copy -->
        <div class="flex flex-col gap-6 text-center lg:text-left">
          <p
            class="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb7185]"
            :style="{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition:
                'opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
            }"
          >
            {{ t('zzzappy.dashSubtitle') }}
          </p>
          <h2
            class="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.12]"
            :style="{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition:
                'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.06s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.06s',
            }"
          >
            {{ t('zzzappy.dashTitle') }}
          </h2>
          <p
            class="mx-auto max-w-xl text-base leading-relaxed text-white/65 lg:mx-0"
            :style="{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition:
                'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s',
            }"
          >
            {{ t('zzzappy.dashDesc') }}
          </p>
          <p
            class="mx-auto flex max-w-xl items-start gap-2 text-left text-sm leading-relaxed text-white/45 lg:mx-0"
            :style="{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition:
                'opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            }"
          >
            <span class="shrink-0 select-none" aria-hidden="true">🔒</span>
            <span>{{ t('zzzappy.dashPrivacy') }}</span>
          </p>
        </div>

        <!-- Right: macOS window + screenshot -->
        <div
          :style="{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.97)',
            transition:
              'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            perspective: '1200px',
          }"
        >
          <div
            class="dash-window overflow-hidden rounded-2xl bg-[#14101c] ring-1 ring-white/[0.12]"
            :style="{
              transform: tilt.active ? `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` : 'rotateY(0) rotateX(0)',
              transition: tilt.active ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            }"
            @mousemove="onWindowMove"
            @mouseenter="onWindowEnter"
            @mouseleave="onWindowLeave"
          >
            <div
              class="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.03] px-4 py-3 backdrop-blur-xl"
            >
              <div class="flex gap-2">
                <span class="h-3 w-3 rounded-full bg-[#ff5f57] ring-1 ring-black/10" />
                <span class="h-3 w-3 rounded-full bg-[#febc2e] ring-1 ring-black/10" />
                <span class="h-3 w-3 rounded-full bg-[#3b82f6] ring-1 ring-black/10" />
              </div>
              <span
                class="ml-1 flex-1 truncate text-center text-[11px] font-medium tracking-wide text-white/35"
              >Zzzappy</span>
            </div>
            <div class="relative bg-[#0d0815] p-2 sm:p-3">
              <img
                :src="screenshotSrc"
                :alt="t('zzzappy.dashTitle')"
                class="h-auto w-full cursor-pointer rounded-lg object-cover object-top shadow-inner transition-opacity duration-200 hover:opacity-90"
                loading="lazy"
                decoding="async"
                @click="lightboxRef?.open(screenshotSrc)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <ZzzappyLightbox ref="lightboxRef" />
  </section>
</template>

<style scoped>
.dash-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}

.dash-window {
  box-shadow:
    0 32px 80px -20px rgba(0, 0, 0, 0.75),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset,
    0 0 48px -8px rgba(249, 115, 22, 0.28),
    0 0 56px -10px rgba(236, 72, 153, 0.22),
    0 0 64px -12px rgba(139, 92, 246, 0.2);
}
</style>
