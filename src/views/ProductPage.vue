<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { useProduct, useProductList } from '@/composables/useProduct'
import { useSeoMeta } from '@/composables/useSeoMeta'
import ProductHero from '@/components/product/ProductHero.vue'
import ScreenshotGallery from '@/components/product/ScreenshotGallery.vue'
import FeatureSection from '@/components/product/FeatureSection.vue'

const { locale, t } = useI18n()
const router = useRouter()
const { localized, product } = useProduct()
const { products: allProducts } = useProductList()

useSeoMeta(() => ({
  title: localized.value?.name ?? 'Product',
  description: localized.value?.subtitle,
}))

const otherProducts = computed(() =>
  allProducts.value.filter((p) => p.slug !== localized.value?.slug).slice(0, 4),
)

const currentIndex = computed(() =>
  allProducts.value.findIndex((p) => p.slug === product.value?.slug),
)

const prevProduct = computed(() => {
  const idx = currentIndex.value
  if (idx <= 0) return null
  return allProducts.value[idx - 1]
})

const nextProduct = computed(() => {
  const idx = currentIndex.value
  if (idx < 0 || idx >= allProducts.value.length - 1) return null
  return allProducts.value[idx + 1]
})

const descExpanded = ref(false)
const descNeedsExpand = computed(() => (localized.value?.description?.length ?? 0) > 200)

const infoVisible = ref(false)
const infoRef = ref<HTMLElement | null>(null)
const moreVisible = ref(false)
const moreRef = ref<HTMLElement | null>(null)

function observeOnce(el: HTMLElement | null, cb: () => void) {
  if (!el) return
  const obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { cb(); obs.disconnect() }
  }, { threshold: 0.05 })
  obs.observe(el)
}

onMounted(() => {
  observeOnce(infoRef.value, () => { infoVisible.value = true })
  observeOnce(moreRef.value, () => { moreVisible.value = true })
})

function infoItemStyle(idx: number) {
  return computed(() => ({
    opacity: infoVisible.value ? '1' : '0',
    transform: infoVisible.value ? 'translateY(0)' : 'translateY(18px)',
    transition: 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)',
    transitionDelay: infoVisible.value ? `${idx * 80}ms` : '0ms',
  }))
}

function moreItemStyle(idx: number) {
  return computed(() => ({
    opacity: moreVisible.value ? '1' : '0',
    transform: moreVisible.value ? 'translateY(0)' : 'translateY(18px)',
    transition: 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)',
    transitionDelay: moreVisible.value ? `${idx * 80}ms` : '0ms',
  }))
}
</script>

<template>
  <div v-if="localized && product" class="pb-24">
    <!-- Back -->
    <div class="mx-auto max-w-5xl px-6 pt-6">
      <button
        class="mb-2 inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300"
        @click="router.push(`/${locale}`)"
      >
        <ArrowLeft class="h-3.5 w-3.5" />
        {{ t('product.backToHome') }}
      </button>
    </div>

    <!-- Hero -->
    <ProductHero
      :name="localized.name"
      :subtitle="localized.subtitle"
      :description="localized.description"
      :icon="product.icon"
      :platforms="localized.platforms"
      :category="localized.category"
      :status="localized.status"
      :gradient="localized.gradient"
      :app-store-url="localized.appStoreUrl"
      :gumroad-url="localized.gumroadUrl"
      :website-url="localized.websiteUrl"
      :meta="{ rating: localized.meta.rating, ratingCount: localized.meta.ratingCount }"
    />

    <div class="mx-auto max-w-5xl px-6">
      <!-- Screenshot gallery -->
      <ScreenshotGallery
        v-if="product.screenshots.length"
        :screenshots="product.screenshots"
        :name="localized.name"
      />

      <!-- Placeholder for coming-soon without screenshots -->
      <div
        v-else-if="product.status === 'coming-soon'"
        class="my-8 flex items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 py-16 dark:border-slate-700/50 dark:bg-slate-800/20"
      >
        <div class="text-center">
          <div class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
            <svg class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
            </svg>
          </div>
          <p class="text-sm text-slate-400 dark:text-slate-500">{{ t('product.comingSoon') }}</p>
        </div>
      </div>

      <!-- Description -->
      <section class="border-t border-slate-100 py-8 dark:border-slate-800">
        <h2 class="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          {{ t('product.description') }}
        </h2>
        <div class="relative">
          <p
            class="text-base leading-[1.85] text-slate-600 dark:text-slate-300"
            :class="{ 'line-clamp-4': descNeedsExpand && !descExpanded }"
          >
            {{ localized.description }}
          </p>
          <button
            v-if="descNeedsExpand && !descExpanded"
            @click="descExpanded = true"
            class="mt-2 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400"
          >
            {{ t('product.readMore') }}
          </button>
        </div>
      </section>

      <!-- Features -->
      <FeatureSection :features="localized.features" :gradient="localized.gradient" />

      <!-- Info grid -->
      <section ref="infoRef" class="border-t border-slate-100 py-8 dark:border-slate-800">
        <h2
          class="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"
          :style="{
            opacity: infoVisible ? '1' : '0',
            transform: infoVisible ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }"
        >
          {{ t('product.info') }}
        </h2>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Pricing -->
          <div class="space-y-3" :style="infoItemStyle(0).value">
            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {{ t('product.pricing') }}
            </h3>
            <p class="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              {{ localized.pricing.type === 'free' ? t('product.free') : t('product.freemium') }}
            </p>
            <div v-if="localized.pricing.items" class="space-y-2">
              <div v-for="item in localized.pricing.items" :key="item.name" class="flex items-center justify-between text-sm">
                <span class="text-slate-500 dark:text-slate-400">{{ item.name }}</span>
                <span class="font-medium tabular-nums">{{ item.price }}</span>
              </div>
            </div>
          </div>

          <!-- Tech Info -->
          <div class="space-y-3" :style="infoItemStyle(1).value">
            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {{ t('product.techInfo') }}
            </h3>
            <dl class="space-y-2 text-sm">
              <div v-if="localized.meta.size" class="flex justify-between">
                <dt class="text-slate-500 dark:text-slate-400">{{ t('product.size') }}</dt>
                <dd class="font-medium">{{ localized.meta.size }}</dd>
              </div>
              <div v-if="localized.meta.requirements" class="flex justify-between">
                <dt class="text-slate-500 dark:text-slate-400">{{ t('product.requirements') }}</dt>
                <dd class="font-medium">{{ localized.meta.requirements }}</dd>
              </div>
              <div v-if="localized.meta.languages?.length" class="flex justify-between gap-3">
                <dt class="shrink-0 text-slate-500 dark:text-slate-400">{{ t('product.languages') }}</dt>
                <dd class="text-right text-xs leading-relaxed">{{ localized.meta.languages.join(', ') }}</dd>
              </div>
            </dl>
          </div>

          <!-- Legal -->
          <div class="space-y-3" :style="infoItemStyle(2).value">
            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {{ t('product.legal') }}
            </h3>
            <div class="flex flex-col gap-2.5">
              <router-link
                :to="`/${locale}/app/${localized.slug}/privacy`"
                class="group/link flex items-center gap-1.5 text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              >
                {{ t('product.privacy') }}
                <svg class="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7"/></svg>
              </router-link>
              <router-link
                :to="`/${locale}/app/${localized.slug}/terms`"
                class="group/link flex items-center gap-1.5 text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              >
                {{ t('product.terms') }}
                <svg class="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7"/></svg>
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- Other products -->
      <section ref="moreRef" class="mt-4 border-t border-slate-100 pt-12 dark:border-slate-800">
        <h2
          class="mb-6 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400"
          :style="{
            opacity: moreVisible ? '1' : '0',
            transform: moreVisible ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }"
        >
          {{ t('product.moreApps') }}
        </h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <router-link
            v-for="(p, idx) in otherProducts"
            :key="p.id"
            :to="`/${locale}/app/${p.slug}`"
            class="card-surface group flex items-center gap-4 p-4 transition-shadow duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            :style="moreItemStyle(idx).value"
          >
            <img
              :src="p.icon"
              :alt="p.name"
              class="app-icon h-12 w-12 shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div class="min-w-0">
              <h3 class="truncate text-sm font-semibold">{{ p.name }}</h3>
              <p class="truncate text-xs text-slate-500 dark:text-slate-400">{{ p.subtitle }}</p>
            </div>
          </router-link>
        </div>
      </section>

      <!-- Prev / Next product navigation -->
      <div class="mt-12 grid grid-cols-2 gap-4 border-t border-slate-100 pt-8 dark:border-slate-800">
        <router-link
          v-if="prevProduct"
          :to="`/${locale}/app/${prevProduct.slug}`"
          class="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
        >
          <ChevronLeft class="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:-translate-x-0.5" />
          <div class="min-w-0">
            <p class="text-xs text-slate-400 dark:text-slate-500">{{ t('product.prev') }}</p>
            <p class="truncate text-sm font-medium">{{ prevProduct.name }}</p>
          </div>
        </router-link>
        <div v-else />
        <router-link
          v-if="nextProduct"
          :to="`/${locale}/app/${nextProduct.slug}`"
          class="group flex items-center justify-end gap-3 rounded-xl p-3 text-right transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
        >
          <div class="min-w-0">
            <p class="text-xs text-slate-400 dark:text-slate-500">{{ t('product.next') }}</p>
            <p class="truncate text-sm font-medium">{{ nextProduct.name }}</p>
          </div>
          <ChevronRight class="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5" />
        </router-link>
      </div>
    </div>
  </div>

  <div v-else class="flex min-h-[60vh] items-center justify-center">
    <p class="text-slate-400">{{ t('product.notFound') }}</p>
  </div>
</template>
