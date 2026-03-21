<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let raf = 0
let w = 0
let h = 0
let dpr = 1
let mouse = { x: -9999, y: -9999, active: false }
let smoothMouse = { x: -9999, y: -9999 }
let paused = false

const isDark = ref(document.documentElement.classList.contains('dark'))
const observer = new MutationObserver(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

interface Blob {
  x: number; y: number
  vx: number; vy: number
  radius: number
  color: [number, number, number]
  phase: number
  speed: number
}

interface Particle {
  x: number; y: number
  vx: number; vy: number
  baseVx: number; baseVy: number
  size: number
  alpha: number
  pulsePhase: number
  pulseSpeed: number
}

const brandColors: [number, number, number][] = [
  [99, 102, 241],   // indigo
  [16, 185, 129],   // emerald
  [236, 72, 153],   // pink
  [245, 158, 11],   // amber
  [139, 92, 246],   // violet
]

let blobs: Blob[] = []
let particles: Particle[] = []

function initBlobs() {
  blobs = brandColors.slice(0, 4).map((color, i) => ({
    x: (w * (0.15 + i * 0.23)) + (Math.random() - 0.5) * w * 0.1,
    y: (h * (0.2 + (i % 2) * 0.4)) + (Math.random() - 0.5) * h * 0.15,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.25,
    radius: w * (0.18 + Math.random() * 0.12),
    color,
    phase: Math.random() * Math.PI * 2,
    speed: 0.0003 + Math.random() * 0.0003,
  }))
}

function initParticles() {
  const count = Math.min(50, Math.floor(w * h / 25000))
  particles = Array.from({ length: count }, () => {
    const vx = (Math.random() - 0.5) * 0.4
    const vy = (Math.random() - 0.5) * 0.3
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      vx, vy,
      baseVx: vx,
      baseVy: vy,
      size: 1.5 + Math.random() * 2.5,
      alpha: 0.08 + Math.random() * 0.18,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.008 + Math.random() * 0.012,
    }
  })
}

function resize() {
  if (!canvasRef.value) return
  const rect = canvasRef.value.getBoundingClientRect()
  dpr = Math.min(window.devicePixelRatio, 2) * 0.5
  w = rect.width
  h = rect.height
  canvasRef.value.width = w * dpr
  canvasRef.value.height = h * dpr
  ctx = canvasRef.value.getContext('2d', { alpha: true })
  if (ctx) ctx.scale(dpr, dpr)
  initBlobs()
  initParticles()
}

function drawBlobs(_time: number) {
  if (!ctx) return
  const dark = isDark.value
  const baseAlpha = dark ? 0.06 : 0.18

  for (const blob of blobs) {
    blob.phase += blob.speed
    blob.x += blob.vx + Math.sin(blob.phase) * 0.4
    blob.y += blob.vy + Math.cos(blob.phase * 0.7) * 0.35

    if (blob.x < -blob.radius * 0.5) blob.vx = Math.abs(blob.vx)
    if (blob.x > w + blob.radius * 0.5) blob.vx = -Math.abs(blob.vx)
    if (blob.y < -blob.radius * 0.5) blob.vy = Math.abs(blob.vy)
    if (blob.y > h + blob.radius * 0.5) blob.vy = -Math.abs(blob.vy)

    const scaleOsc = 1 + Math.sin(blob.phase * 1.3) * 0.08
    const r = blob.radius * scaleOsc

    const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, r)
    const [cr, cg, cb] = blob.color
    grad.addColorStop(0, `rgba(${cr},${cg},${cb},${baseAlpha})`)
    grad.addColorStop(0.5, `rgba(${cr},${cg},${cb},${baseAlpha * 0.5})`)
    grad.addColorStop(1, `rgba(${cr},${cg},${cb},0)`)

    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.ellipse(blob.x, blob.y, r, r * (0.85 + Math.sin(blob.phase * 0.6) * 0.15), blob.phase * 0.1, 0, Math.PI * 2)
    ctx.fill()
  }
}

function drawParticles(_time: number) {
  if (!ctx) return
  const dark = isDark.value
  const alphaMultiplier = dark ? 0.5 : 1

  for (const p of particles) {
    p.pulsePhase += p.pulseSpeed
    const pulse = 0.6 + Math.sin(p.pulsePhase) * 0.4

    if (mouse.active) {
      const dx = mouse.x - p.x
      const dy = mouse.y - p.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 250) {
        const force = (1 - dist / 250) * 0.15
        p.vx += dx / dist * force
        p.vy += dy / dist * force
      }
    }

    p.vx += (p.baseVx - p.vx) * 0.02
    p.vy += (p.baseVy - p.vy) * 0.02

    p.x += p.vx
    p.y += p.vy

    if (p.x < 0) p.x = w
    if (p.x > w) p.x = 0
    if (p.y < 0) p.y = h
    if (p.y > h) p.y = 0

    const alpha = p.alpha * pulse * alphaMultiplier
    ctx.fillStyle = dark
      ? `rgba(200,200,255,${alpha})`
      : `rgba(80,70,180,${alpha})`
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx.fill()
  }

  const lineAlpha = (dark ? 0.03 : 0.045) * alphaMultiplier
  ctx.strokeStyle = dark
    ? `rgba(200,200,255,${lineAlpha})`
    : `rgba(80,70,180,${lineAlpha})`
  ctx.lineWidth = 0.5
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = dx * dx + dy * dy
      if (dist < 22000) {
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }
}

function drawMouseGlow() {
  if (!ctx || !mouse.active) return
  const dark = isDark.value

  smoothMouse.x += (mouse.x - smoothMouse.x) * 0.08
  smoothMouse.y += (mouse.y - smoothMouse.y) * 0.08

  const radius = 300
  const alpha = dark ? 0.07 : 0.12
  const grad = ctx.createRadialGradient(
    smoothMouse.x, smoothMouse.y, 0,
    smoothMouse.x, smoothMouse.y, radius,
  )
  grad.addColorStop(0, `rgba(99,102,241,${alpha})`)
  grad.addColorStop(0.4, `rgba(139,92,246,${alpha * 0.5})`)
  grad.addColorStop(1, 'rgba(99,102,241,0)')
  ctx.fillStyle = grad
  ctx.fillRect(smoothMouse.x - radius, smoothMouse.y - radius, radius * 2, radius * 2)
}

function frame(time: number) {
  if (paused || !ctx) {
    raf = requestAnimationFrame(frame)
    return
  }
  ctx.clearRect(0, 0, w, h)
  drawBlobs(time)
  drawParticles(time)
  drawMouseGlow()
  raf = requestAnimationFrame(frame)
}

function onMouseMove(e: MouseEvent) {
  if (!canvasRef.value) return
  const rect = canvasRef.value.getBoundingClientRect()
  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top
  mouse.active = true
}

function onMouseLeave() {
  mouse.active = false
}

function onVisibilityChange() {
  paused = document.hidden
}

onMounted(() => {
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    resize()
    // Draw single static frame
    if (ctx) {
      ctx.clearRect(0, 0, w, h)
      drawBlobs(0)
      drawParticles(0)
    }
    return
  }
  resize()
  raf = requestAnimationFrame(frame)
  window.addEventListener('resize', resize)
  document.addEventListener('visibilitychange', onVisibilityChange)
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
  document.removeEventListener('visibilitychange', onVisibilityChange)
  observer.disconnect()
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="pointer-events-none absolute inset-0 h-full w-full"
    @mousemove.passive="onMouseMove"
    @mouseleave="onMouseLeave"
    style="pointer-events: auto"
  />
</template>
