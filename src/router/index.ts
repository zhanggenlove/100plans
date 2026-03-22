import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { nextTick } from 'vue'

const HomePage = () => import('@/views/HomePage.vue')
const ProductPage = () => import('@/views/ProductPage.vue')
const ZzzappyLandingPage = () => import('@/views/ZzzappyLandingPage.vue')
const PrivacyPage = () => import('@/views/PrivacyPage.vue')
const TermsPage = () => import('@/views/TermsPage.vue')
const AboutPage = () => import('@/views/AboutPage.vue')
const BlogListPage = () => import('@/views/BlogListPage.vue')
const BlogPostPage = () => import('@/views/BlogPostPage.vue')
const SitePrivacyPage = () => import('@/views/SitePrivacyPage.vue')
const SiteTermsPage = () => import('@/views/SiteTermsPage.vue')
const NotFoundPage = () => import('@/views/NotFoundPage.vue')

const SUPPORTED_LOCALES = ['en', 'zh', 'ja'] as const

function detectBrowserLocale(): string {
  const stored = localStorage.getItem('locale')
  if (stored && SUPPORTED_LOCALES.includes(stored as any)) return stored

  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('zh')) return 'zh'
  if (nav.startsWith('ja')) return 'ja'
  return 'en'
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: () => `/${detectBrowserLocale()}`,
  },
  {
    path: '/:locale(en|zh|ja)',
    children: [
      { path: '', name: 'home', component: HomePage },
      { path: 'app/zzzappy', name: 'zzzappy', component: ZzzappyLandingPage },
      { path: 'app/:slug', name: 'product', component: ProductPage },
      { path: 'app/:slug/privacy', name: 'privacy', component: PrivacyPage },
      { path: 'app/:slug/terms', name: 'terms', component: TermsPage },
      { path: 'about', name: 'about', component: AboutPage },
      { path: 'blog', name: 'blog', component: BlogListPage },
      { path: 'blog/:slug', name: 'blog-post', component: BlogPostPage },
      { path: 'privacy', name: 'site-privacy', component: SitePrivacyPage },
      { path: 'terms', name: 'site-terms', component: SiteTermsPage },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
})

router.afterEach((to) => {
  nextTick(() => {
    const locale = (to.params.locale as string) ?? 'en'
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : locale
  })
})

export default router
export { SUPPORTED_LOCALES, detectBrowserLocale }
