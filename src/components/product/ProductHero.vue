<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import StatusBadge from '@/components/common/StatusBadge.vue'
import DownloadButton from '@/components/product/DownloadButton.vue'

defineProps<{
  name: string
  subtitle: string
  description: string
  icon: string
  platforms: string[]
  category: string
  status: 'released' | 'coming-soon'
  gradient: { from: string; to: string }
  appStoreUrl?: string
  gumroadUrl?: string
  websiteUrl?: string
  meta: {
    rating?: string
    ratingCount?: number
  }
}>()

const entered = ref(false)
onMounted(() => { setTimeout(() => { entered.value = true }, 60) })

function fadeStyle(delay: number) {
  return computed(() => ({
    opacity: entered.value ? '1' : '0',
    transform: entered.value ? 'translateY(0)' : 'translateY(18px)',
    transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
    transitionDelay: `${delay}s`,
  }))
}
</script>

<template>
  <section class="pb-8 pt-6">
    <div class="mx-auto max-w-5xl px-6">
      <div class="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-8 sm:text-left">
        <!-- App icon with glow -->
        <div class="relative shrink-0">
          <div
            class="absolute -inset-3 rounded-[28%] bg-gradient-to-br blur-2xl"
            :class="[`from-${gradient.from}`, `to-${gradient.to}`]"
            :style="{ opacity: entered ? '0.2' : '0', transition: 'opacity 0.7s ease' }"
          />
          <img
            :src="icon"
            :alt="name"
            class="app-icon relative h-28 w-28 shrink-0 shadow-2xl ring-1 ring-black/[0.06] sm:h-32 sm:w-32"
            :style="{
              opacity: entered ? '1' : '0',
              transform: entered ? 'scale(1)' : 'scale(0.75)',
              transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '0.05s',
            }"
            loading="eager"
          />
        </div>

        <!-- Info -->
        <div class="flex-1">
          <!-- Tags -->
          <div class="mb-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start" :style="fadeStyle(0.1).value">
            <span
              v-for="platform in platforms"
              :key="platform"
              class="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400"
            >
              {{ platform }}
            </span>
            <span class="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs text-slate-400 dark:bg-slate-800 dark:text-slate-500">
              {{ category }}
            </span>
            <StatusBadge :status="status" />
            <span
              v-if="meta.rating && meta.rating !== '—'"
              class="flex items-center gap-1 rounded-md bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
            >
              <svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {{ meta.rating }}
              <span class="text-amber-500/70">({{ meta.ratingCount }})</span>
            </span>
          </div>

          <!-- Name -->
          <h1 class="mb-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" :style="fadeStyle(0.15).value">
            {{ name }}
          </h1>

          <!-- Subtitle -->
          <p class="mb-6 text-base leading-relaxed text-slate-500 sm:text-lg dark:text-slate-400" :style="fadeStyle(0.25).value">
            {{ subtitle }}
          </p>

          <!-- Download -->
          <div :style="fadeStyle(0.35).value">
            <DownloadButton
              :app-store-url="appStoreUrl"
              :gumroad-url="gumroadUrl"
              :website-url="websiteUrl"
              :status="status"
              :gradient="gradient"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
