<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
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

const platforms = [
  { name: 'Apple Music', icon: '/images/platforms/apple_music.png', color: '#FF2F56' },
  { name: 'YouTube Music', icon: '/images/platforms/youtube_music.png', color: '#FF0000' },
  { name: 'NetEase Cloud', icon: '/images/platforms/netease.png', color: '#FF314A' },
  { name: 'QQ Music', icon: '/images/platforms/qq_music.png', color: '#31C27C' },
]

const transferPairs = [
  [0, 1], [1, 0], [2, 1], [0, 3], [3, 0],
  [1, 2], [2, 3], [3, 1], [0, 2], [1, 3],
]
const pairIndex = ref(0)
const transitioning = ref(false)

const currentSource = computed(() => platforms[transferPairs[pairIndex.value][0]])
const currentTarget = computed(() => platforms[transferPairs[pairIndex.value][1]])

const songCounts = [128, 256, 89, 312, 67, 195, 421, 154, 73, 238]
const currentSongCount = computed(() => songCounts[pairIndex.value])

const progressValues = [87, 64, 92, 45, 78, 55, 96, 38, 71, 83]
const currentProgress = computed(() => progressValues[pairIndex.value])

let switchTimer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  requestAnimationFrame(() => { show.value = true })
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  switchTimer = setInterval(() => {
    transitioning.value = true
    setTimeout(() => {
      pairIndex.value = (pairIndex.value + 1) % transferPairs.length
      transitioning.value = false
    }, 400)
  }, 3500)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(rafId)
  clearInterval(switchTimer)
})
</script>

<template>
  <section class="ms-hero relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
    <!-- geometric background -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="ms-grid-pattern absolute inset-0 opacity-[0.035] dark:opacity-[0.06]" />
      <div
        class="ms-orb ms-orb--red"
        :style="{ transform: `translate(${mouse.x * -20}px, ${mouse.y * -14}px)` }"
      />
      <div
        class="ms-orb ms-orb--purple"
        :style="{ transform: `translate(${mouse.x * 16}px, ${mouse.y * 12}px)` }"
      />
      <div
        class="ms-orb ms-orb--blue"
        :style="{ transform: `translate(${mouse.x * -12}px, ${mouse.y * 18}px)` }"
      />
    </div>

    <div class="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
      <!-- icon -->
      <div
        class="mx-auto mb-10 h-[120px] w-[120px] overflow-hidden rounded-[28px] shadow-2xl shadow-[#F93839]/15 ring-1 ring-black/5 dark:ring-white/10"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(12px)',
          transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        }"
      >
        <img src="/images/apps/music-switch-hd.png" alt="Music Switch" class="h-full w-full object-cover" />
      </div>

      <!-- title (i18n) -->
      <h1
        class="mb-5 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl dark:text-white"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
        }"
      >
        <span class="ms-gradient-text">{{ t('ms.appName') }}</span>
      </h1>

      <!-- tagline -->
      <p
        class="mb-4 text-lg font-semibold tracking-wide text-[#F93839] sm:text-xl"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
        }"
      >
        {{ t('ms.tagline') }}
      </p>

      <!-- subtitle -->
      <p
        class="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg dark:text-gray-400"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'translateY(0)' : 'translateY(18px)',
          transition: 'all 0.78s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
        }"
      >
        {{ t('ms.subtitle') }}
      </p>

      <!-- CTA -->
      <div
        class="mb-10"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.78s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
        }"
      >
        <a
          href="https://apps.apple.com/app/id6761005341"
          target="_blank"
          rel="noopener"
          class="ms-cta group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-10 py-4 text-sm font-semibold text-white no-underline shadow-xl shadow-[#F93839]/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#5856D6]/25 active:scale-[0.98]"
        >
          <span class="ms-shimmer" />
          <svg class="relative z-10 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <span class="relative z-10">{{ t('ms.cta') }}</span>
        </a>
      </div>

      <!-- badges -->
      <div
        class="flex flex-wrap items-center justify-center gap-3"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'translateY(0)' : 'translateY(12px)',
          transition: 'all 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.52s',
        }"
      >
        <span
          v-for="(badge, i) in ['badge1', 'badge2', 'badge3']"
          :key="badge"
          class="rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-xs font-medium text-gray-600 backdrop-blur-sm transition-colors duration-300 hover:border-[#F93839]/30 hover:text-[#F93839] dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-400 dark:hover:border-[#F93839]/30 dark:hover:text-[#F93839]"
          :style="{
            transitionDelay: `${0.56 + i * 0.06}s`,
          }"
        >
          {{ t(`ms.${badge}`) }}
        </span>
      </div>

      <!-- dashboard mockup (dynamic switching) -->
      <div
        class="relative mx-auto mt-16 max-w-3xl"
        :style="{
          opacity: show ? '1' : '0',
          transform: show ? 'translateY(0) perspective(1200px) rotateX(0deg)' : 'translateY(40px) perspective(1200px) rotateX(6deg)',
          transition: 'all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.55s',
        }"
      >
        <div class="ms-mockup rounded-2xl border border-gray-200/60 bg-white/90 p-6 shadow-2xl shadow-gray-900/[0.08] backdrop-blur-xl dark:border-gray-700/50 dark:bg-gray-900/90 dark:shadow-black/20 sm:p-8">
          <!-- mockup header -->
          <div class="mb-6 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="h-3 w-3 rounded-full bg-red-400" />
              <div class="h-3 w-3 rounded-full bg-yellow-400" />
              <div class="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <span class="text-xs font-medium text-gray-400">{{ t('ms.appName') }}</span>
          </div>

          <!-- transfer flow (dynamic) -->
          <div class="flex flex-col items-center gap-6 sm:flex-row sm:gap-4">
            <!-- source (animated) -->
            <div
              class="ms-platform-slot flex-1 rounded-xl border border-gray-100 bg-gray-50/80 p-4 text-center dark:border-gray-800 dark:bg-gray-800/60"
              :class="{ 'ms-fade-out': transitioning }"
            >
              <img
                :src="currentSource.icon"
                :alt="currentSource.name"
                class="mx-auto mb-3 h-12 w-12 rounded-xl"
              />
              <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">{{ currentSource.name }}</p>
              <p class="mt-1 text-xs text-gray-400">{{ currentSongCount }} songs</p>
            </div>

            <!-- arrow animation -->
            <div class="ms-transfer-arrow flex items-center gap-1">
              <div class="ms-dot" /><div class="ms-dot" /><div class="ms-dot" />
              <svg class="h-5 w-5 text-[#5856D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            <!-- target (animated) -->
            <div
              class="ms-platform-slot flex-1 rounded-xl border border-gray-100 bg-gray-50/80 p-4 text-center dark:border-gray-800 dark:bg-gray-800/60"
              :class="{ 'ms-fade-out': transitioning }"
            >
              <img
                :src="currentTarget.icon"
                :alt="currentTarget.name"
                class="mx-auto mb-3 h-12 w-12 rounded-xl"
              />
              <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">{{ currentTarget.name }}</p>
              <p class="mt-1 text-xs text-gray-400">Syncing...</p>
            </div>
          </div>

          <!-- progress (dynamic) -->
          <div class="mt-6">
            <div class="mb-2 flex items-center justify-between text-xs">
              <span class="font-medium text-gray-600 dark:text-gray-400">Matching & Transferring</span>
              <span
                class="ms-progress-num font-bold text-[#F93839] transition-opacity duration-300"
                :class="{ 'opacity-0': transitioning }"
              >
                {{ currentProgress }}%
              </span>
            </div>
            <div class="ms-progress h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              <div
                class="ms-progress-bar h-full rounded-full transition-all duration-700 ease-out"
                :style="{ width: `${currentProgress}%` }"
              />
            </div>
          </div>

          <!-- platform strip -->
          <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div
              v-for="(p, i) in platforms"
              :key="p.name"
              class="flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-300"
              :class="[
                (currentSource === platforms[i] || currentTarget === platforms[i])
                  ? 'bg-gray-100 ring-1 ring-gray-200 dark:bg-gray-700 dark:ring-gray-600'
                  : 'bg-gray-50 dark:bg-gray-800'
              ]"
            >
              <img :src="p.icon" :alt="p.name" class="h-5 w-5 rounded" />
              <span class="text-[11px] font-medium text-gray-500 dark:text-gray-400">{{ p.name }}</span>
            </div>
          </div>

          <!-- pair indicator dots -->
          <div class="mt-4 flex items-center justify-center gap-1.5">
            <button
              v-for="(_, i) in transferPairs"
              :key="i"
              class="h-1.5 rounded-full transition-all duration-300"
              :class="pairIndex === i ? 'w-4 bg-[#F93839]' : 'w-1.5 bg-gray-200 dark:bg-gray-700'"
              @click="pairIndex = i"
            />
          </div>
        </div>

        <!-- glow under mockup -->
        <div class="pointer-events-none absolute -bottom-8 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-[#F93839]/10 via-[#5856D6]/10 to-[#3B82F6]/10 blur-3xl" />
      </div>
    </div>

    <!-- scroll arrow -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2"
      :style="{ opacity: show ? '1' : '0', transition: 'opacity 1s ease 1.4s' }"
    >
      <div class="ms-scroll-arrow" />
    </div>
  </section>
</template>

<style scoped>
.ms-hero {
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fc 100%);
}
:is(.dark) .ms-hero {
  background: linear-gradient(180deg, #0f1117 0%, #141620 100%);
}

.ms-grid-pattern {
  background-image:
    linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px);
  background-size: 60px 60px;
}
:is(.dark) .ms-grid-pattern {
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
}

.ms-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  transition: transform 0.3s ease-out;
  will-change: transform;
  animation: ms-float 20s ease-in-out infinite;
}
.ms-orb--red {
  width: 480px; height: 480px;
  background: radial-gradient(circle, rgba(249, 56, 57, 0.12) 0%, transparent 70%);
  top: -5%; right: 10%;
}
.ms-orb--purple {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(88, 86, 214, 0.1) 0%, transparent 70%);
  bottom: 10%; left: 5%;
  animation-delay: -7s;
}
.ms-orb--blue {
  width: 350px; height: 350px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
  top: 40%; left: 50%;
  animation-delay: -13s;
}
@keyframes ms-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20px, -28px) scale(1.03); }
  66% { transform: translate(-18px, 18px) scale(0.97); }
}

.ms-gradient-text {
  background: linear-gradient(135deg, #F93839 0%, #D63384 40%, #5856D6 75%, #3B82F6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ms-cta {
  background: linear-gradient(135deg, #F93839 0%, #D63384 45%, #5856D6 100%);
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.ms-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.2) 55%, transparent 70%);
  background-size: 200% 100%;
  animation: shimmer 3s ease-in-out infinite;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* platform slot transition */
.ms-platform-slot {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.ms-platform-slot.ms-fade-out {
  opacity: 0;
  transform: scale(0.95) translateY(6px);
}

.ms-transfer-arrow {
  display: flex;
  align-items: center;
  gap: 4px;
}
.ms-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #5856D6;
  animation: dot-flow 1.5s ease-in-out infinite;
}
.ms-dot:nth-child(2) { animation-delay: 0.2s; }
.ms-dot:nth-child(3) { animation-delay: 0.4s; }
@keyframes dot-flow {
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}

.ms-progress-bar {
  background: linear-gradient(90deg, #F93839, #5856D6);
  animation: progress-pulse 2s ease-in-out infinite;
}
@keyframes progress-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.85; }
}

.ms-mockup {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.ms-mockup:hover {
  transform: translateY(-4px);
  box-shadow: 0 32px 64px -16px rgba(0,0,0,0.1);
}

.ms-scroll-arrow {
  width: 20px; height: 20px;
  border-right: 2px solid rgba(0,0,0,0.15);
  border-bottom: 2px solid rgba(0,0,0,0.15);
  transform: rotate(45deg);
  animation: scroll-bounce 2s ease-in-out infinite;
}
:is(.dark) .ms-scroll-arrow {
  border-color: rgba(255,255,255,0.2);
}
@keyframes scroll-bounce {
  0%, 100% { transform: rotate(45deg) translateY(0); opacity: 0.4; }
  50% { transform: rotate(45deg) translateY(8px); opacity: 0.8; }
}

@media (prefers-reduced-motion: reduce) {
  .ms-orb, .ms-cta, .ms-shimmer, .ms-dot, .ms-progress-bar, .ms-scroll-arrow { animation: none; }
  .ms-shimmer { display: none; }
  .ms-platform-slot { transition: none; }
}
</style>
