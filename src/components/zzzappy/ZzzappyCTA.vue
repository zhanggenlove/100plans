<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronDown } from 'lucide-vue-next'

const { t } = useI18n()
const locale = useI18n().locale
const visible = ref(false)
const el = ref<HTMLElement | null>(null)

const faqs = [
  { q: 'faq1q', a: 'faq1a' },
  { q: 'faq2q', a: 'faq2a' },
  { q: 'faq3q', a: 'faq3a' },
  { q: 'faq4q', a: 'faq4a' },
  { q: 'faq5q', a: 'faq5a' },
]
const openFaq = ref<number | null>(null)

function toggleFaq(i: number) {
  openFaq.value = openFaq.value === i ? null : i
}

let obs: IntersectionObserver | null = null
onMounted(() => {
  if (!el.value) return
  obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { visible.value = true; obs?.disconnect() }
  }, { threshold: 0.1 })
  obs.observe(el.value)
})
onUnmounted(() => obs?.disconnect())
</script>

<template>
  <section ref="el" class="relative overflow-hidden bg-[#070b14] py-28 sm:py-36">
    <div class="zz-grain pointer-events-none absolute inset-0" />
    <div class="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-600/[0.06] blur-[120px]" />

    <div class="relative z-10 mx-auto max-w-3xl px-6">
      <!-- CTA block -->
      <div
        class="mb-24 text-center"
        :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)' }"
      >
        <div class="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-[20px] shadow-2xl shadow-emerald-500/15 ring-1 ring-white/10">
          <img src="/images/apps/zzzappy.png" alt="Zzzappy" class="h-full w-full" />
        </div>
        <h2 class="mb-5 text-3xl font-extralight tracking-tight text-white sm:text-4xl">
          {{ t('zzzappy.ctaTitle') }}
        </h2>
        <button
          class="group relative inline-flex items-center gap-2.5 rounded-full bg-emerald-500/90 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-500/25"
        >
          {{ t('zzzappy.ctaButton') }}
        </button>
      </div>

      <!-- FAQ -->
      <div>
        <h3
          class="mb-8 text-center text-lg font-medium text-white/50"
          :style="{ opacity: visible ? '1' : '0', transition: 'opacity 0.6s ease 0.3s' }"
        >
          {{ t('zzzappy.faqTitle') }}
        </h3>
        <div class="space-y-3">
          <div
            v-for="(faq, i) in faqs" :key="faq.q"
            class="zz-frost overflow-hidden rounded-2xl transition-all duration-300"
            :style="{ opacity: visible ? '1' : '0', transform: visible ? 'translateY(0)' : 'translateY(12px)', transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.08}s` }"
          >
            <button
              class="flex w-full items-center justify-between px-6 py-4 text-left"
              @click="toggleFaq(i)"
            >
              <span class="text-sm font-medium text-white/70">{{ t(`zzzappy.${faq.q}`) }}</span>
              <ChevronDown
                class="h-4 w-4 shrink-0 text-white/20 transition-transform duration-200"
                :class="{ 'rotate-180': openFaq === i }"
              />
            </button>
            <div
              class="overflow-hidden transition-all duration-300"
              :style="{ maxHeight: openFaq === i ? '200px' : '0', opacity: openFaq === i ? '1' : '0' }"
            >
              <p class="px-6 pb-5 text-sm leading-relaxed text-white/40">{{ t(`zzzappy.${faq.a}`) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer links -->
      <div class="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs text-white/20">
        <router-link :to="`/${locale}/app/zzzappy/privacy`" class="transition-colors hover:text-white/40">
          {{ t('product.privacy') }}
        </router-link>
        <router-link :to="`/${locale}/app/zzzappy/terms`" class="transition-colors hover:text-white/40">
          {{ t('product.terms') }}
        </router-link>
        <a href="mailto:zhanggenlove@gmail.com" class="transition-colors hover:text-white/40">
          zhanggenlove@gmail.com
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.zz-frost {
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.06);
}
.zz-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}
</style>
