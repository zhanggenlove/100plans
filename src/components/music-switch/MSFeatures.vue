<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Layers, ClipboardCheck, Activity, History, Globe, ShieldCheck } from 'lucide-vue-next'

const { t } = useI18n()

const visible = ref(false)
let observer: IntersectionObserver | null = null
const sectionRef = ref<HTMLElement>()

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) visible.value = true },
    { threshold: 0.12 },
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => observer?.disconnect())

const features = [
  { icon: Layers, key: 'feat1', descKey: 'feat1d', color: '#F93839' },
  { icon: ClipboardCheck, key: 'feat2', descKey: 'feat2d', color: '#D63384' },
  { icon: Activity, key: 'feat3', descKey: 'feat3d', color: '#5856D6' },
  { icon: History, key: 'feat4', descKey: 'feat4d', color: '#3B82F6' },
  { icon: Globe, key: 'feat5', descKey: 'feat5d', color: '#10B981' },
  { icon: ShieldCheck, key: 'feat6', descKey: 'feat6d', color: '#6366F1' },
]
</script>

<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-950"
  >
    <!-- geometric dots -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="ms-dot-pattern absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" />
    </div>

    <div class="relative z-10 mx-auto max-w-6xl px-6">
      <div
        class="mb-16 text-center"
        :style="{
          opacity: visible ? '1' : '0',
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }"
      >
        <h2 class="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          {{ t('ms.featTitle') }}
        </h2>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(feat, i) in features"
          :key="feat.key"
          class="ms-feat-card group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
          :style="{
            opacity: visible ? '1' : '0',
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.08 + i * 0.08}s`,
          }"
        >
          <!-- icon -->
          <div
            class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
            :style="{ background: `${feat.color}10` }"
          >
            <component
              :is="feat.icon"
              class="h-6 w-6"
              :style="{ color: feat.color }"
            />
          </div>

          <h3 class="mb-2 text-lg font-bold text-gray-900 dark:text-white">
            {{ t(`ms.${feat.key}`) }}
          </h3>
          <p class="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            {{ t(`ms.${feat.descKey}`) }}
          </p>

          <!-- corner glow on hover -->
          <div
            class="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            :style="{ background: `${feat.color}12` }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ms-dot-pattern {
  background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
  background-size: 24px 24px;
  color: #000;
}
:is(.dark) .ms-dot-pattern {
  color: #fff;
}
</style>
