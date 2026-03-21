/**
 * Prebuild script: fetch live App Store data via iTunes Lookup API
 * Writes results to src/data/appstore-cache.json
 */
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

interface AppStoreEntry {
  appId: string
  slug: string
  rating?: number
  ratingCount?: number
  version?: string
  size?: string
  releaseDate?: string
  screenshots?: { url: string; type: 'iphone' | 'ipad' | 'mac' }[]
}

const APP_MAP: Record<string, string> = {
  chanfei: '6458101439',
  'coin-focus': '6759708256',
  moocat: '6477344294',
  'quick-keyboard': '1643396533',
  'doc-scanner': '6452550631',
}

const APP_NAMES: Record<string, string> = {
  chanfei: '禅扉',
  'coin-focus': 'Coin Focus',
  moocat: 'Moocat输入法',
  'quick-keyboard': '快捷键盘Pro',
  'doc-scanner': '文档扫描小助手',
}

interface Review {
  author: string
  rating: number
  title: string
  content: string
  appSlug: string
  appName: string
}

type RssEntry = Record<string, unknown>

function normalizeFeedEntries(entry: unknown): RssEntry[] {
  if (entry == null) return []
  if (Array.isArray(entry)) return entry as RssEntry[]
  return [entry as RssEntry]
}

function getLabel(obj: unknown, key: string): string {
  if (obj == null || typeof obj !== 'object') return ''
  const v = (obj as Record<string, unknown>)[key]
  if (v && typeof v === 'object' && 'label' in (v as object)) {
    const l = (v as { label?: unknown }).label
    return typeof l === 'string' ? l : ''
  }
  return ''
}

/** iTunes JSON atoms like `{ "label": "..." }` */
function labelValue(obj: unknown): string {
  if (obj != null && typeof obj === 'object' && 'label' in (obj as object)) {
    const l = (obj as { label?: unknown }).label
    return typeof l === 'string' ? l : ''
  }
  return ''
}

function parseRating(entry: RssEntry): number | null {
  const raw = labelValue(entry['im:rating'])
  const n = Number.parseInt(raw, 10)
  if (Number.isNaN(n)) return null
  return n
}

function parseUpdated(entry: RssEntry): number {
  const s = labelValue(entry.updated)
  const t = Date.parse(s)
  return Number.isNaN(t) ? 0 : t
}

async function fetchReviewsForApp(
  appSlug: string,
  appId: string,
  appName: string,
): Promise<Review[]> {
  const url = `https://itunes.apple.com/cn/rss/customerreviews/id=${appId}/sortBy=mostRecent/json`
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(15000) })
    if (!res.ok) return []
    const data = (await res.json()) as { feed?: { entry?: unknown } }
    const entries = normalizeFeedEntries(data?.feed?.entry)

    const candidates: { rating: number; t: number; review: Review }[] = []

    for (const e of entries) {
      const rating = parseRating(e)
      if (rating == null || rating < 4 || rating > 5) continue

      const author = getLabel(e.author, 'name') || 'Anonymous'
      const title = labelValue(e.title)
      const content = labelValue(e.content)

      candidates.push({
        rating,
        t: parseUpdated(e),
        review: {
          author,
          rating,
          title,
          content,
          appSlug,
          appName,
        },
      })
    }

    candidates.sort((a, b) => {
      if (b.rating !== a.rating) return b.rating - a.rating
      return b.t - a.t
    })

    return candidates.slice(0, 5).map((c) => c.review)
  } catch (err) {
    console.warn(`  ⚠ Reviews fetch failed for ${appSlug} (${appId}):`, (err as Error).message)
    return []
  }
}

async function fetchReviews(): Promise<Review[]> {
  const slugOrder = Object.keys(APP_MAP)
  const results = await Promise.all(
    Object.entries(APP_MAP).map(async ([slug, appId]) => {
      const reviews = await fetchReviewsForApp(slug, appId, APP_NAMES[slug] ?? slug)
      return { slug, reviews }
    }),
  )
  const bySlug = new Map(results.map((r) => [r.slug, r.reviews]))
  const all: Review[] = []
  for (const slug of slugOrder) {
    all.push(...(bySlug.get(slug) ?? []))
  }
  return all
}

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function inferScreenshotType(url: string): 'iphone' | 'ipad' | 'mac' {
  if (url.includes('800x500') || url.includes('Mac')) return 'mac'
  if (url.includes('1024x') || url.includes('iPad')) return 'ipad'
  return 'iphone'
}

async function fetchApp(slug: string, appId: string): Promise<AppStoreEntry> {
  const entry: AppStoreEntry = { appId, slug }

  try {
    const url = `https://itunes.apple.com/lookup?id=${appId}&country=cn`
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) })
    const data = await res.json()

    if (data.resultCount > 0) {
      const app = data.results[0]
      entry.rating = app.averageUserRating ? Math.round(app.averageUserRating * 10) / 10 : undefined
      entry.ratingCount = app.userRatingCount || undefined
      entry.version = app.version
      entry.releaseDate = app.currentVersionReleaseDate?.split('T')[0]

      if (app.fileSizeBytes) {
        entry.size = formatSize(Number(app.fileSizeBytes))
      }

      const ssUrls: string[] = app.screenshotUrls || []
      const ipadUrls: string[] = app.ipadScreenshotUrls || []
      if (ssUrls.length > 0 || ipadUrls.length > 0) {
        entry.screenshots = [
          ...ssUrls.map((u: string) => ({ url: u, type: inferScreenshotType(u) as const })),
          ...ipadUrls.map((u: string) => ({ url: u, type: 'ipad' as const })),
        ]
      }
    }
  } catch (err) {
    console.warn(`  ⚠ Failed to fetch ${slug} (${appId}):`, (err as Error).message)
  }

  return entry
}

async function main() {
  console.log('📦 Fetching App Store data...\n')

  const entries: Record<string, AppStoreEntry> = {}
  const tasks = Object.entries(APP_MAP).map(async ([slug, appId]) => {
    const entry = await fetchApp(slug, appId)
    entries[slug] = entry

    const parts = [slug]
    if (entry.rating) parts.push(`★ ${entry.rating}`)
    if (entry.ratingCount) parts.push(`(${entry.ratingCount} ratings)`)
    if (entry.version) parts.push(`v${entry.version}`)
    if (entry.size) parts.push(entry.size)
    console.log(`  ✓ ${parts.join(' · ')}`)
  })

  await Promise.all(tasks)

  const outPath = resolve(import.meta.dirname, '../src/data/appstore-cache.json')
  const output = {
    fetchedAt: new Date().toISOString(),
    apps: entries,
  }

  writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf-8')
  console.log(`\n✅ Written to src/data/appstore-cache.json (${Object.keys(entries).length} apps)\n`)

  console.log('📣 Fetching App Store reviews...\n')
  const reviews = await fetchReviews()
  const reviewsPath = resolve(import.meta.dirname, '../src/data/reviews-cache.json')
  const reviewsOutput = {
    fetchedAt: new Date().toISOString(),
    reviews,
  }
  writeFileSync(reviewsPath, JSON.stringify(reviewsOutput, null, 2), 'utf-8')
  console.log(`✅ Written to src/data/reviews-cache.json (${reviews.length} reviews)\n`)
}

main()
