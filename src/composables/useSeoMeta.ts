import { onUnmounted, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

/** Production site origin for canonical, og:url, and alternate links */
export const SITE_BASE = 'https://100plans.app'

const SEO_MANAGED = 'data-seo-managed'
const SEO_SCOPE_SEO_META = 'useSeoMeta'
const SEO_SCOPE_JSONLD = 'product-jsonld'

interface SeoMeta {
  title?: string
  description?: string
}

function localeToOgLocale(locale: string): string {
  const map: Record<string, string> = {
    zh: 'zh_CN',
    ja: 'ja_JP',
    en: 'en_US',
  }
  return map[locale] ?? 'en_US'
}

/** Escape `"` and `\` for use inside a double-quoted CSS attribute selector value */
function escapeAttrSelectorValue(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}

function upsertManagedMeta(
  attrs: { property?: string; name?: string },
  content: string,
  scope: string
): void {
  const key = attrs.property ?? attrs.name
  if (!key) return
  const attrName = attrs.property ? 'property' : 'name'
  const selector = `meta[${SEO_MANAGED}="${scope}"][${attrName}="${escapeAttrSelectorValue(key)}"]`
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(SEO_MANAGED, scope)
    if (attrs.property) el.setAttribute('property', attrs.property)
    if (attrs.name) el.setAttribute('name', attrs.name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href: string, scope: string): void {
  const selector = `link[rel="canonical"][${SEO_MANAGED}="${scope}"]`
  let el = document.head.querySelector(selector) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    el.setAttribute(SEO_MANAGED, scope)
    document.head.appendChild(el)
  }
  el.href = href
}

function removeManagedElements(scope: string): void {
  document.head.querySelectorAll(`[${SEO_MANAGED}="${scope}"]`).forEach((el) => el.remove())
}

export interface ProductJsonLdData {
  name: string
  description: string
  url: string
  icon?: string
  rating?: number
  ratingCount?: number
  price?: number | string
  /** ISO 4217, default USD */
  priceCurrency?: string
  platforms?: string[]
}

export function useProductJsonLd(getter: () => ProductJsonLdData | null) {
  watchEffect(() => {
    removeManagedElements(SEO_SCOPE_JSONLD)
    const data = getter()
    if (!data) return

    const json: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: data.name,
      description: data.description,
      url: data.url,
    }
    if (data.icon) json.image = data.icon
    if (data.rating != null && data.ratingCount != null) {
      json.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: data.rating,
        ratingCount: data.ratingCount,
      }
    }
    if (data.price != null) {
      json.offers = {
        '@type': 'Offer',
        price: data.price,
        priceCurrency: data.priceCurrency ?? 'USD',
      }
    }
    if (data.platforms?.length) {
      json.operatingSystem = data.platforms.join(', ')
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute(SEO_MANAGED, SEO_SCOPE_JSONLD)
    script.textContent = JSON.stringify(json)
    document.head.appendChild(script)
  })

  onUnmounted(() => {
    removeManagedElements(SEO_SCOPE_JSONLD)
  })
}

export function useSeoMeta(meta: () => SeoMeta) {
  const route = useRoute()

  let initialTitle: string | undefined
  let initialDescriptionAttr: string | null | undefined
  let descriptionMetaWasCreated = false

  watchEffect(() => {
    const { title, description } = meta()
    const locale = (route.params.locale as string) ?? 'en'
    const currentUrl = `${SITE_BASE}${route.fullPath}`

    if (initialTitle === undefined) {
      initialTitle = document.title
    }
    if (title !== undefined) {
      document.title = `${title} — 100Plans`
    }

    if (description !== undefined) {
      let descEl = document.querySelector(
        `meta[name="description"][${SEO_MANAGED}="${SEO_SCOPE_SEO_META}"]`
      ) as HTMLMetaElement | null
      if (!descEl) {
        descEl = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
        if (descEl) {
          if (initialDescriptionAttr === undefined) {
            initialDescriptionAttr = descEl.getAttribute('content')
          }
          descEl.setAttribute('content', description)
        } else {
          descEl = document.createElement('meta')
          descEl.name = 'description'
          descEl.setAttribute(SEO_MANAGED, SEO_SCOPE_SEO_META)
          descEl.setAttribute('content', description)
          document.head.appendChild(descEl)
          descriptionMetaWasCreated = true
        }
      } else {
        descEl.setAttribute('content', description)
      }
    }

    const ogTitle =
      title ??
      (document.title.replace(/\s*—\s*100Plans\s*$/, '').trim() || '100Plans')
    const descContent =
      description ??
      (document.querySelector('meta[name="description"]') as HTMLMetaElement | null)?.getAttribute(
        'content'
      ) ??
      ''

    upsertManagedMeta({ property: 'og:title' }, ogTitle, SEO_SCOPE_SEO_META)
    upsertManagedMeta({ property: 'og:description' }, descContent, SEO_SCOPE_SEO_META)
    upsertManagedMeta({ property: 'og:type' }, 'website', SEO_SCOPE_SEO_META)
    upsertManagedMeta({ property: 'og:url' }, currentUrl, SEO_SCOPE_SEO_META)

    const slug = typeof route.params.slug === 'string' ? route.params.slug : undefined
    const isAppProductRoute =
      slug !== undefined && /^\/[^/]+\/app\//.test(route.path) && !route.path.includes('/blog/')
    const ogImageUrl = isAppProductRoute
      ? `${SITE_BASE}/og/${slug}.png`
      : `${SITE_BASE}/og/default.png`
    upsertManagedMeta({ property: 'og:image' }, ogImageUrl, SEO_SCOPE_SEO_META)
    upsertManagedMeta({ name: 'twitter:image' }, ogImageUrl, SEO_SCOPE_SEO_META)

    upsertManagedMeta({ property: 'og:site_name' }, '100Plans', SEO_SCOPE_SEO_META)
    upsertManagedMeta({ property: 'og:locale' }, localeToOgLocale(locale), SEO_SCOPE_SEO_META)

    upsertManagedMeta({ name: 'twitter:card' }, 'summary', SEO_SCOPE_SEO_META)
    upsertManagedMeta({ name: 'twitter:title' }, ogTitle, SEO_SCOPE_SEO_META)
    upsertManagedMeta({ name: 'twitter:description' }, descContent, SEO_SCOPE_SEO_META)
    upsertManagedMeta({ name: 'twitter:site' }, '@Rootzhanggen', SEO_SCOPE_SEO_META)

    upsertCanonical(currentUrl, SEO_SCOPE_SEO_META)

    const locales = ['en', 'zh', 'ja']
    document
      .querySelectorAll(`link[hreflang][${SEO_MANAGED}="${SEO_SCOPE_SEO_META}"]`)
      .forEach((el) => el.remove())
    locales.forEach((l) => {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = l === 'zh' ? 'zh-CN' : l
      const path = route.path.replace(`/${locale}`, `/${l}`)
      link.href = `${SITE_BASE}${path}`
      link.setAttribute(SEO_MANAGED, SEO_SCOPE_SEO_META)
      document.head.appendChild(link)
    })
  })

  onUnmounted(() => {
    removeManagedElements(SEO_SCOPE_SEO_META)

    if (initialTitle !== undefined) {
      document.title = initialTitle
    }

    if (descriptionMetaWasCreated) {
      document
        .querySelector(`meta[name="description"][${SEO_MANAGED}="${SEO_SCOPE_SEO_META}"]`)
        ?.remove()
    } else if (initialDescriptionAttr !== undefined) {
      const descEl = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
      if (descEl) {
        if (initialDescriptionAttr === null) descEl.removeAttribute('content')
        else descEl.setAttribute('content', initialDescriptionAttr)
      }
    }
  })
}
