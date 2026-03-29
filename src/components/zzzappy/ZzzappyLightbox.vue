<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const lightboxSrc = ref<string | null>(null)
const ready = ref(false)

function open(src: string) {
  lightboxSrc.value = src
  requestAnimationFrame(() => { ready.value = true })
}

function close() {
  ready.value = false
  setTimeout(() => { lightboxSrc.value = null }, 300)
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))

defineExpose({ open })
</script>

<template>
  <Teleport to="body">
    <div
      v-if="lightboxSrc"
      class="zz-lb"
      :class="{ 'zz-lb--active': ready }"
      @click.self="close"
    >
      <button
        class="absolute right-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl ring-1 ring-white/20 transition hover:bg-white/20"
        aria-label="Close"
        @click="close"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <img
        :src="lightboxSrc"
        alt=""
        class="zz-lb-img"
        :class="{ 'zz-lb-img--active': ready }"
      />
    </div>
  </Teleport>
</template>

<style scoped>
.zz-lb {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0px);
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
}
.zz-lb--active {
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(20px);
}
.zz-lb-img {
  max-width: 90vw;
  max-height: 85vh;
  border-radius: 16px;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.6);
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.zz-lb-img--active {
  opacity: 1;
  transform: scale(1);
}
</style>
