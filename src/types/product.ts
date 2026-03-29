export type Locale = 'en' | 'zh' | 'ja'
export type LocalizedString = Record<Locale, string>

export type Platform = 'iOS' | 'iPadOS' | 'macOS' | 'Web'
export type ProductStatus = 'released' | 'coming-soon'

export interface ProductFeature {
  icon: string
  title: LocalizedString
  description: LocalizedString
}

export interface ProductPricing {
  type: 'free' | 'freemium' | 'paid'
  items?: { name: LocalizedString; price: string }[]
}

export interface ProductMeta {
  size?: string
  requirements?: string
  languages?: string[]
  rating?: string
  ratingCount?: number
}

export type ScreenshotType = 'iphone' | 'ipad' | 'mac' | 'web'

export interface ProductScreenshot {
  url: string
  type: ScreenshotType
}

export interface Product {
  id: string
  slug: string
  name: string
  subtitle: LocalizedString
  description: LocalizedString
  icon: string
  platforms: Platform[]
  category: LocalizedString
  status: ProductStatus
  appStoreUrl?: string
  gumroadUrl?: string
  websiteUrl?: string
  gradient: { from: string; to: string }
  features: ProductFeature[]
  screenshots: ProductScreenshot[]
  pricing: ProductPricing
  meta: ProductMeta
}
