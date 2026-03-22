<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const visible = ref(false)
const el = ref<HTMLElement | null>(null)

const plans = [
  { key: 'pricingMonthly', price: 'TBD', period: '/mo', highlight: false },
  { key: 'pricingYearly', price: 'TBD', period: '/yr', highlight: true, badge: 'pricingBest' },
  { key: 'pricingLifetime', price: 'TBD', period: '', highlight: false, sub: 'pricingOnce' },
]

let obs: IntersectionObserver | null = null
onMounted(() => {
  if (!el.value) return
  obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { visible.value = true; obs?.disconnect() }
  }, { threshold: 0.15 })
  obs.observe(el.value)
})
onUnmounted(() => obs?.disconnect())
</script>

<template>
  <section ref="el" class="relative overflow-hidden bg-[#0a0e1a] py-28 sm:py-36">
    <div class="zz-grain pointer-events-none absolute inset-0" />
    <div class="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/[0.06] blur-[120px]" />

    <div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
      <h2
        class="mb-4 text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl"
        :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)' }"
      >
        {{ t('zzzappy.pricingTitle') }}
      </h2>
      <p
        class="mb-14 text-base text-emerald-400/60"
        :style="{ opacity: visible ? '1' : '0', transition: 'opacity 0.6s ease 0.15s' }"
      >
        {{ t('zzzappy.pricingTrial') }}
      </p>

      <div class="grid gap-5 sm:grid-cols-3">
        <div
          v-for="(plan, i) in plans" :key="plan.key"
          class="relative rounded-3xl p-7 text-center transition-all duration-300 hover:-translate-y-1"
          :class="plan.highlight ? 'zz-frost-highlight' : 'zz-frost'"
          :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.1}s` }"
        >
          <span
            v-if="plan.badge"
            class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500/90 px-3.5 py-1 text-[10px] font-semibold tracking-wider text-white uppercase"
          >
            {{ t(`zzzappy.${plan.badge}`) }}
          </span>
          <h3 class="mb-4 text-sm font-medium tracking-wider text-white/50 uppercase">{{ t(`zzzappy.${plan.key}`) }}</h3>
          <div class="mb-1 flex items-baseline justify-center gap-1">
            <span class="text-3xl font-light text-white">{{ plan.price }}</span>
            <span v-if="plan.period" class="text-sm text-white/30">{{ plan.period }}</span>
          </div>
          <p v-if="plan.sub" class="text-xs text-white/30">{{ t(`zzzappy.${plan.sub}`) }}</p>
        </div>
      </div>

      <p
        class="mt-8 text-xs text-white/25"
        :style="{ opacity: visible ? '1' : '0', transition: 'opacity 0.6s ease 0.6s' }"
      >
        {{ t('zzzappy.pricingManage') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.zz-frost {
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.06);
}
.zz-frost-highlight {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(34,197,94,0.2);
  box-shadow: 0 0 40px rgba(34,197,94,0.06);
}
.zz-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}
</style>
