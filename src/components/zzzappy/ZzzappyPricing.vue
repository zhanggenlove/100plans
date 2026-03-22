<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

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

    <div class="relative z-10 mx-auto max-w-5xl px-6 py-32">
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

      <div
        class="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5"
      >
        <!-- Monthly -->
        <article
          class="pricing-card flex flex-col rounded-2xl p-8 text-center"
          :style="fadeStyle(140)"
        >
          <h3 class="text-sm font-medium uppercase tracking-widest text-white/45">
            {{ t('zzzappy.pricingMonthly') }}
          </h3>
          <div class="mt-6 flex flex-col items-center gap-1">
            <div class="flex items-baseline justify-center gap-1.5">
              <span class="text-4xl font-light tabular-nums text-white">¥8</span>
              <span class="text-sm text-white/35">/mo</span>
            </div>
            <span class="text-sm text-white/40">$0.99/mo</span>
          </div>
        </article>

        <!-- Yearly (highlight) -->
        <article
          class="relative rounded-2xl p-[1px]"
          :style="{
            ...fadeStyle(220),
            background: 'linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)',
          }"
        >
          <span
            class="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg"
            style="background: linear-gradient(90deg, #f97316, #ec4899, #8b5cf6)"
          >
            {{ t('zzzappy.pricingBest') }}
          </span>
          <div
            class="pricing-card-inner flex h-full flex-col rounded-[15px] p-8 pt-10 text-center"
          >
            <h3 class="text-sm font-medium uppercase tracking-widest text-white/45">
              {{ t('zzzappy.pricingYearly') }}
            </h3>
            <div class="mt-6 flex flex-col items-center gap-1">
              <div class="flex items-baseline justify-center gap-1.5">
                <span class="text-4xl font-light tabular-nums text-white">¥48</span>
                <span class="text-sm text-white/35">/yr</span>
              </div>
              <span class="text-sm text-white/40">$5.99/yr</span>
            </div>
          </div>
        </article>

        <!-- Lifetime -->
        <article
          class="pricing-card flex flex-col rounded-2xl p-8 text-center"
          :style="fadeStyle(300)"
        >
          <h3 class="text-sm font-medium uppercase tracking-widest text-white/45">
            {{ t('zzzappy.pricingLifetime') }}
          </h3>
          <div class="mt-6 flex flex-col items-center gap-1">
            <div class="flex items-baseline justify-center gap-1.5">
              <span class="text-4xl font-light tabular-nums text-white">¥128</span>
            </div>
            <span class="text-sm text-white/40">$14.99</span>
          </div>
          <p class="mt-4 text-xs leading-relaxed text-white/38">
            {{ t('zzzappy.pricingOnce') }}
          </p>
        </article>
      </div>

      <p
        class="mx-auto mt-12 max-w-lg text-center text-xs leading-relaxed text-white/30"
        :style="fadeStyle(380)"
      >
        {{ t('zzzappy.pricingManage') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.pricing-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
}
.pricing-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.35),
    0 0 30px -6px rgba(139, 92, 246, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.pricing-card-inner {
  background: rgba(13, 8, 21, 0.75);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}
</style>
