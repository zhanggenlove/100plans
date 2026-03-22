<script setup lang="ts">
import { useSeoMeta } from '@/composables/useSeoMeta'
import ZzzappyHero from '@/components/zzzappy/ZzzappyHero.vue'
import ZzzappyScreenshots from '@/components/zzzappy/ZzzappyScreenshots.vue'
import ZzzappyEyeCare from '@/components/zzzappy/ZzzappyEyeCare.vue'
import ZzzappyArmGuard from '@/components/zzzappy/ZzzappyArmGuard.vue'
import ZzzappySmartPause from '@/components/zzzappy/ZzzappySmartPause.vue'
import ZzzappyBreakExperience from '@/components/zzzappy/ZzzappyBreakExperience.vue'
import ZzzappyDashboard from '@/components/zzzappy/ZzzappyDashboard.vue'
import ZzzappyFeatureGrid from '@/components/zzzappy/ZzzappyFeatureGrid.vue'
import ZzzappyPricing from '@/components/zzzappy/ZzzappyPricing.vue'
import ZzzappyCTA from '@/components/zzzappy/ZzzappyCTA.vue'

useSeoMeta(() => ({
  title: 'Zzzappy — Dual Health Guard for Eyes & Arms',
  description: 'A health companion for Mac that monitors screen time and input load simultaneously. Prevent eye strain and RSI with smart breaks.',
}))
</script>

<template>
  <div class="zzzappy-landing">
    <ZzzappyHero />
    <ZzzappyScreenshots />
    <ZzzappyEyeCare />
    <ZzzappyArmGuard />
    <ZzzappySmartPause />
    <ZzzappyBreakExperience />
    <ZzzappyDashboard />
    <ZzzappyFeatureGrid />
    <ZzzappyPricing />
    <ZzzappyCTA />
  </div>
</template>

<style scoped>
.zzzappy-landing {
  color-scheme: dark;
}
</style>
