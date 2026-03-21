# 100Plans 网站运维指南

## 项目架构

```
src/
├── data/              # 数据源（产品、博客、政策）
│   ├── products.ts    # 所有产品数据
│   ├── blog.ts        # 所有博客文章
│   ├── policies/      # 各产品的隐私协议和服务条款
│   ├── policy-loader.ts   # 政策懒加载器
│   └── site-legal.ts  # 网站自身的隐私政策和使用条款
├── locales/           # 国际化文案 (en.ts, zh.ts, ja.ts)
├── types/             # TypeScript 类型定义
├── views/             # 页面组件
├── components/        # 复用组件
├── composables/       # 组合式函数
└── router/            # 路由配置
scripts/
├── fetch-appstore.ts  # 构建时拉取 App Store 数据
└── generate-og.ts     # 构建时生成 OG 社交分享图
```

## 部署流程

```
git push origin main
       │
       ├──> GitHub Actions 构建 → 推送 dist 到 zhanggenlove.github.io
       │                           → https://zhanggenlove.github.io/
       │
       └──> Vercel 自动构建部署
                                    → https://100plans.vercel.app/
```

**你只需要 `git push`，两个平台会自动构建和部署。**

构建过程会自动执行：
1. `prebuild`: 从 iTunes API 拉取 App Store 评分/版本/评论，生成 OG 图片
2. `build`: TypeScript 检查 + Vite 打包

---

## 一、新增产品

### 步骤 1：准备 icon

将产品图标放到 `public/images/apps/` 目录：
- 格式：PNG 或 SVG
- 建议尺寸：512x512
- 命名：`your-app.png`（与 slug 保持一致）

### 步骤 2：在 `src/data/products.ts` 添加产品

在 `products` 数组末尾添加一个新对象：

```typescript
{
  id: 'your-app',
  slug: 'your-app',          // URL 中使用的标识，如 /en/app/your-app
  name: 'Your App',          // 显示名称
  subtitle: {
    en: 'English subtitle',
    zh: '中文副标题',
    ja: '日本語サブタイトル',
  },
  description: {
    en: 'English description...',
    zh: '中文描述...',
    ja: '日本語説明...',
  },
  icon: '/images/apps/your-app.png',
  platforms: ['iOS'],         // 可选: 'iOS' | 'iPadOS' | 'macOS' | 'Web'
  category: { en: 'Utilities', zh: '工具', ja: 'ユーティリティ' },
  status: 'released',         // 'released' 或 'coming-soon'
  appStoreUrl: 'https://apps.apple.com/...',   // 可选
  websiteUrl: 'https://...',                   // 可选，Web 产品用
  gradient: { from: 'blue-500', to: 'cyan-500' }, // TailwindCSS 颜色
  screenshots: [
    { url: 'https://...screenshot.jpg', type: 'iphone' },
    // type: 'iphone' | 'ipad' | 'mac' | 'web'
  ],
  features: [
    {
      icon: 'Zap',            // Lucide 图标名
      title: { en: '...', zh: '...', ja: '...' },
      description: { en: '...', zh: '...', ja: '...' },
    },
    // 添加 3-4 个功能
  ],
  pricing: {
    type: 'free',             // 'free' 或 'freemium'
    items: [                  // freemium 时填写内购项
      { name: { en: 'Premium', zh: '高级版', ja: 'プレミアム' }, price: '¥6.00' },
    ],
  },
  meta: {
    size: '10 MB',
    requirements: 'iOS 16.0+',
    languages: ['简体中文', 'English', '日本語'],
    rating: '—',
  },
},
```

> **注意**：`features` 中的 `icon` 使用 Lucide 图标名。如果用了新的图标，需要在 `src/components/product/FeatureSection.vue` 中添加对应的 import。

### 步骤 3：添加隐私协议和服务条款

1. 创建 `src/data/policies/your-app.ts`：

```typescript
import type { LocalizedString } from '@/types/product'

interface ProductPolicy {
  privacy: LocalizedString
  terms: LocalizedString
}

export const yourAppPolicy: ProductPolicy = {
  privacy: {
    en: `## Privacy Policy — Your App\n\n**Last updated: ...**\n\n...Markdown 内容...`,
    zh: `## 隐私协议 — Your App\n\n**最后更新：...**\n\n...Markdown 内容...`,
    ja: `## プライバシーポリシー — Your App\n\n**最終更新：...**\n\n...Markdown 内容...`,
  },
  terms: {
    en: `## Terms of Service — Your App\n\n...`,
    zh: `## 服务条款 — Your App\n\n...`,
    ja: `## 利用規約 — Your App\n\n...`,
  },
}
```

2. 在 `src/data/policies/index.ts` 添加导出：

```typescript
export { yourAppPolicy } from './your-app'
```

3. 在 `src/data/policy-loader.ts` 的 `loaders` 中注册：

```typescript
'your-app': async () => (await import('./policies/your-app')).yourAppPolicy,
```

### 步骤 4（如果是 App Store 产品）：注册到预构建脚本

编辑 `scripts/fetch-appstore.ts`，在 `APP_MAP` 和 `APP_NAMES` 中添加：

```typescript
const APP_MAP: Record<string, string> = {
  // ...已有的
  'your-app': '123456789',    // App Store ID
}

const APP_NAMES: Record<string, string> = {
  // ...已有的
  'your-app': 'Your App',
}
```

### 步骤 5：更新 OG 图片配置

编辑 `scripts/generate-og.ts`，在 `PRODUCTS` 数组中添加：

```typescript
{ slug: 'your-app', name: 'Your App', subtitle: 'Your subtitle', gradient: ['#3b82f6', '#06b6d4'] },
```

### 步骤 6（可选）：更新 Cmd+K 搜索

搜索功能会自动读取 `products` 数组，**无需额外配置**。

### 步骤 7：更新 sitemap

编辑 `public/sitemap.xml`，为新产品添加条目（3 个语言 × 3 个页面 = 9 个 URL）。

### 步骤 8：提交并推送

```bash
git add -A
git commit -m "feat: add Your App product page"
git push
```

---

## 二、新增博客文章

编辑 `src/data/blog.ts`，在数组**开头**添加新文章：

```typescript
{
  slug: 'my-new-post',            // URL 标识，如 /zh/blog/my-new-post
  date: '2026-04-01',             // ISO 日期，用于排序
  tags: ['announcement', 'dev'],  // 标签，用于博客列表筛选
  title: {
    en: 'My New Blog Post',
    zh: '我的新博客文章',
    ja: '新しいブログ記事',
  },
  excerpt: {
    en: 'A brief summary...',
    zh: '简要摘要...',
    ja: '概要...',
  },
  content: {
    en: `# My New Blog Post

Write your **Markdown** content here.

- Supports all standard Markdown syntax
- Images: ![alt](url)
- Code blocks with syntax highlighting
- Links, lists, tables, etc.
`,
    zh: `# 我的新博客文章

在这里写 **Markdown** 内容。
`,
    ja: `# 新しいブログ記事

ここに **Markdown** コンテンツを書きます。
`,
  },
},
```

> 文件末尾有 `.sort()` 按日期倒序排列，所以添加位置不影响显示顺序。  
> 博客路由和搜索功能**会自动包含新文章，无需额外配置**。

提交推送即可上线。

---

## 三、更新产品信息

直接修改 `src/data/products.ts` 中对应产品的字段即可。常见场景：

| 场景 | 修改位置 |
|------|----------|
| 更新描述/副标题 | `description` / `subtitle` 字段 |
| 添加新功能 | `features` 数组中追加 |
| 更新截图 | `screenshots` 数组 |
| 修改价格 | `pricing.items` |
| 产品上架 | `status: 'released'`，添加 `appStoreUrl` |
| 更新技术信息 | `meta` 字段（大小、系统要求等） |

---

## 四、更新隐私协议/服务条款

- **产品级别**：编辑 `src/data/policies/<slug>.ts` 中的 Markdown 内容
- **网站级别**：编辑 `src/data/site-legal.ts`

内容使用 Markdown 格式，支持标题、列表、加粗、链接等。

---

## 五、更新国际化文案

编辑 `src/locales/` 下的三个文件，保持 key 一致：

- `en.ts` — 英文
- `zh.ts` — 中文
- `ja.ts` — 日文

只有 UI 文案（导航、按钮等）放在 locales 里。产品数据、博客内容的多语言直接写在各自的数据文件中。

---

## 六、新增 Lucide 图标

产品功能 (`features`) 使用 Lucide 图标。如果用了新图标：

1. 在 https://lucide.dev/icons 查找图标名
2. 编辑 `src/components/product/FeatureSection.vue`，添加 import：

```typescript
import { YourNewIcon } from 'lucide-vue-next'
```

并在文件中的 `iconMap` 或动态组件映射中注册。

---

## 七、本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（http://localhost:5173）
npm run dev

# 构建生产版本（含 prebuild 拉取数据 + 生成 OG 图）
npm run build

# 预览构建结果
npm run preview
```

---

## 八、部署相关

### GitHub Pages (zhanggenlove.github.io)

- 自动触发：每次 `git push origin main`
- 工作流文件：`.github/workflows/deploy.yml`
- 构建产物推送到 `zhanggenlove/zhanggenlove.github.io` 仓库的 `master` 分支
- 手动触发：GitHub 仓库 → Actions → "Build & Deploy to GitHub Pages" → Run workflow

### Vercel (100plans.vercel.app)

- 自动触发：每次 `git push origin main`
- 配置文件：`vercel.json`
- 管理面板：https://vercel.com/zhanggens-projects/100plans
- 支持预览部署：推送到非 main 分支会生成预览 URL

### 自定义域名

- **GitHub Pages**：在 `zhanggenlove.github.io` 仓库 Settings → Pages → Custom domain 设置
- **Vercel**：在 Vercel 项目 Settings → Domains 添加

---

## 九、检查清单（新增产品完整流程）

- [ ] `public/images/apps/<slug>.png` — 产品图标
- [ ] `src/data/products.ts` — 产品数据
- [ ] `src/data/policies/<slug>.ts` — 隐私协议和服务条款
- [ ] `src/data/policies/index.ts` — 导出新政策
- [ ] `src/data/policy-loader.ts` — 注册懒加载
- [ ] `scripts/fetch-appstore.ts` — App Store 产品注册 ID
- [ ] `scripts/generate-og.ts` — OG 图片配置
- [ ] `public/sitemap.xml` — 添加新 URL
- [ ] `src/components/product/FeatureSection.vue` — 新 Lucide 图标（如有）
- [ ] `git push` — 自动构建部署
