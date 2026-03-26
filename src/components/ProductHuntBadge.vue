<script setup lang="ts">
/**
 * Product Hunt Badge — reusable across landing pages.
 *
 * Usage:
 *   <ProductHuntBadge post-id="123456" slug="music-switch" theme="light" />
 *
 * Before launching on PH, leave postId empty to show a "Coming soon" placeholder.
 * After launch, set postId + slug to display the official live badge with upvote count.
 */
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  postId?: string
  slug?: string
  theme?: 'light' | 'dark' | 'neutral'
  tagline?: string
}>(), {
  postId: '',
  slug: '',
  theme: 'light',
  tagline: '',
})

const isLive = computed(() => !!props.postId)

const badgeUrl = computed(() =>
  `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${props.postId}&theme=${props.theme}`,
)

const postUrl = computed(() =>
  `https://www.producthunt.com/posts/${props.slug}?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-featured`,
)
</script>

<template>
  <div class="ph-badge-wrapper inline-flex items-center justify-center">
    <!-- live PH badge (after launch) -->
    <a
      v-if="isLive"
      :href="postUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="ph-badge-live inline-block transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
    >
      <img
        :src="badgeUrl"
        :alt="`${slug} | Product Hunt`"
        width="250"
        height="54"
        loading="lazy"
        class="h-[54px] w-[250px]"
      />
    </a>

    <!-- placeholder badge (before PH launch) -->
    <a
      v-else
      href="https://www.producthunt.com"
      target="_blank"
      rel="noopener noreferrer"
      class="ph-placeholder group inline-flex items-center gap-3 rounded-full border px-5 py-2.5 no-underline transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
      :class="theme === 'dark'
        ? 'border-white/10 bg-white/[0.06] hover:border-white/20 hover:bg-white/[0.1]'
        : 'border-gray-200 bg-white/80 shadow-sm backdrop-blur-sm hover:border-[#DA552F]/30 hover:shadow-md dark:border-gray-700 dark:bg-gray-800/80 dark:hover:border-[#DA552F]/30'"
    >
      <!-- PH logo -->
      <div class="flex h-8 w-8 items-center justify-center rounded-full bg-[#DA552F]">
        <span class="text-sm font-bold text-white">P</span>
      </div>

      <div class="flex flex-col items-start leading-tight">
        <span
          class="text-[10px] font-semibold uppercase tracking-wider"
          :class="theme === 'dark' ? 'text-white/40' : 'text-gray-400 dark:text-gray-500'"
        >
          COMING SOON ON
        </span>
        <span
          class="text-sm font-bold"
          :class="theme === 'dark' ? 'text-white/80' : 'text-gray-700 dark:text-gray-200'"
        >
          Product Hunt
        </span>
      </div>

      <!-- rocket icon -->
      <div
        class="ml-1 flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-300"
        :class="theme === 'dark'
          ? 'bg-white/[0.06] group-hover:bg-[#DA552F]/20'
          : 'bg-gray-50 group-hover:bg-[#DA552F]/10 dark:bg-gray-700 dark:group-hover:bg-[#DA552F]/20'"
      >
        <svg
          class="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
          :class="theme === 'dark' ? 'text-[#DA552F]/70' : 'text-[#DA552F]'"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M8 1l2 5h5l-4 3.5 1.5 5L8 11.5 3.5 14.5 5 9.5 1 6h5z" />
        </svg>
      </div>
    </a>
  </div>
</template>
