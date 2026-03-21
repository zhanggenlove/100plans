<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Github, Mail, Twitter } from 'lucide-vue-next'

const { t, locale } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer role="contentinfo" class="border-t border-slate-100 dark:border-slate-800/50">
    <div class="mx-auto max-w-6xl px-6 py-16">
      <div class="grid gap-12 sm:grid-cols-3">
        <!-- Brand -->
        <div>
          <p class="text-base font-bold tracking-tight text-slate-900 dark:text-white">100Plans</p>
          <p class="mt-2 text-sm text-slate-400 dark:text-slate-500">
            {{ t('footer.madeWith') }}
          </p>
        </div>

        <!-- Links -->
        <div>
          <p class="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">{{ t('footer.links') }}</p>
          <ul class="space-y-2">
            <li>
              <router-link :to="`/${locale}`" class="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                {{ t('nav.home') }}
              </router-link>
            </li>
            <li>
              <router-link :to="`/${locale}/about`" class="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                {{ t('nav.about') }}
              </router-link>
            </li>
            <li>
              <router-link :to="`/${locale}/blog`" class="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                {{ t('nav.blog') }}
              </router-link>
            </li>
            <li>
              <router-link :to="`/${locale}/privacy`" class="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                {{ t('footer.sitePrivacy') }}
              </router-link>
            </li>
            <li>
              <router-link :to="`/${locale}/terms`" class="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                {{ t('footer.siteTerms') }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <p class="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">{{ t('footer.connect') }}</p>
          <ul class="space-y-2.5">
            <li>
              <a
                href="https://github.com/zhanggenlove"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                <Github class="h-4 w-4" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Rootzhanggen"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                <Twitter class="h-4 w-4" />
                X (Twitter)
              </a>
            </li>
            <li>
              <a
                href="mailto:zhanggenlove@gmail.com"
                class="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                <Mail class="h-4 w-4" />
                zhanggenlove@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 border-t border-slate-100 pt-6 text-xs text-slate-400 dark:border-slate-800/50 dark:text-slate-600">
        {{ t('footer.copyright', { year }) }}
      </div>
    </div>
  </footer>
</template>
