import type { Locale } from './product'

export type LocalizedString = Record<Locale, string>

export interface BlogPost {
  slug: string
  title: LocalizedString
  excerpt: LocalizedString
  content: LocalizedString
  date: string
  tags: string[]
  cover?: string
}
