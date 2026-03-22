<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const loc = computed(() => (['zh', 'ja'].includes(locale.value) ? locale.value : 'en'))

const screenshotSrc = computed(
  () => `/images/screenshots/zzzappy/${loc.value}/02_arm_guard.png`,
)

const visible = ref(false)
const el = ref<HTMLElement | null>(null)

const dimensions = [
  { i18nKey: 'armD1' as const, icon: '⌨️', ring: 'from-[#f97316]/30 to-[#f97316]/5' },
  { i18nKey: 'armD2' as const, icon: '🖱', ring: 'from-[#ec4899]/30 to-[#ec4899]/5' },
  { i18nKey: 'armD3' as const, icon: '🔲', ring: 'from-[#8b5cf6]/30 to-[#8b5cf6]/5' },
  { i18nKey: 'armD4' as const, icon: '↕️', ring: 'from-[#3b82f6]/30 to-[#3b82f6]/5' },
  { i18nKey: 'armD5' as const, icon: '⏱', ring: 'from-[#f97316]/25 to-[#ec4899]/15' },
]

const tilt = reactive({ x: 0, y: 0, active: false })
function onWindowMove(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  tilt.x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
  tilt.y = ((e.clientY - rect.top) / rect.height - 0.5) * -12
}
function onWindowEnter() { tilt.active = true }
function onWindowLeave() { tilt.active = false; tilt.x = 0; tilt.y = 0 }

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
    class="arm-section relative overflow-hidden bg-[#0d0815] py-32"
  >
    <div class="arm-grain pointer-events-none absolute inset-0" />
    <div
      class="pointer-events-none absolute -right-28 top-1/3 h-[400px] w-[400px] rounded-full bg-[#3b82f6]/[0.07] blur-[100px]"
    />
    <div
      class="pointer-events-none absolute -left-24 bottom-1/4 h-[380px] w-[380px] rounded-full bg-[#f97316]/[0.08] blur-[100px]"
    />
    <div
      class="pointer-events-none absolute left-1/3 top-0 h-[260px] w-[520px] -translate-x-1/2 rounded-full bg-[#ec4899]/[0.06] blur-[110px]"
    />

    <div
      class="relative z-10 mx-auto max-w-6xl px-6"
      :style="{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
      }"
    >
      <div
        class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24"
      >
        <!-- Screenshot LEFT on desktop; second on mobile -->
        <div
          class="order-2 lg:order-1"
          :style="{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
            transition:
              'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
            perspective: '1200px',
          }"
        >
          <div
            class="arm-window overflow-hidden rounded-2xl bg-[#14101c] ring-1 ring-white/[0.12]"
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
                <span
                  class="h-3 w-3 rounded-full bg-[#ff5f57] ring-1 ring-black/10"
                />
                <span
                  class="h-3 w-3 rounded-full bg-[#febc2e] ring-1 ring-black/10"
                />
                <span
                  class="h-3 w-3 rounded-full bg-[#3b82f6] ring-1 ring-black/10"
                />
              </div>
              <span
                class="ml-1 flex-1 truncate text-center text-[11px] font-medium tracking-wide text-white/35"
              >Zzzappy</span>
            </div>
            <div class="relative bg-[#0d0815] p-2 sm:p-3">
              <img
                :src="screenshotSrc"
                :alt="t('zzzappy.armTitle')"
                class="h-auto w-full rounded-lg object-cover object-top shadow-inner"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <!-- Text RIGHT on desktop; first on mobile -->
        <div class="order-1 flex flex-col gap-10 lg:order-2">
          <div class="flex flex-col gap-5">
            <p
              class="text-xs font-semibold uppercase tracking-widest text-[#fb7185]"
              :style="{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.55s ease 0.05s, transform 0.55s ease 0.05s',
              }"
            >
              {{ t('zzzappy.armSubtitle') }}
            </p>
            <h2
              class="text-4xl font-bold leading-tight text-white md:text-5xl md:leading-[1.1]"
              :style="{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition:
                  'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
              }"
            >
              {{ t('zzzappy.armTitle') }}
            </h2>
            <p
              class="max-w-xl text-lg leading-relaxed text-white/65"
              :style="{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition:
                  'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.18s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.18s',
              }"
            >
              {{ t('zzzappy.armDesc') }}
            </p>
          </div>

          <div
            class="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3.5"
          >
            <div
              v-for="(d, i) in dimensions"
              :key="d.i18nKey"
              class="arm-frost flex flex-col items-center gap-2.5 rounded-2xl px-3 py-4 text-center"
              :style="{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(14px)',
                transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.26 + i * 0.06}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.26 + i * 0.06}s`,
              }"
            >
              <span
                class="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br text-lg leading-none ring-1 ring-white/[0.08]"
                :class="d.ring"
                aria-hidden="true"
              >
                {{ d.icon }}
              </span>
              <span
                class="text-[13px] font-medium leading-snug text-white/80"
              >{{ t(`zzzappy.${d.i18nKey}`) }}</span>
            </div>
          </div>

          <p
            class="max-w-xl text-xs leading-relaxed text-[#fda4af]/70"
            :style="{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.55s ease 0.55s, transform 0.55s ease 0.55s',
            }"
          >
            {{ t('zzzappy.armPresets') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.arm-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}

.arm-frost {
  background-color: rgb(255 255 255 / 0.04);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 0.04) inset;
  border: 1px solid rgb(255 255 255 / 0.06);
}

.arm-window {
  box-shadow:
    0 32px 80px -20px rgba(0, 0, 0, 0.75),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset;
}
</style>
