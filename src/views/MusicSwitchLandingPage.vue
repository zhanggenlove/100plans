<script setup lang="ts">
import { useSeoMeta } from '@/composables/useSeoMeta'
import MSHero from '@/components/music-switch/MSHero.vue'
import MSPlatforms from '@/components/music-switch/MSPlatforms.vue'
import MSHowItWorks from '@/components/music-switch/MSHowItWorks.vue'
import MSFeatures from '@/components/music-switch/MSFeatures.vue'
import MSPricing from '@/components/music-switch/MSPricing.vue'
import MSCTA from '@/components/music-switch/MSCTA.vue'

useSeoMeta(() => ({
  title: 'Music Switch — Cross-Platform Playlist Migration',
  description: 'Transfer playlists between Apple Music, YouTube Music, NetEase Cloud Music, and QQ Music with AI-powered matching.',
}))
</script>

<template>
  <div class="music-switch-landing">
    <MSHero />
    <MSPlatforms />
    <MSHowItWorks />
    <MSFeatures />
    <MSPricing />
    <MSCTA />
  </div>
</template>
