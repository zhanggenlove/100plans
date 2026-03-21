<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useProductList } from '@/composables/useProduct'
import { ChevronRight } from 'lucide-vue-next'

const { locale, t } = useI18n()
const { products } = useProductList()

const visible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.02 },
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

function cardStyle(idx: number) {
  return computed(() => ({
    opacity: visible.value ? '1' : '0',
    transform: visible.value ? 'translateY(0)' : 'translateY(28px)',
    transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
    transitionDelay: visible.value ? `${idx * 80}ms` : '0ms',
  }))
}
</script>

<template>
  <section id="products" ref="sectionRef" class="relative pb-32 pt-20">
    <div class="mx-auto max-w-6xl px-6">
      <!-- Section header -->
      <div
        class="mb-16 max-w-xl"
        :style="{
          opacity: visible ? '1' : '0',
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
        }"
      >
        <h2 class="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          {{ t('nav.products') }}
        </h2>
        <p class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {{ t('hero.subtitle') }}
        </p>
      </div>

      <!-- Product grid -->
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <router-link
          v-for="(product, idx) in products"
          :key="product.id"
          :to="`/${locale}/app/${product.slug}`"
          class="card-surface group relative overflow-hidden p-5 sm:p-6"
          :style="cardStyle(idx).value"
        >
          <!-- Hover gradient overlay -->
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04] dark:group-hover:opacity-[0.06]"
            :class="[`from-${product.gradient.from}`, `to-${product.gradient.to}`]"
          />

          <div class="relative flex items-start gap-4">
            <div class="relative shrink-0">
              <img
                :src="product.icon"
                :alt="product.name"
                class="app-icon h-16 w-16 shadow-lg transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-xl"
                loading="lazy"
              />
            </div>
            <div class="min-w-0 flex-1 pt-0.5">
              <div class="flex items-center gap-2">
                <h3 class="truncate text-base font-semibold">{{ product.name }}</h3>
                <ChevronRight class="h-4 w-4 shrink-0 text-slate-300 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 dark:text-slate-600" />
              </div>
              <p class="mt-1 line-clamp-2 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                {{ product.subtitle }}
              </p>
            </div>
          </div>

          <!-- Screenshots preview -->
          <div v-if="product.screenshots?.length" class="relative mt-4 flex gap-2 overflow-hidden rounded-lg">
            <img
              v-for="(ss, i) in product.screenshots.slice(0, 3)"
              :key="i"
              :src="ss.url"
              :alt="`${product.name} screenshot ${i + 1}`"
              class="h-28 rounded-md object-cover opacity-80 transition-all duration-500 group-hover:opacity-100"
              :class="ss.type === 'iphone' ? 'w-14' : 'w-24'"
              loading="lazy"
            />
            <div class="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-slate-900/80" />
          </div>

          <div class="relative mt-4 flex flex-wrap items-center gap-1.5">
            <span
              v-for="platform in product.platforms"
              :key="platform"
              class="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400"
            >
              {{ platform }}
            </span>
            <span
              class="rounded-md px-2 py-0.5 text-[11px] font-medium"
              :class="
                product.status === 'released'
                  ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                  : 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400'
              "
            >
              {{ product.status === 'released' ? t('product.released') : t('product.comingSoon') }}
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
