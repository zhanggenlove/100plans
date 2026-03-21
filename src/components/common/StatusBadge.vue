<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { ProductStatus } from '@/types/product'

const props = defineProps<{ status: ProductStatus }>()
const { t } = useI18n()
</script>

<template>
  <span
    class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
    :class="
      props.status === 'released'
        ? 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400'
        : 'bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400'
    "
  >
    {{ props.status === 'released' ? t('product.released') : t('product.comingSoon') }}
  </span>
</template>
