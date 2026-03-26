<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Coins, Infinity as InfinityIcon } from 'lucide-vue-next'

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

const packages = [
  { credits: 200, color: '#F93839' },
  { credits: 800, color: '#D63384' },
  { credits: 2500, color: '#5856D6', featured: true },
  { credits: 8000, color: '#3B82F6' },
]
</script>

<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32 dark:from-gray-900 dark:to-gray-950"
  >
    <div class="relative z-10 mx-auto max-w-5xl px-6">
      <div
        class="mb-6 text-center"
        :style="{
          opacity: visible ? '1' : '0',
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }"
      >
        <h2 class="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          {{ t('ms.pricingTitle') }}
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-gray-500 dark:text-gray-400">
          {{ t('ms.pricingDesc') }}
        </p>
      </div>

      <!-- credit model visual -->
      <div
        class="mx-auto mb-16 max-w-md rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900"
        :style="{
          opacity: visible ? '1' : '0',
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
        }"
      >
        <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5856D6]/10">
          <Coins class="h-8 w-8 text-[#5856D6]" />
        </div>
        <div class="mb-3 flex items-baseline justify-center gap-2">
          <span class="text-5xl font-black text-gray-900 dark:text-white">1</span>
          <span class="text-lg font-medium text-gray-400">{{ t('ms.pricingCredit') }}</span>
          <span class="text-2xl font-bold text-gray-400">=</span>
          <span class="text-5xl font-black text-gray-900 dark:text-white">1</span>
          <span class="text-lg font-medium text-gray-400">{{ t('ms.pricingSong') }}</span>
        </div>
        <div class="flex items-center justify-center gap-2 text-sm text-[#5856D6]">
          <InfinityIcon class="h-4 w-4" />
          <span class="font-medium">{{ t('ms.pricingNeverExpire') }}</span>
        </div>
      </div>

      <!-- credit packages -->
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(pkg, i) in packages"
          :key="pkg.credits"
          class="ms-pkg group relative overflow-hidden rounded-2xl border p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
          :class="pkg.featured
            ? 'border-[#5856D6]/30 bg-gradient-to-b from-[#5856D6]/5 to-white shadow-md dark:from-[#5856D6]/10 dark:to-gray-900'
            : 'border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900'"
          :style="{
            opacity: visible ? '1' : '0',
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + i * 0.1}s`,
          }"
        >
          <div
            v-if="pkg.featured"
            class="absolute -top-px right-4 rounded-b-lg px-3 py-1 text-[10px] font-bold text-white uppercase"
            style="background: linear-gradient(135deg, #F93839, #5856D6)"
          >
            POPULAR
          </div>

          <div class="mb-4 flex items-center justify-center gap-1">
            <Coins class="h-5 w-5" :style="{ color: pkg.color }" />
          </div>

          <p class="mb-1 text-3xl font-black text-gray-900 dark:text-white">
            {{ pkg.credits.toLocaleString() }}
          </p>
          <p class="text-sm text-gray-400">{{ t('ms.pricingCredit') }}</p>

          <p class="mt-3 text-xs text-gray-400">
            ≈ {{ pkg.credits.toLocaleString() }} {{ t('ms.pricingSong') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ms-pkg {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
}
</style>
