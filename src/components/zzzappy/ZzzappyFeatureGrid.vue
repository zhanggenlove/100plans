<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const features = [
  { emoji: '🎵', titleKey: 'moreF1', descKey: 'moreF1d' },
  { emoji: '⌨️', titleKey: 'moreF2', descKey: 'moreF2d' },
  { emoji: '📊', titleKey: 'moreF3', descKey: 'moreF3d' },
  { emoji: '🌐', titleKey: 'moreF4', descKey: 'moreF4d' },
  { emoji: '👁', titleKey: 'moreF5', descKey: 'moreF5d' },
  { emoji: '⏭', titleKey: 'moreF6', descKey: 'moreF6d' },
  { emoji: '🖥', titleKey: 'moreF7', descKey: 'moreF7d' },
  { emoji: '🚀', titleKey: 'moreF8', descKey: 'moreF8d' },
] as const

const ringVariants = [
  'bg-[#f97316]/10 ring-[#f97316]/25 text-[#f97316]',
  'bg-[#ec4899]/10 ring-[#ec4899]/25 text-[#ec4899]',
  'bg-[#8b5cf6]/10 ring-[#8b5cf6]/25 text-[#8b5cf6]',
  'bg-[#3b82f6]/10 ring-[#3b82f6]/25 text-[#3b82f6]',
] as const

const visible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null

function cardStyle(index: number) {
  const delay = 0.1 + index * 0.07
  return {
    opacity: visible.value ? 1 : 0,
    transform: visible.value ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  }
}

function headingStyle() {
  return {
    opacity: visible.value ? 1 : 0,
    transform: visible.value ? 'translateY(0)' : 'translateY(16px)',
    transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  }
}

onMounted(() => {
  if (!sectionRef.value) return
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
  )
  observer.observe(sectionRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
  observer = null
})
</script>

<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-[#0d0815] py-32 px-6"
  >
    <div
      class="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full blur-[100px]"
      style="background: radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full blur-[110px]"
      style="background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-6xl">
      <h2
        class="feature-heading mb-14 text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
        :style="headingStyle()"
      >
        {{ t('zzzappy.moreTitle') }}
      </h2>

      <div
        class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6"
      >
        <article
          v-for="(item, index) in features"
          :key="item.titleKey"
          class="feature-card flex flex-col rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/[0.06] backdrop-blur transition-all duration-400 hover:ring-white/[0.14] hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-[#ec4899]/[0.06]"
          :style="cardStyle(index)"
        >
          <div
            class="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg ring-1 backdrop-blur-sm"
            :class="ringVariants[index % ringVariants.length]"
          >
            <span aria-hidden="true">{{ item.emoji }}</span>
          </div>
          <h3 class="mb-2 text-sm font-medium leading-snug text-white/90">
            {{ t(`zzzappy.${item.titleKey}`) }}
          </h3>
          <p class="text-xs leading-relaxed text-white/45">
            {{ t(`zzzappy.${item.descKey}`) }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .feature-heading,
  .feature-card {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>
