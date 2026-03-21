import type { LocalizedString } from '@/types/product'

export interface ProductPolicy {
  privacy: LocalizedString
  terms: LocalizedString
}

const loaders: Record<string, () => Promise<ProductPolicy>> = {
  chanfei: async () => (await import('./policies/chanfei')).chanfeiPolicy,
  'coin-focus': async () => (await import('./policies/coin-focus')).coinFocusPolicy,
  moocat: async () => (await import('./policies/moocat')).moocatPolicy,
  'quick-keyboard': async () => (await import('./policies/quick-keyboard')).quickKeyboardPolicy,
  'doc-scanner': async () => (await import('./policies/doc-scanner')).docScannerPolicy,
  zzzappy: async () => (await import('./policies/zzzappy')).zzzappyPolicy,
  'music-switch': async () => (await import('./policies/music-switch')).musicSwitchPolicy,
  sakurago: async () => (await import('./policies/sakurago')).sakuragoPolicy,
}

export async function loadPolicy(slug: string): Promise<ProductPolicy | null> {
  const loader = loaders[slug]
  if (!loader) return null
  return loader()
}
