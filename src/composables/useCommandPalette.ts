import { ref, computed, watch, type Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, type Router } from 'vue-router'
import Fuse from 'fuse.js'
import { products } from '@/data/products'
import type { Locale } from '@/types/product'

export interface SearchItem {
  id: string
  name: string
  subtitle: string
  icon?: string
  type: 'product' | 'page'
  path: string
}

const isOpen = ref(false)
const query = ref('')
const activeIndex = ref(0)

let _resultsRef: Ref<SearchItem[]> | null = null
let _router: Router | null = null

function open() {
  isOpen.value = true
  query.value = ''
  activeIndex.value = 0
}

function close() {
  isOpen.value = false
  query.value = ''
}

function handleKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    isOpen.value ? close() : open()
    return
  }

  if (!isOpen.value) return

  switch (e.key) {
    case 'Escape':
      e.preventDefault()
      close()
      break
    case 'ArrowUp':
      e.preventDefault()
      activeIndex.value = Math.max(0, activeIndex.value - 1)
      break
    case 'ArrowDown':
      e.preventDefault()
      if (_resultsRef) {
        activeIndex.value = Math.min(_resultsRef.value.length - 1, activeIndex.value + 1)
      }
      break
    case 'Enter':
      e.preventDefault()
      if (_resultsRef && _router) {
        const item = _resultsRef.value[activeIndex.value]
        if (item) {
          close()
          _router.push(item.path)
        }
      }
      break
  }
}

let bound = false

export function useCommandPalette() {
  const { locale, t } = useI18n()
  const router = useRouter()
  _router = router

  if (!bound) {
    window.addEventListener('keydown', handleKeydown)
    bound = true
  }

  const l = computed(() => locale.value as Locale)

  const searchItems = computed<SearchItem[]>(() => {
    const loc = l.value
    const prefix = `/${loc}`

    const productItems: SearchItem[] = products.map((p) => ({
      id: p.id,
      name: p.name,
      subtitle: p.subtitle[loc],
      icon: p.icon,
      type: 'product',
      path: `${prefix}/app/${p.slug}`,
    }))

    const pageItems: SearchItem[] = [
      { id: 'page-home', name: t('nav.home'), subtitle: '100Plans', type: 'page', path: prefix || '/' },
      { id: 'page-about', name: t('nav.about'), subtitle: t('about.philosophy'), type: 'page', path: `${prefix}/about` },
      { id: 'page-blog', name: t('nav.blog'), subtitle: '100Plans', type: 'page', path: `${prefix}/blog` },
      { id: 'page-privacy', name: t('footer.sitePrivacy'), subtitle: '100Plans', type: 'page', path: `${prefix}/privacy` },
      { id: 'page-terms', name: t('footer.siteTerms'), subtitle: '100Plans', type: 'page', path: `${prefix}/terms` },
    ]

    return [...productItems, ...pageItems]
  })

  const fuse = computed(() => new Fuse(searchItems.value, {
    keys: [
      { name: 'name', weight: 2 },
      { name: 'subtitle', weight: 1 },
    ],
    threshold: 0.35,
    includeScore: true,
  }))

  const results = computed<SearchItem[]>(() => {
    if (!query.value.trim()) return searchItems.value
    return fuse.value.search(query.value).map((r) => r.item)
  })

  _resultsRef = results

  watch(query, () => { activeIndex.value = 0 })

  function select(item: SearchItem) {
    close()
    router.push(item.path)
  }

  return {
    isOpen,
    query,
    activeIndex,
    results,
    open,
    close,
    select,
  }
}
