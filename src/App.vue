<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import BackToTop from '@/components/common/BackToTop.vue'
import CommandPalette from '@/components/common/CommandPalette.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg focus:outline-none">
      Skip to content
    </a>
    <AppHeader />
    <main id="main-content" class="flex-1 pt-16">
      <router-view v-slot="{ Component, route }">
        <Transition
          name="page"
          mode="out-in"
          appear
        >
          <component :is="Component" :key="route.path" />
        </Transition>
      </router-view>
    </main>
    <AppFooter />
    <BackToTop />
    <CommandPalette />
  </div>
</template>

<style>
.page-enter-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.page-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
