<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import ProductGrid from '@/components/home/ProductGrid.vue'
import TestimonialSection from '@/components/home/TestimonialSection.vue'
import { useSeoMeta } from '@/composables/useSeoMeta'

useSeoMeta(() => ({
  title: 'Home',
  description: 'Independent developer studio crafting iOS, Mac & Web apps.',
}))
</script>

<template>
  <div>
    <HeroSection />
    <ProductGrid />
    <TestimonialSection />
  </div>
</template>
