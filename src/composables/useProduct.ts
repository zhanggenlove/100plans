import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { products } from '@/data/products'
import appstoreCache from '@/data/appstore-cache.json'
import type { Locale } from '@/types/product'

type CacheApps = Record<string, {
  rating?: number
  ratingCount?: number
  version?: string
  size?: string
  releaseDate?: string
}>

const cache = (appstoreCache as { apps: CacheApps }).apps

export function useProduct(slugOverride?: string) {
  const route = useRoute()
  const { locale } = useI18n()

  const slug = computed(() => slugOverride ?? (route.params.slug as string))
  const product = computed(() => products.find((p) => p.slug === slug.value))
  const l = computed(() => locale.value as Locale)

  const localized = computed(() => {
    const p = product.value
    if (!p) return null

    const live = cache[p.slug]
    const meta = { ...p.meta }
    if (live) {
      if (live.rating != null) meta.rating = String(live.rating)
      if (live.ratingCount != null) meta.ratingCount = live.ratingCount
      if (live.size) meta.size = live.size
    }

    return {
      ...p,
      subtitle: p.subtitle[l.value],
      description: p.description[l.value],
      category: p.category[l.value],
      meta,
      features: p.features.map((f) => ({
        ...f,
        title: f.title[l.value],
        description: f.description[l.value],
      })),
      pricing: {
        ...p.pricing,
        items: p.pricing.items?.map((item) => ({
          ...item,
          name: item.name[l.value],
        })),
      },
    }
  })

  return { product, localized, slug }
}

export function useProductList() {
  const { locale } = useI18n()
  const l = computed(() => locale.value as Locale)

  const localizedProducts = computed(() =>
    products.map((p) => ({
      ...p,
      subtitle: p.subtitle[l.value],
      category: p.category[l.value],
    })),
  )

  return { products: localizedProducts }
}
