import type { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: 'seamroll',
    slug: 'seamroll',
    name: 'Seamroll',
    subtitle: {
      en: 'Stitch screenshots, recordings and web pages into one long screenshot',
      zh: '长截图拼接 · 滚动截屏 · 网页长图',
      ja: 'スクショ・画面収録・Web ページを 1 枚の長いスクショに',
    },
    description: {
      en: 'Seamroll turns screenshots, screen recordings and web pages into one clean, shareable long screenshot. Pick a few overlapping screenshots and it finds exactly where they meet, removing repeated headers, tab bars and status bars. Start Scrolling Capture and just scroll in any app, turn any screen recording into a long image, or capture an entire web page. Drag a seam to fine-tune to the pixel, hide private details automatically, add arrows and notes, frame it in a device mockup and export as an image, slices or PDF. Everything runs on your device — no account, no upload. Try 5 scrollshots free; Seamroll Pro is a one-time purchase.',
      zh: 'Seamroll 把截图、录屏和网页变成一张干净、便于分享的长截图。选择几张有重叠的截图，它会精确找到衔接处，自动去除重复的标题栏、底栏和状态栏。开启滚动截屏，在任意 App 中滚动即可；任意录屏一键生成长图；整个网页也能截成一张。拖动接缝做像素级微调，一键隐藏隐私信息，添加箭头和标注，套上设备外框，导出为图片、切片或 PDF。全部在本机完成，无需账号、不上传。免费体验 5 次，Seamroll Pro 一次性买断。',
      ja: 'Seamroll はスクリーンショット、画面収録、Web ページを、共有しやすいきれいな 1 枚の長いスクショにします。重なりのあるスクショを選ぶと接合位置を正確に見つけ、重複するヘッダーやタブバー、ステータスバーを自動で除去。スクロールキャプチャならどのアプリでもスクロールするだけ。画面収録から長い画像を作ったり、Web ページ全体を 1 枚にすることも。継ぎ目をピクセル単位で調整し、個人情報を自動で隠し、矢印やメモを加え、デバイスフレームで仕上げて、画像・スライス・PDF で書き出せます。処理はすべて端末内、アカウントもアップロードも不要。5 回無料、Seamroll Pro は買い切りです。',
    },
    icon: '/images/apps/seamroll.png',
    platforms: ['iOS', 'iPadOS'],
    category: { en: 'Photo & Video', zh: '摄影与录像', ja: '写真/ビデオ' },
    status: 'coming-soon',
    appStoreUrl: 'https://apps.apple.com/app/id6839971271',
    gradient: { from: 'orange-500', to: 'orange-700' },
    screenshots: [
      { url: '/images/screenshots/seamroll/iphone-01.jpg', type: 'iphone' },
      { url: '/images/screenshots/seamroll/iphone-02.jpg', type: 'iphone' },
      { url: '/images/screenshots/seamroll/iphone-03.jpg', type: 'iphone' },
      { url: '/images/screenshots/seamroll/iphone-04.jpg', type: 'iphone' },
      { url: '/images/screenshots/seamroll/iphone-05.jpg', type: 'iphone' },
      { url: '/images/screenshots/seamroll/iphone-06.jpg', type: 'iphone' },
      { url: '/images/screenshots/seamroll/iphone-07.jpg', type: 'iphone' },
      { url: '/images/screenshots/seamroll/ipad-01.jpg', type: 'ipad' },
      { url: '/images/screenshots/seamroll/ipad-02.jpg', type: 'ipad' },
      { url: '/images/screenshots/seamroll/ipad-03.jpg', type: 'ipad' },
    ],
    features: [
      {
        icon: 'Layers',
        title: { en: 'Smart Stitching', zh: '智能拼接', ja: 'スマート結合' },
        description: {
          en: 'Finds where screenshots overlap to the pixel and removes repeated headers, tab bars and status bars.',
          zh: '像素级找到截图的重叠位置，自动去除重复的标题栏、底栏和状态栏。',
          ja: 'スクショの重なりをピクセル単位で検出し、重複するヘッダーやバーを自動で除去。',
        },
      },
      {
        icon: 'Video',
        title: { en: 'Scroll & Recordings', zh: '滚动截屏与录屏', ja: 'スクロールと画面収録' },
        description: {
          en: 'Just scroll with Scrolling Capture, or turn any screen recording into one long image.',
          zh: '用滚动截屏一路滚动即可，或把任意录屏变成一张长图。',
          ja: 'スクロールキャプチャでスクロールするだけ。画面収録も 1 枚の長い画像に。',
        },
      },
      {
        icon: 'Globe',
        title: { en: 'Full Web Pages', zh: '网页长截图', ja: 'Web ページ全体' },
        description: {
          en: 'Capture an entire web page in one image, with sticky headers shown only once.',
          zh: '整个网页截成一张图，吸顶标题栏只出现一次。',
          ja: 'Web ページ全体を 1 枚に。固定ヘッダーは 1 回だけ。',
        },
      },
      {
        icon: 'EyeOff',
        title: { en: 'Private by Design', zh: '隐私优先', ja: 'プライバシー重視' },
        description: {
          en: 'Hide emails, phone numbers and links automatically. Everything is processed on your device.',
          zh: '自动隐藏邮箱、电话和链接，所有处理都在你的设备上完成。',
          ja: 'メールや電話番号、リンクを自動で非表示。処理はすべて端末内。',
        },
      },
      {
        icon: 'Smartphone',
        title: { en: 'Share Beautifully', zh: '精美分享', ja: '美しく共有' },
        description: {
          en: 'Markup, watermarks and device frames; export as image, slices or PDF. iPhone, iPad and iPhone Duo, 12 languages.',
          zh: '标注、水印和设备套壳，导出为图片、切片或 PDF。支持 iPhone、iPad 与 iPhone Duo，12 种语言。',
          ja: 'マークアップ、透かし、デバイスフレーム。画像・スライス・PDF で書き出し。iPhone、iPad、iPhone Duo、12 言語。',
        },
      },
    ],
    pricing: {
      type: 'freemium',
      items: [{ name: { en: 'Seamroll Pro (one-time)', zh: 'Seamroll Pro（买断）', ja: 'Seamroll Pro（買い切り）' }, price: '$2.99' }],
    },
    meta: {
      requirements: 'iOS 17.0+ / iPadOS 17.0+',
      languages: ['English', '简体中文', '繁體中文', '日本語', '한국어', 'Deutsch', 'Français', 'Italiano', 'Español', 'Português', 'Русский', 'العربية'],
      rating: '—',
    },
  },
  {
    id: 'blechat',
    slug: 'blechat',
    name: 'BLEChat',
    subtitle: {
      en: 'Chat with people nearby over Bluetooth, with no internet',
      zh: '无网也能聊 · 基于蓝牙的离线聊天',
      ja: 'ネットなしで、近くの人と Bluetooth チャット',
    },
    description: {
      en: 'BLEChat lets you message and call people around you with no Wi-Fi, no cellular data and no SIM card. Phones talk to each other directly over Bluetooth, and every phone running BLEChat relays messages further, so you stay in touch at crowded festivals, deep in the mountains, at sea or when the network goes down after a disaster. Chat with everyone nearby in Public, start end-to-end encrypted private chats and voice calls, and see who is around on the Nearby screen. No account, no servers, no ads — completely free, on iPhone, iPad, iPhone Duo and Apple Watch.',
      zh: 'BLEChat 让你在没有 Wi-Fi、没有移动数据、没有 SIM 卡的地方，也能和身边的人发消息、打电话。手机之间直接通过蓝牙通信，每一部运行 BLEChat 的手机都会把消息继续接力传递——拥挤的音乐节、深山里、海上，或灾害导致断网时，依然能保持联系。在“公开”里和附近所有人聊天，发起端到端加密的私信与语音通话，在“附近”页看看身边有谁。无需账号、没有服务器、没有广告，完全免费，支持 iPhone、iPad、iPhone Duo 与 Apple Watch。',
      ja: 'BLEChat は Wi-Fi もモバイル通信も SIM カードもない場所で、周りの人とメッセージや通話ができるアプリです。スマホ同士が Bluetooth で直接つながり、BLEChat を使うすべてのスマホがメッセージをさらに遠くへリレー。混雑したフェス、山の中、海の上、災害で通信が止まったときでもつながれます。「公開」で近くの全員と会話し、エンドツーエンド暗号化のプライベートチャットや音声通話も。アカウント・サーバー・広告なしで完全無料。iPhone、iPad、iPhone Duo、Apple Watch に対応。',
    },
    icon: '/images/apps/blechat.png',
    platforms: ['iOS', 'iPadOS'],
    category: { en: 'Social Networking', zh: '社交', ja: 'ソーシャルネットワーキング' },
    status: 'coming-soon',
    appStoreUrl: 'https://apps.apple.com/app/id6837737233',
    gradient: { from: 'emerald-500', to: 'green-600' },
    screenshots: [
      { url: '/images/screenshots/blechat/iphone-01.jpg', type: 'iphone' },
      { url: '/images/screenshots/blechat/iphone-02.jpg', type: 'iphone' },
      { url: '/images/screenshots/blechat/iphone-03.jpg', type: 'iphone' },
      { url: '/images/screenshots/blechat/iphone-04.jpg', type: 'iphone' },
      { url: '/images/screenshots/blechat/iphone-05.jpg', type: 'iphone' },
      { url: '/images/screenshots/blechat/iphone-06.jpg', type: 'iphone' },
      { url: '/images/screenshots/blechat/iphone-07.jpg', type: 'iphone' },
      { url: '/images/screenshots/blechat/ipad-01.jpg', type: 'ipad' },
      { url: '/images/screenshots/blechat/ipad-02.jpg', type: 'ipad' },
      { url: '/images/screenshots/blechat/ipad-03.jpg', type: 'ipad' },
    ],
    features: [
      {
        icon: 'Wifi',
        title: { en: 'Works Offline', zh: '完全离线', ja: '完全オフライン' },
        description: {
          en: 'No internet, Wi-Fi or SIM needed. Phones connect directly over Bluetooth.',
          zh: '不需要网络、Wi-Fi 或 SIM 卡，手机之间直接通过蓝牙连接。',
          ja: 'インターネットも Wi-Fi も SIM も不要。スマホ同士が Bluetooth で直接つながります。',
        },
      },
      {
        icon: 'Share2',
        title: { en: 'Mesh Relay', zh: '网状接力', ja: 'メッシュリレー' },
        description: {
          en: 'Messages hop from phone to phone, reaching people well beyond one Bluetooth range.',
          zh: '消息在手机之间一跳一跳传递，远远超出单台手机的蓝牙范围。',
          ja: 'メッセージがスマホからスマホへ渡り、1 台の Bluetooth 範囲を超えて届きます。',
        },
      },
      {
        icon: 'Lock',
        title: { en: 'End-to-End Encrypted', zh: '端到端加密', ja: 'エンドツーエンド暗号化' },
        description: {
          en: 'Private chats and calls are encrypted. Relaying phones can’t read them, and there are no servers.',
          zh: '私信和通话全程加密，转发的手机无法读取，也没有任何服务器。',
          ja: 'プライベートチャットと通話は暗号化。中継する端末も読めず、サーバーもありません。',
        },
      },
      {
        icon: 'MessageSquare',
        title: { en: 'Public Chat & Calls', zh: '公开群聊与通话', ja: '公開チャットと通話' },
        description: {
          en: 'Talk with everyone nearby in one room, or call someone over Bluetooth with no network.',
          zh: '和附近所有人在同一个聊天室交流，或通过蓝牙直接语音通话。',
          ja: '近くの全員と 1 つのルームで会話、またはネットなしで Bluetooth 通話。',
        },
      },
      {
        icon: 'Smartphone',
        title: { en: 'Everywhere You Are', zh: '全平台可用', ja: 'どの端末でも' },
        description: {
          en: 'iPhone, iPad, iPhone Duo and Apple Watch, in 18 languages. Free, no account, no ads.',
          zh: '支持 iPhone、iPad、iPhone Duo 与 Apple Watch，18 种语言。免费、免注册、无广告。',
          ja: 'iPhone、iPad、iPhone Duo、Apple Watch に対応し 18 言語。無料・登録不要・広告なし。',
        },
      },
    ],
    pricing: { type: 'free' },
    meta: {
      requirements: 'iOS 17.0+ / iPadOS 17.0+ / watchOS 10.0+',
      languages: ['English', '简体中文', '繁體中文', '日本語', '한국어', 'Deutsch', 'Français', 'Italiano', 'Español', 'Português', 'Русский', 'العربية', 'हिन्दी', 'Türkçe', 'Nederlands', 'Polski', 'Bahasa Indonesia', 'ไทย'],
      rating: '—',
    },
  },
  {
    id: 'ichigo-notes',
    slug: 'ichigo-notes',
    name: 'Ichigo Notes',
    subtitle: {
      en: 'Markdown notes that look beautiful as you type',
      zh: '一期一记 · 边写边排版的 Markdown 笔记',
      ja: '書くそばから美しく整う Markdown メモ',
    },
    description: {
      en: 'Ichigo Notes is a calm, fast and private notebook for iPhone and iPad. Write in plain Markdown that styles itself as you type — headings, real checkboxes, tables, code and status chips. Put #tags anywhere, link notes with [[wiki links]], find anything with smart searches like @todo, handwrite with Apple Pencil and turn it into text, scan documents, and keep your latest todos on a widget. Notes sync through your own iCloud, locked notes are encrypted, and Pro is a one-time $2.99 purchase — no subscription.',
      zh: '一期一记是为 iPhone 与 iPad 打造的安静、迅捷、私密的笔记本。用纯 Markdown 书写，输入即刻优雅排版——标题、可点击的待办、表格、代码与状态标记。标签写在任意位置，[[双链]] 连接笔记，@todo 等智能搜索一秒找到；用 Apple Pencil 手写并转成文字、扫描文稿、在小组件上查看最新待办。笔记通过你自己的 iCloud 同步，加密笔记更安心；Pro 仅需 $2.99 一次买断，没有订阅。',
      ja: 'Ichigo Notes は iPhone・iPad のための、静かで速くプライベートなノートです。プレーンな Markdown で書くだけで、見出し、チェックボックス、表、コード、ステータスチップが入力と同時に美しく整います。どこにでも #タグ、[[Wiki リンク]] でメモをつなぎ、@todo などのスマート検索ですぐに見つかります。Apple Pencil の手書きをテキストに変換、書類スキャン、最新の ToDo をウィジェットに。メモはあなたの iCloud で同期し、ロックしたメモは暗号化。Pro は $2.99 の買い切りでサブスクなし。',
    },
    icon: '/images/apps/ichigo-notes.png',
    platforms: ['iOS', 'iPadOS'],
    category: { en: 'Productivity', zh: '效率', ja: '仕事効率化' },
    status: 'released',
    appStoreUrl: 'https://apps.apple.com/app/id6836618066',
    gradient: { from: 'orange-500', to: 'rose-500' },
    screenshots: [
      { url: '/images/screenshots/ichigo-notes/iphone-01.jpg', type: 'iphone' },
      { url: '/images/screenshots/ichigo-notes/iphone-02.jpg', type: 'iphone' },
      { url: '/images/screenshots/ichigo-notes/iphone-03.jpg', type: 'iphone' },
      { url: '/images/screenshots/ichigo-notes/iphone-04.jpg', type: 'iphone' },
      { url: '/images/screenshots/ichigo-notes/iphone-05.jpg', type: 'iphone' },
      { url: '/images/screenshots/ichigo-notes/iphone-06.jpg', type: 'iphone' },
      { url: '/images/screenshots/ichigo-notes/iphone-07.jpg', type: 'iphone' },
      { url: '/images/screenshots/ichigo-notes/ipad-01.jpg', type: 'ipad' },
      { url: '/images/screenshots/ichigo-notes/ipad-02.jpg', type: 'ipad' },
      { url: '/images/screenshots/ichigo-notes/ipad-03.jpg', type: 'ipad' },
    ],
    features: [
      {
        icon: 'Edit',
        title: { en: 'Live Markdown', zh: '实时 Markdown', ja: 'ライブ Markdown' },
        description: {
          en: 'Headings, highlights, real checkboxes, tables, code and math — styled the moment you type, with Preview and iPad Split view.',
          zh: '标题、高亮、可点击待办、表格、代码与公式，输入即排版；支持预览和 iPad 分栏。',
          ja: '見出し、ハイライト、チェックボックス、表、コード、数式が入力と同時に整います。プレビューと iPad の分割表示にも対応。',
        },
      },
      {
        icon: 'Sparkles',
        title: { en: 'Status Chips', zh: '状态标记', ja: 'ステータスチップ' },
        description: {
          en: 'Priority and Status chips right inside your text, with your own options and colours, plus a progress ring for every todo list.',
          zh: '优先级、状态标记直接写在正文里，可自定义选项和颜色；每个待办清单都有完成进度。',
          ja: '優先度やステータスのチップを本文の中に。選択肢と色は自由に設定でき、ToDo リストごとに進捗を表示。',
        },
      },
      {
        icon: 'Layers',
        title: { en: 'Tags, Links & Smart Search', zh: '标签、双链与智能搜索', ja: 'タグ・リンク・スマート検索' },
        description: {
          en: 'Nested #tags, [[wiki links]] with backlinks, and searches like @todo, @today or @date(2026-11) in five languages.',
          zh: '嵌套 #标签、带反向链接的 [[双链]]，以及 @todo、@today、@date(2026-11) 等智能搜索，支持 5 种语言写法。',
          ja: '入れ子の #タグ、バックリンク付きの [[Wiki リンク]]、@todo・@today・@date(2026-11) などのスマート検索。',
        },
      },
      {
        icon: 'ScanLine',
        title: { en: 'Handwriting & Scanning', zh: '手写与扫描', ja: '手書きとスキャン' },
        description: {
          en: 'Write with Apple Pencil or a finger and turn it into text, scan paper documents, and draw on pictures.',
          zh: '用 Apple Pencil 或手指手写并转成文字，扫描纸质文稿，在图片上涂鸦标注。',
          ja: 'Apple Pencil や指で手書きしてテキストに変換、紙の書類をスキャン、画像に描き込み。',
        },
      },
      {
        icon: 'Lock',
        title: { en: 'Private by Design', zh: '隐私至上', ja: 'プライバシー重視' },
        description: {
          en: 'Sync through your own iCloud, lock notes with Face ID and AES-256 encryption. No account, no ads, no tracking.',
          zh: '通过你自己的 iCloud 同步，面容 ID + AES-256 加密锁定笔记。无需注册、无广告、无追踪。',
          ja: 'あなたの iCloud で同期し、Face ID と AES-256 暗号化でメモをロック。アカウント・広告・追跡なし。',
        },
      },
    ],
    pricing: {
      type: 'freemium',
      items: [{ name: { en: 'Ichigo Notes Pro Lifetime', zh: '一期一记 Pro 终身版', ja: 'Ichigo Notes Pro 買い切り' }, price: '$2.99' }],
    },
    meta: {
      requirements: 'iOS 17.0+ / iPadOS 17.0+',
      languages: ['简体中文', '繁體中文', 'English', '日本語', '한국어'],
      rating: '—',
    },
  },
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
    id: 'unzipgo-pro',
    slug: 'unzipgo-pro',
    name: 'UnzipGo Pro',
    subtitle: {
      en: 'Unzip RAR, ZIP & 7Z files — compress, encrypt, manage',
      zh: '解压 RAR、ZIP、7Z · 压缩加密 · 专业文件管理',
      ja: 'RAR・ZIP・7Zを解凍、圧縮・暗号化・ファイル管理',
    },
    description: {
      en: 'UnzipGo Pro is a professional unzip tool for iPhone and iPad. Open ZIP, RAR, 7Z, TAR, GZ, BZ2 and XZ archives in one tap, look inside before you extract, and unlock password-protected files. Create ZIP or 7Z archives with AES-256 encryption and split volumes, keep every file in order with a full file manager, open photos, PDFs, documents, music and video right in the app, and move files to your computer over Wi-Fi. Everything runs on your device — no account, no uploads.',
      zh: 'UnzipGo Pro 是一款面向 iPhone 和 iPad 的专业解压缩工具。一键打开 ZIP、RAR、7Z、TAR、GZ、BZ2、XZ 等压缩包，解压前先预览内容，支持带密码的压缩文件。可创建 ZIP / 7Z 压缩包并使用 AES-256 加密与分卷压缩；内置专业文件管理，图片、PDF、文档、音乐、视频直接在应用内打开；通过 Wi-Fi 在手机与电脑之间互传文件。所有处理都在设备本地完成，无需注册，不上传任何文件。',
      ja: 'UnzipGo ProはiPhone・iPad向けのプロ仕様の解凍ツールです。ZIP・RAR・7Z・TAR・GZ・BZ2・XZをワンタップで開き、解凍前に中身をプレビュー。パスワード付きファイルにも対応。AES-256暗号化と分割圧縮でZIP／7Zを作成し、本格的なファイル管理で整理。写真・PDF・書類・音楽・動画をアプリ内でそのまま開き、Wi-Fiでパソコンへファイルを転送できます。処理はすべて端末内で完結し、登録もアップロードも不要です。',
    },
    icon: '/images/apps/unzipgo-pro.png',
    platforms: ['iOS', 'iPadOS'],
    category: { en: 'Utilities', zh: '工具', ja: 'ユーティリティ' },
    status: 'released',
    appStoreUrl: 'https://apps.apple.com/app/id6834998790',
    gradient: { from: 'pink-500', to: 'rose-600' },
    screenshots: [
      { url: '/images/screenshots/unzipgo-pro/iphone-01.jpg', type: 'iphone' },
      { url: '/images/screenshots/unzipgo-pro/iphone-02.jpg', type: 'iphone' },
      { url: '/images/screenshots/unzipgo-pro/iphone-03.jpg', type: 'iphone' },
      { url: '/images/screenshots/unzipgo-pro/iphone-04.jpg', type: 'iphone' },
      { url: '/images/screenshots/unzipgo-pro/iphone-05.jpg', type: 'iphone' },
      { url: '/images/screenshots/unzipgo-pro/iphone-06.jpg', type: 'iphone' },
      { url: '/images/screenshots/unzipgo-pro/ipad-01.jpg', type: 'ipad' },
      { url: '/images/screenshots/unzipgo-pro/ipad-02.jpg', type: 'ipad' },
      { url: '/images/screenshots/unzipgo-pro/ipad-03.jpg', type: 'ipad' },
    ],
    features: [
      {
        icon: 'FileArchive',
        title: { en: 'Unzip Every Common Format', zh: '解压全部常见格式', ja: '主要形式をすべて解凍' },
        description: {
          en: 'ZIP, RAR, 7Z, TAR, GZ, BZ2 and XZ — preview the contents first, extract all or just what you need, passwords included.',
          zh: 'ZIP、RAR、7Z、TAR、GZ、BZ2、XZ 一键解压；先预览内容，可全部解压或只取所需，支持加密压缩包。',
          ja: 'ZIP・RAR・7Z・TAR・GZ・BZ2・XZに対応。中身を先にプレビューし、全部または必要な分だけ解凍。パスワード付きもOK。',
        },
      },
      {
        icon: 'Lock',
        title: { en: 'Compress & Encrypt', zh: '压缩与加密', ja: '圧縮と暗号化' },
        description: {
          en: 'Create ZIP or 7Z archives with AES-256 passwords, adjustable compression and split volumes. A built-in password book remembers your keys.',
          zh: '创建 ZIP / 7Z 压缩包，AES-256 密码加密、可调压缩率、分卷压缩；内置密码本帮你记住常用密码。',
          ja: 'AES-256パスワード、圧縮率調整、分割圧縮でZIP／7Zを作成。パスワード帳でよく使う鍵を記憶。',
        },
      },
      {
        icon: 'FolderOpen',
        title: { en: 'Pro File Manager', zh: '专业文件管理', ja: 'プロのファイル管理' },
        description: {
          en: 'Folders, multi-select, copy, move, rename, search, sort and categories — with passcode and Face ID lock.',
          zh: '文件夹、多选、复制、移动、重命名、搜索、排序与分类浏览，支持密码与面容 ID 锁。',
          ja: 'フォルダ、複数選択、コピー、移動、名前変更、検索、並べ替え、カテゴリ表示。パスコードとFace IDでロック。',
        },
      },
      {
        icon: 'Eye',
        title: { en: 'Open Anything', zh: '打开各种文件', ja: 'なんでも開ける' },
        description: {
          en: 'View photos, PDFs, Office documents and text, and play music and video with lyrics, speed control and a sleep timer.',
          zh: '直接查看图片、PDF、Office 文档与文本，播放音乐和视频，支持歌词、倍速与定时关闭。',
          ja: '写真・PDF・Office書類・テキストを表示し、音楽や動画を再生。歌詞、再生速度、スリープタイマー対応。',
        },
      },
      {
        icon: 'Wifi',
        title: { en: 'Wi-Fi Transfer', zh: '无线传输', ja: 'Wi-Fi転送' },
        description: {
          en: 'Open the address shown in the app on your computer’s browser to upload and download files — no cable, no cloud.',
          zh: '在电脑浏览器打开应用显示的地址即可上传、下载文件，无需数据线，也不经过云端。',
          ja: 'アプリに表示されたアドレスをパソコンのブラウザで開くだけでファイルを送受信。ケーブルもクラウドも不要。',
        },
      },
    ],
    pricing: {
      type: 'freemium',
      items: [{ name: { en: 'UnzipGo Pro Lifetime', zh: 'UnzipGo Pro 终身版', ja: 'UnzipGo Pro 買い切り' }, price: '$2.99' }],
    },
    meta: {
      requirements: 'iOS 18.0+ / iPadOS 18.0+',
      languages: ['简体中文', '繁體中文', 'English', '日本語', '한국어', 'Français', 'Deutsch', 'Italiano', 'Español'],
      rating: '—',
    },
  },
  {
    id: 'whatsrate',
    slug: 'whatsrate',
    name: 'WhatsRate',
    subtitle: {
      en: 'Live currency rates, scan & convert',
      zh: '实时汇率 · 拍照算价 · 到价提醒',
      ja: 'リアルタイム為替・撮影で換算',
    },
    description: {
      en: 'WhatsRate is a minimalist currency companion for travelers and cross-border shoppers. Type once to convert across 137 currencies (offline too), point your camera at any price tag to convert it in real time on-device, read trends with a one-line “good time to convert?” verdict, and set target-rate or deal alerts with push notifications. Free, private, and no account required.',
      zh: 'WhatsRate（极简汇率）是一款为旅行与跨境购物打造的极简汇率助手。输入一次即可在 137 种货币间实时换算（离线也能查）；对准价格牌拍一下，端侧实时识别并折算，隐私零上传；趋势图配一句话判断“现在换划不划算”；还能设到价 / 划算度提醒并推送。完全免费、隐私优先、无需登录。',
      ja: 'WhatsRateは旅行や越境ショッピングのためのシンプルな為替アプリ。一度入力すれば137通貨で即換算（オフライン対応）。値札にカメラを向けると端末内でリアルタイムに換算し送信ゼロ。トレンドを一言で「両替の好機か」を表示し、目標レート／お得度アラートを通知。完全無料・プライバシー重視・アカウント不要。',
    },
    icon: '/images/apps/whatsrate.png',
    platforms: ['iOS'],
    category: { en: 'Finance', zh: '财务', ja: 'ファイナンス' },
    status: 'released',
    appStoreUrl: 'https://apps.apple.com/cn/app/id6812290303',
    gradient: { from: 'teal-400', to: 'emerald-600' },
    screenshots: [
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c6/25/d1/c625d18c-b320-5480-adb0-482781d54a0b/01_convert.png/460x998bb.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/cf/a6/88/cfa68873-4fae-9979-2546-ce4e6a639bb6/02_trends.png/460x998bb.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/e9/70/0ce97056-bd95-e8ee-45ee-27187bf9ceb4/03_camera.png/460x998bb.webp', type: 'iphone' },
      { url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/64/6d/15/646d151c-9bd6-66c6-aeee-1ecb99b21285/04_alerts.png/460x998bb.webp', type: 'iphone' },
    ],
    features: [
      {
        icon: 'ArrowLeftRight',
        title: { en: 'Live Conversion', zh: '实时换算', ja: 'リアルタイム換算' },
        description: {
          en: 'Type once and every currency updates instantly — 137 currencies, and it works offline.',
          zh: '输入一次，多币种毫秒级联动，支持 137 种货币，离线也能查。',
          ja: '一度入力すれば全通貨が即時連動。137通貨対応、オフラインでも使えます。',
        },
      },
      {
        icon: 'ScanLine',
        title: { en: 'Scan a Price Tag', zh: '拍照算价', ja: '値札を撮影' },
        description: {
          en: 'Point your camera at any price and convert it in real time — on-device, nothing leaves your phone.',
          zh: '对准价格牌拍一下即时折算，端侧识别、隐私零上传。',
          ja: '価格にカメラを向けるとリアルタイムで換算。端末内処理で送信ゼロ。',
        },
      },
      {
        icon: 'TrendingUp',
        title: { en: 'Trends & Timing', zh: '趋势研判', ja: 'トレンドと好機' },
        description: {
          en: 'Overlay normalized rate curves and get a one-line read on whether it’s a good time to convert.',
          zh: '多币种归一化曲线叠加，一句话告诉你现在是不是换汇好时机。',
          ja: '正規化曲線を重ね、今が両替の好機かを一言で表示。',
        },
      },
      {
        icon: 'BellRing',
        title: { en: 'Rate Alerts', zh: '到价提醒', ja: 'レートアラート' },
        description: {
          en: 'Set a target rate or a deal threshold and get a push notification, with 5-year range checks.',
          zh: '设目标汇率或划算度阈值，到点推送通知，带近 5 年区间防错校验。',
          ja: '目標レートやお得度を設定して通知。5年レンジ検証で誤設定を防止。',
        },
      },
    ],
    pricing: { type: 'free' },
    meta: {
      size: '4.4 MB',
      requirements: 'iOS 17.6+',
      languages: ['简体中文', 'English', '日本語', '한국어'],
      rating: '—',
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
    gumroadUrl: 'https://zhanggenlove.gumroad.com/l/zzzappy',
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
      type: 'paid',
      items: [
        { name: { en: '3-Day Free Trial', zh: '3 天免费试用', ja: '3日間無料トライアル' }, price: 'Free' },
        { name: { en: 'Full Version', zh: '正式版', ja: '正式版' }, price: '$9.9' },
      ],
    },
    meta: {
      requirements: 'macOS 14.0+',
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
    status: 'released',
    appStoreUrl: 'https://apps.apple.com/app/id6761005341',
    gradient: { from: 'red-500', to: 'violet-600' },
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
