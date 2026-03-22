import type { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: 'chanfei',
    slug: 'chanfei',
    name: '禅扉',
    subtitle: {
      en: '4K+ dynamic wallpapers — bring your Mac desktop to life',
      zh: '4K+高清动态壁纸，让桌面动起来',
      ja: '4K+ダイナミック壁紙でMacデスクトップを彩る',
    },
    description: {
      en: 'Chanfei is a dynamic wallpaper engine for Mac with thousands of curated live wallpapers and 40,000+ static wallpapers. Create and share your own wallpapers, set web pages as wallpapers, and enjoy a personalized desktop with minimal resource usage. Supports scheduled wallpaper switching and a vibrant community of creators.',
      zh: '禅扉是一款 Mac 动态壁纸引擎，拥有数千款精选动态壁纸和 4 万+高清静态壁纸。支持自定义创建和分享动态壁纸、将网页设为壁纸，以极低的资源消耗享受个性化桌面。支持定时切换壁纸和活跃的创作者社区。',
      ja: '禅扉はMac用のダイナミック壁紙エンジンです。厳選されたライブ壁紙と40,000以上の静的壁紙を提供。壁紙の作成・共有、ウェブページの壁紙化、低リソースで個性的なデスクトップを実現。タイマー切り替えとクリエイターコミュニティ対応。',
    },
    icon: '/images/apps/chanfei.png',
    platforms: ['macOS'],
    category: { en: 'Utilities', zh: '工具', ja: 'ユーティリティ' },
    status: 'released',
    appStoreUrl: 'https://apps.apple.com/cn/app/%E7%A6%85%E6%89%89-%E9%AB%98%E6%B8%85%E5%8A%A8%E6%80%81%E6%A1%8C%E9%9D%A2%E5%A3%81%E7%BA%B8-4000-%E5%8A%A8%E6%80%814k%E9%AB%98%E6%B8%85/id6458101439?mt=12',
    gradient: { from: 'violet-500', to: 'purple-600' },
    screenshots: [
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/f0/fd/34/f0fd345d-6947-ac74-c1f2-b475efc328ee/d3b403a5-f54f-4e14-9d3f-f28a5b1148a6_screenshot1.png/800x500bb.jpg', type: 'mac' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/f1/38/22/f1382205-fa99-ac39-385e-0b3344991852/04a6a597-e87e-4aff-a88e-37795b85deaa_screenshot2.png/800x500bb.jpg', type: 'mac' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/3c/dd/51/3cdd5170-9656-a80b-1024-72d2f8f22320/0554bd79-818c-4ccf-8c57-e7dcaf9e7616_screenshot3.png/800x500bb.jpg', type: 'mac' },
    ],
    features: [
      {
        icon: 'Layers',
        title: { en: 'Massive Collection', zh: '海量壁纸', ja: '大量コレクション' },
        description: {
          en: 'Thousands of dynamic wallpapers and 40,000+ 4K static wallpapers in nature, digital art, and more.',
          zh: '数千款动态壁纸和 4 万+张 4K 静态壁纸，涵盖自然、数字艺术等风格。',
          ja: '自然やデジタルアートなど、数千のダイナミック壁紙と40,000以上の4K静的壁紙。',
        },
      },
      {
        icon: 'Paintbrush',
        title: { en: 'Create & Share', zh: '创建与分享', ja: '作成と共有' },
        description: {
          en: 'Built-in tools to create your own dynamic wallpapers and share with the community.',
          zh: '内置工具创建自己的动态壁纸，并与社区分享。',
          ja: '内蔵ツールでオリジナルの壁紙を作成し、コミュニティと共有。',
        },
      },
      {
        icon: 'Globe',
        title: { en: 'Web as Wallpaper', zh: '网页壁纸', ja: 'ウェブ壁紙' },
        description: {
          en: 'Set any web page as your live desktop wallpaper.',
          zh: '将任意网页设为桌面动态壁纸。',
          ja: 'あらゆるウェブページをライブデスクトップ壁紙に。',
        },
      },
      {
        icon: 'Zap',
        title: { en: 'Lightweight', zh: '低资源消耗', ja: '軽量動作' },
        description: {
          en: 'Optimized for minimal CPU and memory usage while running live wallpapers.',
          zh: '运行动态壁纸时优化 CPU 和内存占用，极低资源消耗。',
          ja: 'ライブ壁紙実行時のCPUとメモリ使用量を最小限に最適化。',
        },
      },
    ],
    pricing: {
      type: 'freemium',
      items: [
        { name: { en: 'Lifetime Premium', zh: '终生会员', ja: '永久プレミアム' }, price: '¥6.00' },
      ],
    },
    meta: {
      size: '33.8 MB',
      requirements: 'macOS 13.0+',
      languages: ['简体中文', 'English', '日本語', '한국어', 'Deutsch', 'Français', 'Español', 'Italiano', 'ไทย'],
      rating: '—',
    },
  },
  {
    id: 'coin-focus',
    slug: 'coin-focus',
    name: 'Coin Focus',
    subtitle: {
      en: 'Simple & smart personal finance tracker',
      zh: '简洁智能的记账助手',
      ja: 'シンプル＆スマートな家計簿',
    },
    description: {
      en: 'Coin Focus is a beautifully designed personal finance app that helps you track expenses, manage budgets, and visualize your spending habits. Completely free, ad-free, and privacy-first — all data stays on your device with optional iCloud sync.',
      zh: 'Coin Focus 是一款精心设计的个人记账应用，帮助你轻松记录收支、管理预算、可视化消费习惯。完全免费、无广告、隐私优先——所有数据存储在设备本地，可选 iCloud 同步。',
      ja: 'Coin Focusは美しくデザインされた個人家計簿アプリ。支出の記録、予算管理、消費習慣の可視化をサポート。完全無料・広告なし・プライバシー重視——すべてのデータはデバイスに保存、iCloud同期対応。',
    },
    icon: '/images/apps/coin-focus.png',
    platforms: ['iOS'],
    category: { en: 'Finance', zh: '财务', ja: 'ファイナンス' },
    status: 'released',
    appStoreUrl: 'https://apps.apple.com/cn/app/coin-focus/id6759708256',
    gradient: { from: 'emerald-500', to: 'teal-500' },
    screenshots: [
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/89/6e/0c/896e0c92-2baa-ffd7-5a95-f79ba672ca01/iPhone_17_Pro_Max-01_Home.png/460x998bb.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/08/ba/a5/08baa54f-bbcb-3cc9-d467-19ed8d94d7f8/iPhone_17_Pro_Max-02_Statistics.png/460x998bb.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/cc/1b/8a/cc1b8ab2-f2f8-cee5-9265-6173e8480ca5/iPhone_17_Pro_Max-03_Categories.png/460x998bb.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/de/7a/32/de7a3246-df96-632e-c776-cbc7a6c2d4e5/iPhone_17_Pro_Max-04_Settings.png/460x998bb.webp', type: 'iphone' },
    ],
    features: [
      {
        icon: 'Receipt',
        title: { en: 'Quick Tracking', zh: '快速记账', ja: 'かんたん記録' },
        description: {
          en: 'Record expenses and income in seconds with smart categorization.',
          zh: '几秒钟内记录收支，智能分类。',
          ja: '数秒で支出と収入を記録、スマート分類対応。',
        },
      },
      {
        icon: 'PieChart',
        title: { en: 'Budget & Charts', zh: '预算与图表', ja: '予算とグラフ' },
        description: {
          en: 'Monthly budgets with visual progress bars and interactive charts.',
          zh: '月度预算管理，可视化进度条和交互式图表。',
          ja: '月間予算管理、ビジュアルプログレスバーとインタラクティブチャート。',
        },
      },
      {
        icon: 'Smartphone',
        title: { en: 'Home Widgets', zh: '桌面小组件', ja: 'ウィジェット' },
        description: {
          en: 'Glanceable widgets to track your spending right from the home screen.',
          zh: '桌面小组件，一目了然查看消费情况。',
          ja: 'ホーム画面から支出状況を確認できるウィジェット。',
        },
      },
      {
        icon: 'Cloud',
        title: { en: 'iCloud Sync', zh: 'iCloud 同步', ja: 'iCloud同期' },
        description: {
          en: 'Seamlessly sync data across devices with iCloud. Multi-currency support.',
          zh: '通过 iCloud 无缝同步数据。支持多种货币。',
          ja: 'iCloudでデバイス間のデータをシームレスに同期。複数通貨対応。',
        },
      },
    ],
    pricing: {
      type: 'freemium',
      items: [
        { name: { en: 'Buy me a coffee', zh: '请我喝杯咖啡', ja: 'コーヒーをおごる' }, price: '¥8.00' },
        { name: { en: 'Buy me lunch', zh: '请我吃顿午餐', ja: 'ランチをおごる' }, price: '¥15.00' },
        { name: { en: 'Big support', zh: '大力支持', ja: '大きな応援' }, price: '¥22.00' },
      ],
    },
    meta: {
      size: '2.8 MB',
      requirements: 'iOS 17.0+',
      languages: ['简体中文', 'English', '日本語', '한국어'],
      rating: '5.0',
      ratingCount: 2,
    },
  },
  {
    id: 'moocat',
    slug: 'moocat',
    name: 'Moocat输入法',
    subtitle: {
      en: 'Your personal AI-powered keyboard',
      zh: 'Moocat AI智能键盘，提升你的打字体验',
      ja: 'あなた専用のAIキーボード',
    },
    description: {
      en: 'Moocat is an AI-powered keyboard that offers real-time suggestions, smart replies, grammar correction, and built-in translation. Perfect for professionals, students, travelers, and everyday communication. Supports custom AI configuration and DeepSeek AI service.',
      zh: 'Moocat 输入法是一款 AI 智能键盘，提供实时建议、智能回复、语法纠正和内置翻译。适合职场人士、学生、旅行者和日常沟通。支持自定义 AI 配置和 DeepSeek AI 服务。',
      ja: 'MoocatはAI搭載のキーボード。リアルタイム候補、スマートリプライ、文法修正、翻訳機能内蔵。ビジネス、学生、旅行、日常コミュニケーションに最適。カスタムAI設定とDeepSeek AIサービスに対応。',
    },
    icon: '/images/apps/moocat.png',
    platforms: ['iOS', 'iPadOS'],
    category: { en: 'Productivity', zh: '效率', ja: '仕事効率化' },
    status: 'released',
    appStoreUrl: 'https://apps.apple.com/cn/app/moocat%E8%BE%93%E5%85%A5%E6%B3%95-%E4%B8%93%E5%B1%9E%E7%9A%84ai%E8%BE%93%E5%85%A5%E6%B3%95/id6477344294',
    gradient: { from: 'pink-500', to: 'rose-500' },
    screenshots: [
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1e/c9/59/1ec95945-130f-1513-ff42-e4a71e6543fe/4047d757-8a9b-49fc-bc40-ed7fc1e027e3__U9996_U9875-1242x2208.png/460x0w.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/33/fc/c0/33fcc0dc-64c6-d1e7-c961-19b694a87eff/39c99a1c-e8c0-47ff-84df-9cf205e841f8_02-1242x2208.png/460x0w.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d6/6e/d8/d66ed8d5-5d00-ca8f-8ffa-30da6a5ac7f3/41059d17-7c88-4591-bce5-1bf3e7f9f440_03-1242x2208.png/460x0w.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/fc/0b/5e/fc0b5e09-f828-fc2d-c3cd-7325999227de/e3232832-189c-4a31-a867-4758dbc00805_01-1242x2208.png/460x0w.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/27/7e/3c/277e3c8a-8a2f-2b51-abcb-168d0bddde4e/5ba46dd8-9c60-4d90-ade6-89d4401adfa0_04-1242x2208.png/460x0w.webp', type: 'iphone' },
    ],
    features: [
      {
        icon: 'Sparkles',
        title: { en: 'AI Suggestions', zh: 'AI 智能建议', ja: 'AI予測変換' },
        description: {
          en: 'Real-time AI-powered typing suggestions with grammar correction.',
          zh: '实时 AI 输入建议和语法纠正。',
          ja: 'リアルタイムAI入力候補と文法修正。',
        },
      },
      {
        icon: 'MessageSquare',
        title: { en: 'Smart Reply', zh: '智能回复', ja: 'スマートリプライ' },
        description: {
          en: 'Context-aware smart replies for messages, emails, and notes.',
          zh: '上下文感知的智能回复，适用于消息、邮件和笔记。',
          ja: 'メッセージ、メール、メモ向けの文脈対応スマートリプライ。',
        },
      },
      {
        icon: 'Languages',
        title: { en: 'Translation', zh: '语言翻译', ja: '翻訳機能' },
        description: {
          en: 'Built-in translation engine for seamless multilingual communication.',
          zh: '内置翻译引擎，实现无缝多语言沟通。',
          ja: '内蔵翻訳エンジンでシームレスな多言語コミュニケーション。',
        },
      },
      {
        icon: 'Palette',
        title: { en: 'Customizable', zh: '个性化定制', ja: 'カスタマイズ' },
        description: {
          en: 'Personalize appearance and AI configuration to your style.',
          zh: '自定义外观和 AI 配置，打造你的专属键盘。',
          ja: '外観とAI設定をあなた好みにカスタマイズ。',
        },
      },
    ],
    pricing: {
      type: 'freemium',
      items: [
        { name: { en: 'Monthly', zh: '月度订阅', ja: '月額' }, price: '¥18.00' },
        { name: { en: 'Semi-annual', zh: '半年', ja: '半年' }, price: '¥88.00' },
        { name: { en: 'Annual', zh: '年度', ja: '年間' }, price: '¥168.00' },
      ],
    },
    meta: {
      size: '82.5 MB',
      requirements: 'iOS 15.0+',
      languages: ['简体中文', 'English'],
      rating: '4.4',
      ratingCount: 13,
    },
  },
  {
    id: 'quick-keyboard',
    slug: 'quick-keyboard',
    name: '快捷键盘Pro',
    subtitle: {
      en: 'Your personal high-efficiency keyboard',
      zh: '你个人的高效率专属键盘',
      ja: 'あなただけの高効率キーボード',
    },
    description: {
      en: 'Quick Keyboard Pro is your personal efficiency keyboard. Save frequently used text snippets, switch keyboards to instantly paste, and access clipboard content with one tap. Say goodbye to repetitive typing.',
      zh: '快捷键盘 Pro 是你的个人高效键盘。保存常用文本片段，切换键盘即可快速输入，一键访问粘贴板内容。告别繁琐的重复打字操作。',
      ja: '快捷鍵盤Proはあなた専用の高効率キーボード。よく使うテキストを保存、キーボード切替で即入力、クリップボード一発アクセス。面倒な繰り返し入力にさようなら。',
    },
    icon: '/images/apps/quick-keyboard.png',
    platforms: ['iOS'],
    category: { en: 'Productivity', zh: '效率', ja: '仕事効率化' },
    status: 'released',
    appStoreUrl: 'https://apps.apple.com/cn/app/%E5%BF%AB%E6%8D%B7%E9%94%AE%E7%9B%98pro/id1643396533',
    gradient: { from: 'amber-500', to: 'orange-500' },
    screenshots: [
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/1e/f7/06/1ef70615-ac99-d729-1857-37d1db9a7e5d/6ed07d5a-7fe3-47af-8825-003dc5802b54_5.5-1.png/460x0w.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/eb/b8/63/ebb863d0-1bd9-490f-ee55-251026a2169d/2ee950e3-fd35-458e-ba85-ff99a13c578d_5.5-2.png/460x0w.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/83/9e/e8/839ee8ed-c395-1758-72da-a95c768f4ddd/38ad55bd-8c69-451f-bdd1-c85400cde3ae_5.5-3.png/460x0w.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/e9/47/1c/e9471c8b-51b5-849c-68d2-032392d118fb/aa25a4a1-9c6f-413a-a2e1-060599c8621a_5.5-4.png/460x0w.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/cb/79/4b/cb794b0e-c1d1-dd43-7ae3-a844a460f3cf/b39a6ad9-9b20-42ee-8efc-ab3294cc3c0c_5.5-5.png/460x0w.webp', type: 'iphone' },
    ],
    features: [
      {
        icon: 'Save',
        title: { en: 'Text Snippets', zh: '常用文本', ja: 'テキストスニペット' },
        description: {
          en: 'Save and organize your frequently used phrases and text snippets.',
          zh: '保存和整理你的常用话语和文本片段。',
          ja: 'よく使うフレーズやテキストを保存・整理。',
        },
      },
      {
        icon: 'Zap',
        title: { en: 'Instant Input', zh: '快速输入', ja: '即入力' },
        description: {
          en: 'Switch to Quick Keyboard and paste any saved text instantly.',
          zh: '切换到快捷键盘，即可快速输入保存的文本。',
          ja: 'キーボードを切り替えて、保存テキストを即座に入力。',
        },
      },
      {
        icon: 'Clipboard',
        title: { en: 'Clipboard Access', zh: '粘贴板访问', ja: 'クリップボード' },
        description: {
          en: 'Quick access to your clipboard content from any app.',
          zh: '在任何应用中快速访问粘贴板内容。',
          ja: 'どのアプリからでもクリップボードに素早くアクセス。',
        },
      },
      {
        icon: 'Cloud',
        title: { en: 'iCloud Sync', zh: 'iCloud 同步', ja: 'iCloud同期' },
        description: {
          en: 'Sync your text snippets across all your devices with iCloud.',
          zh: '通过 iCloud 在所有设备间同步文本片段。',
          ja: 'iCloudですべてのデバイス間でテキストを同期。',
        },
      },
    ],
    pricing: {
      type: 'freemium',
      items: [
        { name: { en: 'Premium', zh: 'Premium', ja: 'プレミアム' }, price: '¥8.00' },
      ],
    },
    meta: {
      size: '4.5 MB',
      requirements: 'iOS 16.0+',
      languages: ['简体中文', 'English', '日本語', '한국어'],
      rating: '4.3',
      ratingCount: 63,
    },
  },
  {
    id: 'doc-scanner',
    slug: 'doc-scanner',
    name: '文档扫描小助手',
    subtitle: {
      en: 'All-in-one PDF scanner & editor',
      zh: '全能PDF扫描编辑小助手',
      ja: 'オールインワンPDFスキャナー＆エディター',
    },
    description: {
      en: 'Document Scanner Helper turns your phone into a powerful scanner. Scan documents to PDF with smart edge detection, edit with crop/rotate/color adjustments, add watermarks, and share via email, Google Drive, Dropbox, and more.',
      zh: '文档扫描小助手将手机变成强大的扫描仪。智能边缘检测扫描文档为 PDF，支持裁剪、旋转、调色等编辑，添加水印，通过邮件、Google Drive、Dropbox 等分享。',
      ja: '文書スキャンヘルパーはスマホを強力なスキャナーに。スマートエッジ検出でPDF化、トリミング・回転・色調整の編集、透かし追加、メール・Google Drive・Dropbox等で共有。',
    },
    icon: '/images/apps/doc-scanner.png',
    platforms: ['iOS', 'iPadOS'],
    category: { en: 'Utilities', zh: '工具', ja: 'ユーティリティ' },
    status: 'released',
    appStoreUrl: 'https://apps.apple.com/cn/app/%E6%96%87%E6%A1%A3%E6%89%AB%E6%8F%8F%E5%B0%8F%E5%8A%A9%E6%89%8B/id6452550631',
    gradient: { from: 'blue-500', to: 'cyan-500' },
    screenshots: [
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/5f/73/ab/5f73ab77-f323-aba4-a7ac-83916290ca42/5ba0a7ef-f082-4331-8158-69b628fea86b_1_7.png/460x0w.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/31/ae/e1/31aee1c6-ab16-3a31-0a99-d9874b2089cf/5b49b9ca-ab3a-44b6-8e67-7ed56f2f38cc_1_6.png/460x0w.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/5e/b5/87/5eb5879f-75e8-d15d-cfdc-c59fcf7aa5c4/5b70d45f-9450-4436-8802-4880835159f6_1_5.png/460x0w.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/c6/0f/95/c60f9511-c8e6-eda8-035e-479217d056cb/ed1bc6cc-1a26-4790-8a24-155e63826c36_1_4.png/460x0w.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/b0/f9/f2/b0f9f2ee-d595-3769-3a18-7cb076fd52b3/6476a9f8-18a3-42d3-ab06-c8e69c356c27_1_3.png/460x0w.webp', type: 'iphone' },
    ],
    features: [
      {
        icon: 'ScanLine',
        title: { en: 'Smart Scan', zh: '智能扫描', ja: 'スマートスキャン' },
        description: {
          en: 'Native camera scanning with automatic edge detection and perspective correction.',
          zh: '原生相机扫描，自动边缘检测和透视校正。',
          ja: 'ネイティブカメラスキャン、自動エッジ検出と遠近補正。',
        },
      },
      {
        icon: 'Edit',
        title: { en: 'PDF Editor', zh: 'PDF 编辑', ja: 'PDF編集' },
        description: {
          en: 'Crop, rotate, adjust colors, delete pages — full editing suite.',
          zh: '裁剪、旋转、调色、删除页面——完整的编辑功能。',
          ja: 'トリミング、回転、色調整、ページ削除——フル編集機能。',
        },
      },
      {
        icon: 'Stamp',
        title: { en: 'Watermarks', zh: '水印功能', ja: '透かし機能' },
        description: {
          en: 'Add customizable watermarks in multiple styles to your documents.',
          zh: '为文档添加多种样式的自定义水印。',
          ja: '複数スタイルのカスタム透かしをドキュメントに追加。',
        },
      },
      {
        icon: 'Share2',
        title: { en: 'Easy Sharing', zh: '便捷分享', ja: 'かんたん共有' },
        description: {
          en: 'Share via email, Google Drive, Dropbox, and other cloud services.',
          zh: '通过邮件、Google Drive、Dropbox 等云服务分享。',
          ja: 'メール、Google Drive、Dropbox等のクラウドサービスで共有。',
        },
      },
    ],
    pricing: {
      type: 'freemium',
      items: [
        { name: { en: 'Premium', zh: 'Premium', ja: 'プレミアム' }, price: '¥6.00' },
      ],
    },
    meta: {
      size: '3.5 MB',
      requirements: 'iOS 15.0+',
      languages: ['简体中文', 'English', '日本語', '한국어'],
      rating: '5.0',
      ratingCount: 6,
    },
  },
  {
    id: 'zzzappy',
    slug: 'zzzappy',
    name: 'Zzzappy',
    subtitle: {
      en: 'Screen Break · RSI Protection',
      zh: '智能休息提醒 · 健康办公定时',
      ja: '疲れ目・RSI対策 · スマート休憩',
    },
    description: {
      en: 'Dual health guard for your Mac! Zzzappy monitors both screen time and arm input load, schedules smart breaks based on the 20-20-20 rule, auto-pauses for meetings, and prevents RSI. Features immersive break experiences, health dashboard, and intelligent fatigue detection across 5 input dimensions.',
      zh: '双重守护！Zzzappy 同时监测你的用眼时长和手臂输入负荷，基于 20-20-20 法则科学安排休息节奏。搭配会议智能暂停、个性化休息界面和健康数据看板，全方位守护你的视力与肢体健康。',
      ja: '目と腕のダブルガード！Zzzappyは画面使用時間と腕の入力負荷を同時に監視。20-20-20ルールで休憩を科学的にスケジュールし、会議中は自動で一時停止。RSIや腱鞘炎を予防しましょう。',
    },
    icon: '/images/apps/zzzappy.png',
    platforms: ['macOS'],
    category: { en: 'Health & Fitness', zh: '健康', ja: 'ヘルスケア' },
    status: 'released',
    appStoreUrl: 'https://apps.apple.com/app/id6760637798',
    websiteUrl: 'https://zzzappy.app',
    gradient: { from: 'orange-500', to: 'purple-500' },
    screenshots: [],
    features: [
      {
        icon: 'Eye',
        title: { en: 'Science-Backed Eye Care', zh: '科学护眼提醒', ja: '科学的な目のケア' },
        description: {
          en: '20-20-20 rule with customizable work/break intervals. Flexible break plans for different times of day with pre-break snooze.',
          zh: '基于眼科推荐的 20-20-20 法则安排休息，支持按时段定制不同节奏，休息前预提醒不打断心流。',
          ja: '眼科医推奨の20-20-20ルールに基づく休憩スケジュール。時間帯別の柔軟な休憩プラン。',
        },
      },
      {
        icon: 'Activity',
        title: { en: 'Arm & Hand Fatigue Detection', zh: '手臂疲劳检测', ja: '腕・手の疲労検知' },
        description: {
          en: 'Monitors 5 input dimensions in real time: keystrokes, mouse clicks, trackpad travel, scroll distance, and continuous use. Prevents RSI, carpal tunnel, and tendinitis.',
          zh: '实时监测五大输入维度：键盘敲击、鼠标点击、触控板滑动、滚动距离、连续使用时长，预防鼠标手和腱鞘炎。',
          ja: '5つの入力指標をリアルタイム監視。総合疲労スコアを算出し、マウス腕・腱鞘炎を積極予防。',
        },
      },
      {
        icon: 'Pause',
        title: { en: 'Smart Pause', zh: '智能暂停', ja: 'スマート一時停止' },
        description: {
          en: 'Auto-pauses during video calls, meetings, video playback, and full-screen gaming. Custom "deep focus" app list. Intelligently credits idle time as rest.',
          zh: '视频会议、语音通话时自动暂停提醒。识别视频播放、日历事件、全屏游戏。支持自定义深度专注列表。',
          ja: 'ビデオ会議や通話を検知して自動一時停止。動画再生、カレンダー、フルスクリーンゲームにも対応。',
        },
      },
      {
        icon: 'BarChart3',
        title: { en: 'Health Dashboard', zh: '健康数据看板', ja: '健康ダッシュボード' },
        description: {
          en: 'Visual charts for screen time, input load, and break statistics. Smart health insights based on your personal data. All data stays local.',
          zh: '可视化图表展示屏幕时长、输入负荷与休息统计。智能健康洞察，所有数据仅保存本地。',
          ja: '画面時間、入力負荷、休憩統計をビジュアルチャートで確認。すべてのデータはMacローカルに保存。',
        },
      },
    ],
    pricing: {
      type: 'freemium',
      items: [
        { name: { en: '7-Day Free Trial', zh: '7 天免费试用', ja: '7日間無料トライアル' }, price: 'Free' },
        { name: { en: 'Monthly', zh: '月度订阅', ja: '月額' }, price: 'TBD' },
        { name: { en: 'Yearly', zh: '年度订阅', ja: '年額' }, price: 'TBD' },
        { name: { en: 'Lifetime', zh: '终身买断', ja: '永久ライセンス' }, price: 'TBD' },
      ],
    },
    meta: {
      requirements: 'macOS 13.0+',
      languages: ['简体中文', 'English', '日本語', '한국어', 'Deutsch', 'Français', 'Italiano'],
    },
  },
  {
    id: 'music-switch',
    slug: 'music-switch',
    name: 'Music Switch',
    subtitle: {
      en: 'Migrate playlists across music platforms in one tap',
      zh: '跨平台音乐歌单一键迁移',
      ja: 'ワンタップで音楽プレイリストを移行',
    },
    description: {
      en: 'Music Switch is a cross-platform playlist migration tool supporting Apple Music, YouTube Music, NetEase Cloud Music, and QQ Music. Powered by ISRC matching, keyword search, and AI fallback, it achieves high-accuracy song matching. Features real-time progress tracking, match review, and one-tap playlist creation on the target platform.',
      zh: 'Music Switch 是一款跨平台歌单迁移工具，支持 Apple Music、YouTube Music、网易云音乐和 QQ 音乐。采用 ISRC 精确匹配 + 多关键词搜索 + AI 智能兜底三重匹配引擎，实现高准确率歌曲匹配。支持实时进度追踪、匹配结果审核和一键创建目标歌单。',
      ja: 'Music SwitchはApple Music、YouTube Music、NetEase、QQ Musicに対応するクロスプラットフォームプレイリスト移行ツール。ISRC・キーワード・AIの3段階マッチングで高精度な楽曲検索を実現。',
    },
    icon: '/images/apps/music-switch.png',
    platforms: ['iOS'],
    category: { en: 'Music', zh: '音乐', ja: 'ミュージック' },
    status: 'coming-soon',
    gradient: { from: 'indigo-500', to: 'violet-500' },
    screenshots: [],
    features: [
      {
        icon: 'ArrowLeftRight',
        title: { en: '4 Major Platforms', zh: '四大平台互通', ja: '4大プラットフォーム対応' },
        description: {
          en: 'Supports Apple Music, YouTube Music, NetEase Cloud Music, and QQ Music. Transfer playlists in any direction.',
          zh: '支持 Apple Music、YouTube Music、网易云音乐、QQ 音乐，任意方向互相迁移。',
          ja: 'Apple Music、YouTube Music、NetEase、QQ Music間で自由にプレイリストを転送。',
        },
      },
      {
        icon: 'Sparkles',
        title: { en: 'AI-Powered Matching', zh: 'AI 智能匹配', ja: 'AIマッチング' },
        description: {
          en: 'Triple matching engine: ISRC exact match, multi-keyword search, and AI fallback for maximum accuracy.',
          zh: '三重匹配引擎：ISRC 精确匹配 + 多关键词搜索 + AI 兜底，最大化匹配准确率。',
          ja: 'ISRC精確マッチ + マルチキーワード + AIフォールバックの3段階で最高精度を実現。',
        },
      },
      {
        icon: 'ListMusic',
        title: { en: 'Match Review', zh: '匹配结果审核', ja: 'マッチ結果レビュー' },
        description: {
          en: 'Review matches by category — exact, fuzzy, and not found — with select/deselect before creating the playlist.',
          zh: '按精确匹配、模糊匹配、未找到分类审核结果，支持全选/反选后再创建歌单。',
          ja: '精確・あいまい・未検出をカテゴリ別にレビュー、選択/解除後にプレイリスト作成。',
        },
      },
      {
        icon: 'Zap',
        title: { en: 'Real-Time Progress', zh: '实时迁移进度', ja: 'リアルタイム進捗' },
        description: {
          en: 'Live progress tracking with percentage, waveform animation, and real-time match feed during migration.',
          zh: '迁移过程实时显示百分比进度、波形动画和匹配状态 Feed 列表。',
          ja: '移行中にパーセンテージ、波形アニメーション、マッチフィードをリアルタイム表示。',
        },
      },
    ],
    pricing: { type: 'free' },
    meta: {
      languages: ['简体中文'],
    },
  },
  {
    id: 'sakurago',
    slug: 'sakurago',
    name: '桜語',
    subtitle: {
      en: 'Next-gen Japanese vocabulary memorization with FSRS, AI & gamification',
      zh: '融合间隔重复算法、AI 智能解析与游戏化激励的日语记忆工具',
      ja: 'FSRS・AI・ゲーミフィケーションを融合した次世代日本語暗記ツール',
    },
    description: {
      en: 'Sakurago is a next-generation Japanese learning tool powered by the FSRS v4.5 spaced repetition algorithm, AI-assisted analysis, and gamification. Features include memory dashboards, JLPT N5-N1 word banks, achievement systems, Markdown notes, and smart review modes with TTS support.',
      zh: '桜語是一款基于 FSRS v4.5 间隔重复算法的新一代日语学习工具，融合 AI 智能解析与游戏化激励。提供记忆可视化仪表盘、JLPT N5-N1 预置词库、成就系统、Markdown 笔记和 TTS 语音复习模式。',
      ja: '桜語はFSRS v4.5間隔反復アルゴリズム、AIアシスト解析、ゲーミフィケーションを搭載した次世代日本語学習ツール。記憶ダッシュボード、JLPT N5-N1単語帳、アチーブメントシステム、Markdownノート、TTS対応レビューモード。',
    },
    icon: '/images/apps/sakurago.svg',
    platforms: ['Web'],
    category: { en: 'Education', zh: '教育', ja: '教育' },
    status: 'released',
    websiteUrl: 'https://ankinext-ai.vercel.app/',
    gradient: { from: 'pink-500', to: 'violet-500' },
    screenshots: [
      { url: '/images/screenshots/sakurago-web-01.png', type: 'web' },
    ],
    features: [
      {
        icon: 'Brain',
        title: { en: 'FSRS Algorithm', zh: 'FSRS 算法', ja: 'FSRSアルゴリズム' },
        description: {
          en: 'FSRS v4.5 spaced repetition for scientifically optimal review timing.',
          zh: 'FSRS v4.5 间隔重复算法，科学计算最佳复习时机。',
          ja: 'FSRS v4.5間隔反復で科学的に最適なレビュータイミング。',
        },
      },
      {
        icon: 'BarChart3',
        title: { en: 'Memory Dashboard', zh: '记忆可视化', ja: '記憶ダッシュボード' },
        description: {
          en: 'Heatmaps, strength gauges, and decay curves to visualize your learning progress.',
          zh: '热力图、记忆强度仪表盘、衰减曲线——让学习进度一目了然。',
          ja: 'ヒートマップ、強度ゲージ、減衰曲線で学習進捗を可視化。',
        },
      },
      {
        icon: 'Gamepad2',
        title: { en: 'Gamification', zh: '游戏化激励', ja: 'ゲーミフィケーション' },
        description: {
          en: 'XP, levels, 53+ achievements, and streaks to keep you motivated.',
          zh: 'XP 经验值、等级、53+ 成就徽章、连续学习奖励。',
          ja: 'XP、レベル、53以上のアチーブメント、連続学習ボーナス。',
        },
      },
      {
        icon: 'Sparkles',
        title: { en: 'AI-Powered', zh: 'AI 辅助', ja: 'AI搭載' },
        description: {
          en: 'One-click AI generation of readings, meanings, examples, synonyms, and antonyms.',
          zh: '一键 AI 生成读音、释义、例句、近义词、反义词。',
          ja: 'ワンクリックAIで読み方、意味、例文、同義語、対義語を生成。',
        },
      },
    ],
    pricing: { type: 'free' },
    meta: {
      languages: ['简体中文'],
    },
  },
]
