<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const el = ref<HTMLElement | null>(null)
const visible = ref(false)
const openFaq = ref<number | null>(null)

const faqs = [
  { q: 'faq1q', a: 'faq1a' },
  { q: 'faq2q', a: 'faq2a' },
  { q: 'faq3q', a: 'faq3a' },
  { q: 'faq4q', a: 'faq4a' },
  { q: 'faq5q', a: 'faq5a' },
] as const

function toggleFaq(i: number) {
  openFaq.value = openFaq.value === i ? null : i
}

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
    class="relative overflow-hidden bg-[#0d0815]"
  >
    <!-- Ambient wash (no green) -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_0%,rgba(236,72,153,0.08)_0%,transparent_55%),radial-gradient(ellipse_80%_50%_at_100%_60%,rgba(59,130,246,0.06)_0%,transparent_50%),radial-gradient(ellipse_70%_45%_at_0%_90%,rgba(249,115,22,0.07)_0%,transparent_50%)]"
    />
    <div class="zz-grain pointer-events-none absolute inset-0" />

    <!-- CTA -->
    <div class="relative z-10 px-6 py-32">
      <div
        class="mx-auto max-w-3xl text-center"
        :style="{
          opacity: visible ? '1' : '0',
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
          transition:
            'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }"
      >
        <div
          class="mx-auto mb-10 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl shadow-2xl shadow-[#ec4899]/10 ring-1 ring-white/10"
        >
          <img
            src="/images/apps/zzzappy-icon-hd.png"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>

        <h2
          class="mb-12 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          {{ t('zzzappy.ctaTitle') }}
        </h2>

        <button
          type="button"
          class="zz-cta inline-flex items-center justify-center rounded-full px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-[#f97316]/20 transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#ec4899]/25 active:scale-[0.99]"
        >
          {{ t('zzzappy.ctaButton') }}
        </button>
      </div>
    </div>

    <!-- FAQ -->
    <div class="relative z-10 px-6 py-20">
      <div class="mx-auto max-w-3xl">
        <h2
          class="mb-12 text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          {{ t('zzzappy.faqTitle') }}
        </h2>

        <div>
          <div
            v-for="(faq, i) in faqs"
            :key="faq.q"
            class="border-b border-white/[0.06]"
          >
            <button
              type="button"
              class="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
              :aria-expanded="openFaq === i"
              @click="toggleFaq(i)"
            >
              <span class="text-base font-medium text-white sm:text-lg">
                {{ t(`zzzappy.${faq.q}`) }}
              </span>
              <span
                class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg leading-none text-white/50"
                aria-hidden="true"
              >
                {{ openFaq === i ? '−' : '+' }}
              </span>
            </button>
            <div
              class="overflow-hidden transition-all duration-300 ease-out"
              :style="{
                maxHeight: openFaq === i ? '480px' : '0',
                opacity: openFaq === i ? '1' : '0',
              }"
            >
              <p
                class="pb-5 pr-14 text-base leading-relaxed text-white/60"
              >
                {{ t(`zzzappy.${faq.a}`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
  .zz-cta {
    background-position: 50% 50%;
  }
  .zz-cta:hover {
    background-position: 50% 50%;
  }
}
</style>
