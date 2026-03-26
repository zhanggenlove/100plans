<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { Plus, X } from 'lucide-vue-next'

const { t } = useI18n()
const route = useRoute()

const visible = ref(false)
let observer: IntersectionObserver | null = null
const sectionRef = ref<HTMLElement>()

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) visible.value = true },
    { threshold: 0.1 },
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => observer?.disconnect())

const openFaq = ref<number | null>(null)
function toggleFaq(i: number) {
  openFaq.value = openFaq.value === i ? null : i
}

const faqKeys = [
  { q: 'faq1q', a: 'faq1a' },
  { q: 'faq2q', a: 'faq2a' },
  { q: 'faq3q', a: 'faq3a' },
  { q: 'faq4q', a: 'faq4a' },
  { q: 'faq5q', a: 'faq5a' },
]
</script>

<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-950"
  >
    <div class="relative z-10 mx-auto max-w-4xl px-6">
      <!-- FAQ -->
      <div
        class="mb-20"
        :style="{
          opacity: visible ? '1' : '0',
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }"
      >
        <h2 class="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          {{ t('ms.faqTitle') }}
        </h2>

        <div class="space-y-3">
          <div
            v-for="(faq, i) in faqKeys"
            :key="i"
            class="overflow-hidden rounded-xl border border-gray-100 bg-gray-50/50 transition-colors duration-300 hover:border-gray-200 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-gray-700"
            :style="{
              opacity: visible ? '1' : '0',
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + i * 0.06}s`,
            }"
          >
            <button
              class="flex w-full items-center justify-between px-6 py-5 text-left"
              @click="toggleFaq(i)"
            >
              <span class="pr-4 text-sm font-semibold text-gray-800 dark:text-gray-200">
                {{ t(`ms.${faq.q}`) }}
              </span>
              <span class="flex h-6 w-6 flex-shrink-0 items-center justify-center">
                <Plus
                  v-if="openFaq !== i"
                  class="h-4 w-4 text-gray-400 transition-transform duration-300"
                />
                <X
                  v-else
                  class="h-4 w-4 text-[#F93839] transition-transform duration-300"
                />
              </span>
            </button>
            <div
              class="overflow-hidden transition-all duration-300"
              :style="{
                maxHeight: openFaq === i ? '200px' : '0',
                opacity: openFaq === i ? '1' : '0',
              }"
            >
              <p class="px-6 pb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {{ t(`ms.${faq.a}`) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div
        class="ms-cta-block relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-12"
        :style="{
          opacity: visible ? '1' : '0',
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
        }"
      >
        <div class="ms-cta-grid pointer-events-none absolute inset-0 opacity-[0.06]" />

        <h2 class="relative z-10 mb-6 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          {{ t('ms.ctaTitle') }}
        </h2>

        <a
          href="https://apps.apple.com/app/id6761005341"
          target="_blank"
          rel="noopener"
          class="relative z-10 inline-flex items-center gap-3 rounded-full bg-white/95 px-10 py-4 text-sm font-bold text-gray-900 no-underline shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:bg-white hover:shadow-2xl active:scale-[0.98]"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          {{ t('ms.ctaButton') }}
        </a>
      </div>

      <!-- footer links -->
      <div class="mt-10 flex items-center justify-center gap-6 text-xs text-gray-400">
        <router-link
          :to="`/${route.params.locale}/app/music-switch/privacy`"
          class="transition-colors hover:text-gray-600 dark:hover:text-gray-300"
        >
          {{ t('product.privacy') }}
        </router-link>
        <span class="text-gray-200 dark:text-gray-700">|</span>
        <router-link
          :to="`/${route.params.locale}/app/music-switch/terms`"
          class="transition-colors hover:text-gray-600 dark:hover:text-gray-300"
        >
          {{ t('product.terms') }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ms-cta-block {
  background: linear-gradient(135deg, #F93839 0%, #D63384 35%, #5856D6 70%, #3B82F6 100%);
}
.ms-cta-grid {
  background-image:
    linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>
