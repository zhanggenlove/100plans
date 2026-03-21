/**
 * Build-time OG image generator: 1200×630 PNGs for product pages + homepage default.
 */
import satori, { type Font } from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const WIDTH = 1200
const HEIGHT = 630

const scriptDir =
  typeof import.meta.dirname !== 'undefined'
    ? import.meta.dirname
    : dirname(fileURLToPath(import.meta.url))

const PRODUCTS = [
  { slug: 'chanfei', name: '禅扉', subtitle: '4K+ dynamic wallpapers', gradient: ['#8b5cf6', '#9333ea'] },
  { slug: 'coin-focus', name: 'Coin Focus', subtitle: 'Smart personal finance tracker', gradient: ['#10b981', '#14b8a6'] },
  { slug: 'moocat', name: 'Moocat输入法', subtitle: 'AI-powered keyboard', gradient: ['#ec4899', '#f43f5e'] },
  { slug: 'quick-keyboard', name: '快捷键盘Pro', subtitle: 'High-efficiency keyboard', gradient: ['#f59e0b', '#f97316'] },
  { slug: 'doc-scanner', name: '文档扫描小助手', subtitle: 'PDF scanner & editor', gradient: ['#3b82f6', '#06b6d4'] },
  { slug: 'zzzappy', name: 'Zzzappy', subtitle: 'Screen break & RSI protection', gradient: ['#22c55e', '#84cc16'] },
  { slug: 'music-switch', name: 'Music Switch', subtitle: 'Cross-platform playlist migration', gradient: ['#6366f1', '#8b5cf6'] },
  { slug: 'sakurago', name: '桜語', subtitle: 'Next-gen Japanese vocabulary tool', gradient: ['#ec4899', '#8b5cf6'] },
] as const

function loadNotoFonts(): Font[] {
  const base = resolve(scriptDir, '../node_modules/@fontsource/noto-sans-sc/files')
  // Satori uses opentype.js — WOFF2 is not supported; use WOFF.
  return [
    {
      name: 'Noto Sans SC',
      data: readFileSync(resolve(base, 'noto-sans-sc-chinese-simplified-400-normal.woff')),
      weight: 400,
      style: 'normal',
    },
    {
      name: 'Noto Sans SC',
      data: readFileSync(resolve(base, 'noto-sans-sc-chinese-simplified-700-normal.woff')),
      weight: 700,
      style: 'normal',
    },
  ]
}

/** Layered gradients + subtle grid read as texture in OG cards */
function noiseOverlayStyle(): Record<string, string | number> {
  return {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0.42,
    backgroundImage: [
      'repeating-linear-gradient(0deg, rgba(255,255,255,0.045) 0px, rgba(255,255,255,0.045) 1px, transparent 1px, transparent 5px)',
      'repeating-linear-gradient(90deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 6px)',
      'radial-gradient(ellipse at 20% 30%, rgba(255,255,255,0.14) 0%, transparent 55%)',
      'radial-gradient(ellipse at 80% 70%, rgba(0,0,0,0.12) 0%, transparent 50%)',
    ].join(', '),
  }
}

function ogLayout(options: {
  title: string
  subtitle: string
  gradientFrom: string
  gradientTo: string
  footerLabel: string
  titleSize: number
}) {
  const { title, subtitle, gradientFrom, gradientTo, footerLabel, titleSize } = options

  return {
    type: 'div',
    props: {
      style: {
        width: WIDTH,
        height: HEIGHT,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
        fontFamily: 'Noto Sans SC',
        overflow: 'hidden',
      },
      children: [
        {
          type: 'div',
          props: { style: noiseOverlayStyle() },
        },
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '56px 72px',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: titleSize,
                    fontWeight: 700,
                    color: '#ffffff',
                    textAlign: 'center',
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    maxWidth: '100%',
                  },
                  children: title,
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: 28,
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.82)',
                    marginTop: 18,
                    textAlign: 'center',
                    lineHeight: 1.35,
                    maxWidth: 920,
                  },
                  children: subtitle,
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              bottom: 40,
              right: 56,
              fontSize: 20,
              color: 'rgba(255,255,255,0.55)',
              fontWeight: 700,
              letterSpacing: '0.04em',
            },
            children: footerLabel,
          },
        },
      ],
    },
  }
}

async function renderPng(
  element: Parameters<typeof satori>[0],
  fonts: Font[],
  outputPath: string
) {
  const svg = await satori(element, {
    width: WIDTH,
    height: HEIGHT,
    fonts,
  })

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: WIDTH },
  })
  const png = resvg.render().asPng()
  writeFileSync(outputPath, png)
}

async function main() {
  console.log('🖼️  Generating OG images...\n')

  const outDir = resolve(scriptDir, '../public/og')
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

  const fonts = loadNotoFonts()

  for (const product of PRODUCTS) {
    const outPath = resolve(outDir, `${product.slug}.png`)
    const el = ogLayout({
      title: product.name,
      subtitle: product.subtitle,
      gradientFrom: product.gradient[0],
      gradientTo: product.gradient[1],
      footerLabel: '100Plans',
      titleSize: 64,
    })
    await renderPng(el, fonts, outPath)
    console.log(`  ✓ ${product.slug}.png`)
  }

  const defaultPath = resolve(outDir, 'default.png')
  const defaultEl = ogLayout({
    title: '100Plans',
    subtitle: 'Apps that make life better',
    gradientFrom: '#4f46e5',
    gradientTo: '#7c3aed',
    footerLabel: '100Plans Studio',
    titleSize: 72,
  })
  await renderPng(defaultEl, fonts, defaultPath)
  console.log(`  ✓ default.png`)

  console.log(`\n✅ Generated ${PRODUCTS.length + 1} OG images\n`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
