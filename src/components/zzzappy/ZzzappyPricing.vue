<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Check } from 'lucide-vue-next'

const { t } = useI18n()

const visible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!sectionRef.value) return
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.15 },
  )
  observer.observe(sectionRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
})

function fadeStyle(delayMs: number) {
  return {
    opacity: visible.value ? 1 : 0,
    transform: visible.value ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
  }
}

const bullets = ['pricingBullet1', 'pricingBullet2', 'pricingBullet3', 'pricingBullet4'] as const
</script>

<template>
  <section
    ref="sectionRef"
    class="zzzappy-pricing relative overflow-hidden bg-[#0d0815]"
  >
    <div
      class="pointer-events-none absolute inset-0 opacity-40"
      aria-hidden="true"
    >
      <div
        class="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full blur-[100px]"
        style="background: radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)"
      />
      <div
        class="absolute -right-1/4 bottom-0 h-[380px] w-[380px] rounded-full blur-[100px]"
        style="background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)"
      />
    </div>

    <div class="relative z-10 mx-auto max-w-4xl px-6 py-32">
      <h2
        class="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        :style="fadeStyle(0)"
      >
        {{ t('zzzappy.pricingTitle') }}
      </h2>
      <p
        class="mx-auto mt-4 max-w-xl text-center text-base text-white/55"
        :style="fadeStyle(80)"
      >
        {{ t('zzzappy.pricingTrial') }}
      </p>

      <!-- single pricing card -->
      <div
        class="mx-auto mt-14 max-w-md"
        :style="fadeStyle(160)"
      >
        <div class="pricing-card relative overflow-hidden rounded-2xl p-[1px]" style="background: linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)">
          <div class="pricing-card-inner flex flex-col items-center rounded-[15px] px-8 py-10 text-center">
            <span class="text-sm font-medium uppercase tracking-widest text-white/45">
              {{ t('zzzappy.pricingOnetime') }}
            </span>

            <div class="mt-6 flex items-baseline gap-1">
              <span class="text-6xl font-light tabular-nums text-white">$9</span>
              <span class="text-3xl font-light text-white/60">.9</span>
            </div>

            <span class="mt-2 text-sm text-white/40">{{ t('zzzappy.pricingIncludes') }}</span>

            <!-- features list -->
            <ul class="mt-8 space-y-3 text-left">
              <li
                v-for="b in bullets"
                :key="b"
                class="flex items-center gap-3 text-sm text-white/70"
              >
                <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#f97316]/20 to-[#ec4899]/20">
                  <Check class="h-3 w-3 text-[#fb7185]" />
                </span>
                {{ t(`zzzappy.${b}`) }}
              </li>
            </ul>

            <!-- CTA buttons -->
            <div class="mt-10 flex w-full flex-col gap-3">
              <a
                href="https://zhanggenlove.gumroad.com/l/zzzappy"
                target="_blank"
                rel="noopener"
                class="zz-cta group relative flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white no-underline shadow-lg shadow-[#f97316]/20 transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#ec4899]/30 active:scale-[0.98]"
              >
                <span class="zz-shimmer" />
                <span class="relative z-10">{{ t('zzzappy.pricingBuyBtn') }}</span>
              </a>
              <a
                href="https://zhanggenlove.gumroad.com/l/zzzappy-trial"
                target="_blank"
                rel="noopener"
                class="flex items-center justify-center rounded-full border border-white/10 py-3.5 text-sm font-medium text-white/60 no-underline transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white/80 active:scale-[0.98]"
              >
                {{ t('zzzappy.pricingTrialBtn') }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <p
        class="mx-auto mt-8 max-w-lg text-center text-xs leading-relaxed text-white/30"
        :style="fadeStyle(240)"
      >
        {{ t('zzzappy.pricingNote') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.pricing-card-inner {
  background: rgba(13, 8, 21, 0.85);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
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
  background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.2) 55%, transparent 70%);
  background-size: 200% 100%;
  animation: shimmer 3s ease-in-out infinite;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
@media (prefers-reduced-motion: reduce) {
  .zz-cta { animation: none; background-position: 50% 50%; }
  .zz-shimmer { animation: none; display: none; }
}
</style>
