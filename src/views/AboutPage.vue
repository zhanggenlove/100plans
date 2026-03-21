<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Github, Twitter, Mail, Code2, Sparkles } from 'lucide-vue-next'
import { useSeoMeta } from '@/composables/useSeoMeta'
import { products } from '@/data/products'

const { t, locale } = useI18n()

useSeoMeta(() => ({
  title: t('about.title'),
  description: t('about.intro'),
}))

const techStack = [
  { name: 'Swift / SwiftUI', desc: 'iOS & macOS' },
  { name: 'Flutter / Dart', desc: 'Cross-platform' },
  { name: 'Vue.js / TypeScript', desc: 'Web frontend' },
  { name: 'Supabase', desc: 'Backend / Auth' },
]
</script>

<template>
  <div class="pb-24 pt-12">
    <div class="mx-auto max-w-3xl px-6">
      <!-- Header -->
      <div class="mb-20">
        <p class="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          {{ t('about.title') }}
        </p>
        <h1 class="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
          {{ t('about.philosophy') }}
        </h1>
        <p class="text-base leading-[1.8] text-slate-500 dark:text-slate-400">
          {{ t('about.intro') }}
        </p>
      </div>

      <!-- Philosophy -->
      <div class="mb-16 card-surface p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
            <Sparkles class="h-5 w-5" />
          </div>
          <h2 class="text-lg font-semibold">{{ t('about.philosophy') }}</h2>
        </div>
        <p class="leading-[1.8] text-slate-500 dark:text-slate-400">
          {{ t('about.philosophyDesc') }}
        </p>
      </div>

      <!-- Apps showcase -->
      <div class="mb-16">
        <h2 class="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          {{ t('nav.products') }}
        </h2>
        <div class="flex flex-wrap gap-3">
          <router-link
            v-for="p in products"
            :key="p.id"
            :to="`/${locale}/app/${p.slug}`"
            class="group"
          >
            <img
              :src="p.icon"
              :alt="p.name"
              class="app-icon h-14 w-14 shadow-md transition-transform group-hover:scale-110"
              loading="lazy"
            />
          </router-link>
        </div>
      </div>

      <!-- Tech Stack -->
      <div class="mb-16">
        <h2 class="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          <Code2 class="h-4 w-4" />
          {{ t('about.techStack') }}
        </h2>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div v-for="tech in techStack" :key="tech.name" class="card-surface p-4">
            <p class="text-sm font-medium">{{ tech.name }}</p>
            <p class="mt-0.5 text-xs text-slate-400 dark:text-slate-500">{{ tech.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div class="card-surface p-8">
        <h2 class="mb-5 text-lg font-semibold">{{ t('about.contact') }}</h2>
        <div class="flex flex-wrap gap-3">
          <a
            href="https://github.com/zhanggenlove"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Github class="h-4 w-4" />
            {{ t('about.github') }}
          </a>
          <a
            href="https://x.com/Rootzhanggen"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Twitter class="h-4 w-4" />
            {{ t('about.twitter') }}
          </a>
          <a
            href="mailto:zhanggenlove@gmail.com"
            class="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Mail class="h-4 w-4" />
            {{ t('about.email') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
