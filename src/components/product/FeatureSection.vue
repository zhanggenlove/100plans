<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  Activity,
  ArrowLeftRight,
  BarChart3,
  Brain,
  Clipboard,
  Cloud,
  Edit,
  Eye,
  Gamepad2,
  Globe,
  Languages,
  Layers,
  ListMusic,
  MessageSquare,
  Palette,
  Pause,
  Paintbrush,
  PieChart,
  Receipt,
  Save,
  ScanLine,
  Share2,
  Smartphone,
  Sparkles,
  Stamp,
  Star,
  Zap,
} from 'lucide-vue-next'

const iconMap: Record<string, typeof Star> = {
  Activity,
  ArrowLeftRight,
  BarChart3,
  Brain,
  Clipboard,
  Cloud,
  Edit,
  Eye,
  Gamepad2,
  Globe,
  Languages,
  Layers,
  ListMusic,
  MessageSquare,
  Palette,
  Pause,
  Paintbrush,
  PieChart,
  Receipt,
  Save,
  ScanLine,
  Share2,
  Smartphone,
  Sparkles,
  Stamp,
  Star,
  Zap,
}

const props = defineProps<{
  features: { icon: string; title: string; description: string }[]
  gradient: { from: string; to: string }
}>()

const { t } = useI18n()

const visible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.05 },
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

function cardStyle(idx: number) {
  return computed(() => ({
    opacity: visible.value ? '1' : '0',
    transform: visible.value ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)',
    transitionDelay: visible.value ? `${idx * 100 + 100}ms` : '0ms',
  }))
}

const resolvedFeatures = computed(() =>
  props.features.map((f) => ({
    ...f,
    iconComponent: iconMap[f.icon] ?? Star,
  })),
)
</script>

<template>
  <section ref="sectionRef" class="py-12">
    <div
      class="mb-8"
      :style="{
        opacity: visible ? '1' : '0',
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
      }"
    >
      <h2 class="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
        {{ t('product.features') }}
      </h2>
    </div>
    <div class="grid gap-4 sm:grid-cols-2">
      <div
        v-for="(feature, index) in resolvedFeatures"
        :key="index"
        class="card-surface group/feat p-6 transition-shadow duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        :style="cardStyle(index).value"
      >
        <div
          class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover/feat:scale-110"
          :class="[`from-${gradient.from}`, `to-${gradient.to}`]"
        >
          <component :is="feature.iconComponent" class="h-5 w-5" />
        </div>
        <h3 class="mb-2 font-semibold">{{ feature.title }}</h3>
        <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>
