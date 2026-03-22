<script setup lang="ts">
import { useSeoMeta } from '@/composables/useSeoMeta'
import ZzzappyHero from '@/components/zzzappy/ZzzappyHero.vue'
import ZzzappyProblem from '@/components/zzzappy/ZzzappyProblem.vue'
import ZzzappyDualGuard from '@/components/zzzappy/ZzzappyDualGuard.vue'
import ZzzappyEyeCare from '@/components/zzzappy/ZzzappyEyeCare.vue'
import ZzzappyArmGuard from '@/components/zzzappy/ZzzappyArmGuard.vue'
import ZzzappySmartPause from '@/components/zzzappy/ZzzappySmartPause.vue'
import ZzzappyBreakExperience from '@/components/zzzappy/ZzzappyBreakExperience.vue'
import ZzzappyDashboard from '@/components/zzzappy/ZzzappyDashboard.vue'
import ZzzappyFeatureGrid from '@/components/zzzappy/ZzzappyFeatureGrid.vue'
import ZzzappyPricing from '@/components/zzzappy/ZzzappyPricing.vue'
import ZzzappyCTA from '@/components/zzzappy/ZzzappyCTA.vue'

useSeoMeta(() => ({
  title: 'Zzzappy — Rest well, smile more.',
  description: 'Dual health guard for your Mac. Protects both your eyes and arms.',
}))
</script>

<template>
  <div class="zzzappy-landing">
    <ZzzappyHero />
    <ZzzappyProblem />
    <ZzzappyDualGuard />
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
