<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const loc = computed(() => (['zh', 'ja'].includes(locale.value) ? locale.value : 'en'))

const screenshotSrc = computed(
  () => `/images/screenshots/zzzappy/${loc.value}/06_break_screen.png`,
)

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
    class="break-section relative overflow-hidden bg-[#0d0815] py-32"
  >
    <div class="break-grain pointer-events-none absolute inset-0" />
    <div
      class="pointer-events-none absolute -left-24 top-1/4 h-[380px] w-[380px] rounded-full bg-[#f97316]/[0.07] blur-[100px]"
    />
    <div
      class="pointer-events-none absolute -right-16 bottom-1/3 h-[340px] w-[340px] rounded-full bg-[#8b5cf6]/[0.08] blur-[100px]"
    />
    <div
      class="pointer-events-none absolute left-1/4 top-0 h-[240px] w-[480px] rounded-full bg-[#ec4899]/[0.06] blur-[110px]"
    />
    <div
      class="pointer-events-none absolute right-1/3 bottom-0 h-[200px] w-[420px] rounded-full bg-[#3b82f6]/[0.05] blur-[100px]"
    />

    <div class="relative z-10 mx-auto max-w-6xl px-6">
      <div
        class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24"
      >
        <!-- Desktop: left screenshot; mobile: below text -->
        <div
          class="order-2 lg:order-1"
          :style="{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
            transition:
              'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.12s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.12s',
          }"
        >
          <div
            class="break-window overflow-hidden rounded-2xl bg-[#14101c] ring-1 ring-white/[0.12]"
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
                :alt="t('zzzappy.breakTitle')"
                class="h-auto w-full rounded-lg object-cover object-top shadow-inner"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <!-- Desktop: right copy; mobile: first -->
        <div
          class="order-1 flex flex-col gap-6 text-center lg:order-2 lg:text-left"
        >
          <div
            class="mx-auto flex max-w-xl flex-col gap-5 lg:mx-0 lg:border-l lg:border-[#fb7185] lg:pl-8"
          >
            <div
              class="mx-auto h-1 w-12 rounded-full bg-[#fb7185] lg:mx-0 lg:hidden"
              aria-hidden="true"
              :style="{
                opacity: visible ? 1 : 0,
                transform: visible ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'center',
                transition: 'opacity 0.5s ease 0.04s, transform 0.55s ease 0.04s',
              }"
            />
            <h2
              class="text-4xl font-bold leading-tight text-white md:text-5xl md:leading-[1.1]"
              :style="{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition:
                  'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.08s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.08s',
              }"
            >
              {{ t('zzzappy.breakTitle') }}
            </h2>
            <p
              class="text-lg leading-relaxed text-white/60"
              :style="{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition:
                  'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.14s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.14s',
              }"
            >
              {{ t('zzzappy.breakSubtitle') }}
            </p>
            <p
              class="text-base leading-relaxed text-white/60"
              :style="{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(14px)',
                transition:
                  'opacity 0.58s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.58s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
              }"
            >
              {{ t('zzzappy.breakDesc') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.break-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}

.break-window {
  box-shadow:
    0 32px 80px -20px rgba(0, 0, 0, 0.75),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset,
    0 0 48px -8px rgba(236, 72, 153, 0.35),
    0 0 72px -12px rgba(139, 92, 246, 0.28);
}
</style>
