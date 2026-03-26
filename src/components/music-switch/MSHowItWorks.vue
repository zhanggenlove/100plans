<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Upload, Cpu, Rocket } from 'lucide-vue-next'

const { t } = useI18n()

const visible = ref(false)
let observer: IntersectionObserver | null = null
const sectionRef = ref<HTMLElement>()

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) visible.value = true },
    { threshold: 0.15 },
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => observer?.disconnect())

const steps = [
  { icon: Upload, key: 'howS1', descKey: 'howS1d', num: '01', color: '#F93839' },
  { icon: Cpu, key: 'howS2', descKey: 'howS2d', num: '02', color: '#5856D6' },
  { icon: Rocket, key: 'howS3', descKey: 'howS3d', num: '03', color: '#3B82F6' },
]
</script>

<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32 dark:from-gray-900 dark:to-gray-950"
  >
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
          {{ t('ms.howTitle') }}
        </h2>
      </div>

      <div class="relative grid gap-8 lg:grid-cols-3 lg:gap-6">
        <!-- connecting line (desktop) -->
        <div class="pointer-events-none absolute top-20 left-[16.67%] hidden h-px w-[66.67%] lg:block">
          <div class="ms-connect-line h-full w-full" />
        </div>

        <div
          v-for="(step, i) in steps"
          :key="step.key"
          class="group relative"
          :style="{
            opacity: visible ? '1' : '0',
            transform: visible ? 'translateY(0)' : 'translateY(36px)',
            transition: `all 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 + i * 0.15}s`,
          }"
        >
          <div class="relative rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <!-- step number -->
            <span
              class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
              :style="{ background: step.color, boxShadow: `0 8px 24px -4px ${step.color}33` }"
            >
              {{ step.num }}
            </span>

            <h3 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              {{ t(`ms.${step.key}`) }}
            </h3>
            <p class="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {{ t(`ms.${step.descKey}`) }}
            </p>

            <!-- icon decoration -->
            <component
              :is="step.icon"
              class="absolute right-6 bottom-6 h-20 w-20 opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.08] dark:opacity-[0.06]"
              :style="{ color: step.color }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ms-connect-line {
  background: repeating-linear-gradient(
    90deg,
    #5856D6 0,
    #5856D6 6px,
    transparent 6px,
    transparent 12px
  );
  opacity: 0.2;
  animation: line-flow 1.5s linear infinite;
}
@keyframes line-flow {
  to { background-position: 12px 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ms-connect-line { animation: none; }
}
</style>
