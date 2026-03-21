<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight, X } from 'lucide-vue-next'
import type { ProductScreenshot } from '@/types/product'

const props = defineProps<{
  screenshots: ProductScreenshot[]
  name: string
}>()

const scrollContainer = ref<HTMLElement | null>(null)
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

function scroll(direction: 'left' | 'right') {
  if (!scrollContainer.value) return
  const amount = scrollContainer.value.clientWidth * 0.6
  scrollContainer.value.scrollBy({
    left: direction === 'left' ? -amount : amount,
    behavior: 'smooth',
  })
}

function openLightbox(index: number) {
  lightboxIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function prevImage() {
  lightboxIndex.value = (lightboxIndex.value - 1 + props.screenshots.length) % props.screenshots.length
}

function nextImage() {
  lightboxIndex.value = (lightboxIndex.value + 1) % props.screenshots.length
}

function onKeydown(e: KeyboardEvent) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section v-if="screenshots.length" class="relative py-8">
    <div class="group/gallery relative">
      <button
        @click="scroll('left')"
        aria-label="Scroll left"
        class="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-500 opacity-0 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-slate-900 group-hover/gallery:opacity-100 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-400 dark:hover:text-white sm:-left-5"
      >
        <ChevronLeft class="h-5 w-5" />
      </button>
      <button
        @click="scroll('right')"
        aria-label="Scroll right"
        class="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-500 opacity-0 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-slate-900 group-hover/gallery:opacity-100 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-400 dark:hover:text-white sm:-right-5"
      >
        <ChevronRight class="h-5 w-5" />
      </button>

      <div
        ref="scrollContainer"
        class="screenshot-scroll flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-4 sm:gap-4"
      >
        <button
          v-for="(ss, i) in screenshots"
          :key="i"
          @click="openLightbox(i)"
          class="shrink-0 cursor-zoom-in snap-start overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-50 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-800/40"
          :class="{
            'screenshot-frame-iphone w-[180px] sm:w-[220px]': ss.type === 'iphone',
            'screenshot-frame-mac w-[360px] sm:w-[460px]': ss.type === 'mac',
            'screenshot-frame-web w-[360px] sm:w-[460px]': ss.type === 'web',
            'w-[240px] sm:w-[300px]': ss.type === 'ipad',
          }"
        >
          <img
            :src="ss.url"
            :alt="`${name} - Screenshot ${i + 1}`"
            class="h-full w-full object-cover"
            loading="lazy"
          />
        </button>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="lightboxOpen"
          class="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          @click.self="closeLightbox"
        >
          <!-- Close button -->
          <button
            @click="closeLightbox"
            aria-label="Close lightbox"
            class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          >
            <X class="h-5 w-5" />
          </button>

          <!-- Counter -->
          <div class="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white/80">
            {{ lightboxIndex + 1 }} / {{ screenshots.length }}
          </div>

          <!-- Prev button -->
          <button
            v-if="screenshots.length > 1"
            @click="prevImage"
            aria-label="Previous screenshot"
            class="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          >
            <ChevronLeft class="h-6 w-6" />
          </button>

          <!-- Image -->
          <div class="flex max-h-[85vh] max-w-[90vw] items-center justify-center">
            <img
              :src="screenshots[lightboxIndex].url"
              :alt="`${name} - Screenshot ${lightboxIndex + 1}`"
              class="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
              :class="{
                'max-w-[40vw]': screenshots[lightboxIndex].type === 'iphone',
              }"
            />
          </div>

          <!-- Next button -->
          <button
            v-if="screenshots.length > 1"
            @click="nextImage"
            aria-label="Next screenshot"
            class="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          >
            <ChevronRight class="h-6 w-6" />
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
