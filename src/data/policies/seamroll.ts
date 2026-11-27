import type { LocalizedString } from '@/types/product'

interface ProductPolicy {
  privacy: LocalizedString
  terms: LocalizedString
}

export const seamrollPolicy: ProductPolicy = {
  privacy: {
    en: `## Privacy Policy — Seamroll

**Last updated: November 27, 2026**

Gen Zhang ("we", "us") develops Seamroll (the "App") for iPhone, iPad and iPhone Duo. Seamroll stitches screenshots, screen recordings and web pages into long screenshots. In short: **everything happens on your device, there are no accounts and we collect no personal data.**

### 1. Information We Collect

**We do not collect, store or sell any personal information.** The App has no account system, no advertising and no analytics or tracking SDKs. We run no servers for it.

### 2. Your Photos, Recordings and Images

- Screenshots, videos and images you choose are processed **only on your device** — for stitching, text recognition and hiding private details. They are never uploaded.
- Seamroll's own library of recent results is stored in the App's private storage on your device. Deleting an item, clearing the library or deleting the App removes it.
- Results you save go to your photo library, to Files or wherever you choose to share them.

### 3. Scrolling Capture

Scrolling Capture uses Apple's screen broadcast feature. Frames are written to a private folder shared only between Seamroll and its capture extension on your device, used to build your long screenshot and then deleted. Nothing leaves your device.

### 4. Web Pages

When you capture a web page, the page is loaded directly from the website, like in a browser, in a private session that keeps no cookies or history. We do not see the pages you visit.

### 5. Permissions

| Permission | Why | When |
|---|---|---|
| Photos | Read the screenshots and recordings you pick; save results | When you choose images or save |
| Notifications | Tell you when a Scrolling Capture is ready | Optional |

You can change these permissions at any time in iOS Settings.

### 6. Purchases

Seamroll Pro is a one-time purchase handled entirely by Apple through the App Store. We do not receive your payment details. The App only checks with Apple whether Pro is unlocked. The number of free scrollshots you have used is stored on your device.

### 7. Feedback, Ratings and More Apps

- If you email us, we receive what you choose to send, including your email address. We use it only to reply and to improve the App.
- Rating prompts are shown by Apple's own system.
- The "More Apps" list loads public App Store information about our other apps from Apple when you are online.

### 8. Children

The App is not directed to children under 13 and we do not knowingly collect information from children.

### 9. Changes

We may update this policy. The latest version is always on this page.

### 10. Contact

zhanggenlove@gmail.com`,
    zh: `## 隐私政策 — Seamroll

**最后更新：2026 年 11 月 27 日**

Seamroll（"本应用"）由 Gen Zhang（"我们"）开发，适用于 iPhone、iPad 与 iPhone Duo，用于把截图、录屏和网页拼接成长截图。简而言之：**所有处理都在你的设备上完成，无需账号，我们不收集任何个人数据。**

### 1. 我们收集的信息

**我们不收集、不存储、不出售任何个人信息。** 本应用没有账号系统、没有广告，也没有任何统计或追踪 SDK，我们也没有为它运行任何服务器。

### 2. 你的照片、录屏和图片

- 你选择的截图、视频和图片**只在你的设备上**处理（拼接、文字识别、隐藏隐私信息），从不上传。
- 本应用内的"资料库"保存在应用的私有存储中，删除条目、清空资料库或删除应用即可移除。
- 你保存的结果会存入照片图库、"文件"或你选择分享的位置。

### 3. 滚动截屏

滚动截屏使用 Apple 的屏幕直播功能。画面写入仅由 Seamroll 与其截取扩展共享的设备内私有文件夹，用于生成长截图后即删除，不会离开你的设备。

### 4. 网页

截取网页时，网页像在浏览器中一样直接从网站加载，使用不保留 Cookie 与历史记录的私密会话。我们看不到你访问的网页。

### 5. 权限

| 权限 | 用途 | 时机 |
|---|---|---|
| 照片 | 读取你选择的截图和录屏；保存结果 | 选择图片或保存时 |
| 通知 | 滚动截屏完成时提醒你 | 可选 |

你可以随时在 iOS 设置中修改这些权限。

### 6. 购买

Seamroll Pro 为一次性购买，完全由 Apple 通过 App Store 处理，我们不会获得你的支付信息。本应用只向 Apple 查询 Pro 是否已解锁。已使用的免费次数保存在你的设备上。

### 7. 反馈、评分与更多应用

- 如果你给我们发邮件，我们会收到你选择发送的内容（包括邮箱地址），仅用于回复和改进应用。
- 评分弹窗由 Apple 系统展示。
- "更多应用"在联网时从 Apple 加载我们其他应用的公开 App Store 信息。

### 8. 儿童

本应用不面向 13 岁以下儿童，我们不会有意收集儿童信息。

### 9. 变更

本政策可能更新，最新版本始终发布在此页面。

### 10. 联系我们

zhanggenlove@gmail.com`,
    ja: `## プライバシーポリシー — Seamroll

**最終更新日：2026 年 11 月 27 日**

Seamroll（以下「本アプリ」）は Gen Zhang（以下「私たち」）が開発する iPhone・iPad・iPhone Duo 向けアプリで、スクリーンショット、画面収録、Web ページを長いスクリーンショットに結合します。要点：**処理はすべて端末内で行われ、アカウントは不要で、個人データは一切収集しません。**

### 1. 収集する情報

**個人情報を収集・保存・販売することはありません。** 本アプリにはアカウント機能、広告、解析・トラッキング SDK はなく、サーバーも運用していません。

### 2. 写真・画面収録・画像

- あなたが選んだスクリーンショット、動画、画像は**端末内でのみ**処理され（結合、文字認識、個人情報の非表示）、アップロードされることはありません。
- アプリ内ライブラリはアプリ専用の保存領域に保存され、削除・消去・アプリの削除で取り除かれます。
- 保存した結果は写真ライブラリ、ファイル、または共有先に保存されます。

### 3. スクロールキャプチャ

スクロールキャプチャは Apple の画面ブロードキャスト機能を使用します。フレームは Seamroll とそのキャプチャ拡張だけが共有する端末内のフォルダに書き込まれ、長いスクショの作成後に削除されます。端末の外に出ることはありません。

### 4. Web ページ

Web ページのキャプチャでは、ブラウザと同様にサイトから直接読み込み、Cookie や履歴を残さないプライベートなセッションを使います。私たちが閲覧ページを知ることはありません。

### 5. アクセス許可

| 許可 | 目的 | タイミング |
|---|---|---|
| 写真 | 選んだスクショ・画面収録の読み込み、結果の保存 | 画像の選択・保存時 |
| 通知 | スクロールキャプチャ完了のお知らせ | 任意 |

許可は iOS の設定からいつでも変更できます。

### 6. 購入

Seamroll Pro は買い切りの購入で、App Store を通じて Apple がすべて処理します。私たちが支払い情報を受け取ることはありません。本アプリは Pro が有効かどうかを Apple に確認するだけです。無料回数の使用状況は端末内に保存されます。

### 7. フィードバック・評価・その他のアプリ

- メールをお送りいただいた場合、メールアドレスを含む送信内容を受け取り、返信とアプリの改善にのみ使用します。
- 評価のお願いは Apple のシステムが表示します。
- 「その他のアプリ」はオンライン時に Apple から当社アプリの公開情報を読み込みます。

### 8. 子ども

本アプリは 13 歳未満の子どもを対象としておらず、意図的に子どもの情報を収集することはありません。

### 9. 変更

本ポリシーは更新されることがあります。最新版は常にこのページに掲載します。

### 10. お問い合わせ

zhanggenlove@gmail.com`,
  },
  terms: {
    en: `## Terms of Use — Seamroll

**Last updated: November 27, 2026**

These terms apply to Seamroll (the "App") by Gen Zhang. By using the App you agree to them.

### 1. The App

Seamroll stitches screenshots, screen recordings and web pages into long screenshots and lets you edit and export them. Processing happens on your device.

### 2. Free Use and Seamroll Pro

- The free version includes 5 long screenshots and the core stitching tools.
- **Seamroll Pro** is a one-time, non-consumable in-app purchase (not a subscription). It unlocks unlimited long screenshots and all Pro tools (markup, privacy redaction, watermark, frames, clean-up, text recognition and advanced export).
- Purchases are processed by Apple and are subject to the App Store's terms. Restore your purchase on any device signed in to the same Apple Account with **Restore Purchases**. Refunds are handled by Apple.
- Features and prices may change in future versions; what you have bought stays unlocked.

### 3. Your Content

You keep all rights to the screenshots, recordings and images you use. Only capture and share content you have the right to use, and respect other people's privacy — for example by hiding personal details before sharing.

### 4. Acceptable Use

Do not use the App to break the law, infringe others' rights, or capture content in ways a website or app does not allow.

### 5. Intellectual Property

The App, its design and code belong to Gen Zhang.

### 6. Disclaimer and Limitation of Liability

The App is provided "as is". Automatic stitching and detection of private details may not be perfect; please check results before sharing. To the extent permitted by law, we are not liable for any loss arising from use of the App.

### 7. Apple

These terms are between you and Gen Zhang, not Apple. Apple's standard Licensed Application End User License Agreement (EULA) also applies: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/

### 8. Changes

We may update these terms. The latest version is always on this page.

### 9. Contact

zhanggenlove@gmail.com`,
    zh: `## 服务条款 — Seamroll

**最后更新：2026 年 11 月 27 日**

本条款适用于 Gen Zhang 开发的 Seamroll（"本应用"）。使用本应用即表示你同意本条款。

### 1. 本应用

Seamroll 将截图、录屏和网页拼接成长截图，并支持编辑和导出，处理均在你的设备上完成。

### 2. 免费使用与 Seamroll Pro

- 免费版包含 5 次长截图和核心拼接功能。
- **Seamroll Pro** 为一次性、非消耗型 App 内购买（非订阅），解锁无限次长截图和全部 Pro 工具（标注、隐私打码、水印、边框、清理、文字识别和高级导出）。
- 购买由 Apple 处理，适用 App Store 条款。使用同一 Apple 账户的任意设备可通过"恢复购买"恢复。退款由 Apple 处理。
- 后续版本的功能和价格可能变化，你已购买的内容将保持解锁。

### 3. 你的内容

你保留所使用的截图、录屏和图片的全部权利。请只截取和分享你有权使用的内容，并尊重他人隐私——例如在分享前隐藏个人信息。

### 4. 合理使用

不得使用本应用违反法律、侵犯他人权利，或以网站、应用不允许的方式截取内容。

### 5. 知识产权

本应用及其设计和代码归 Gen Zhang 所有。

### 6. 免责与责任限制

本应用按"现状"提供。自动拼接和隐私识别可能并不完美，分享前请检查结果。在法律允许的范围内，我们不对使用本应用造成的任何损失承担责任。

### 7. Apple

本条款是你与 Gen Zhang 之间的协议，而非与 Apple 之间的协议。Apple 的标准最终用户许可协议（EULA）同样适用：https://www.apple.com/legal/internet-services/itunes/dev/stdeula/

### 8. 变更

本条款可能更新，最新版本始终发布在此页面。

### 9. 联系我们

zhanggenlove@gmail.com`,
    ja: `## 利用規約 — Seamroll

**最終更新日：2026 年 11 月 27 日**

本規約は Gen Zhang が提供する Seamroll（以下「本アプリ」）に適用されます。本アプリを利用することで、本規約に同意したものとみなします。

### 1. 本アプリ

Seamroll はスクリーンショット、画面収録、Web ページを長いスクリーンショットに結合し、編集・書き出しができるアプリです。処理は端末内で行われます。

### 2. 無料利用と Seamroll Pro

- 無料版には長いスクショ 5 回と基本の結合機能が含まれます。
- **Seamroll Pro** は買い切りの非消耗型 App 内課金（サブスクリプションではありません）で、無制限の長いスクショとすべての Pro ツール（マークアップ、プライバシー保護、透かし、フレーム、クリーンアップ、文字認識、高度な書き出し）を解放します。
- 購入は Apple が処理し、App Store の規約が適用されます。同じ Apple アカウントの端末で「購入を復元」から復元できます。返金は Apple が対応します。
- 今後のバージョンで機能や価格が変わる場合がありますが、購入済みの内容は解放されたままです。

### 3. あなたのコンテンツ

使用するスクリーンショット、画面収録、画像の権利はあなたに帰属します。使用する権利のあるコンテンツのみをキャプチャ・共有し、共有前に個人情報を隠すなど他者のプライバシーを尊重してください。

### 4. 禁止事項

法律に違反する利用、他者の権利の侵害、サイトやアプリが許可しない方法でのキャプチャは禁止です。

### 5. 知的財産

本アプリ、そのデザインとコードは Gen Zhang に帰属します。

### 6. 免責と責任の制限

本アプリは「現状のまま」提供されます。自動結合や個人情報の検出は完全ではない場合があるため、共有前に結果をご確認ください。法律で認められる範囲で、本アプリの利用によって生じた損害について責任を負いません。

### 7. Apple

本規約はあなたと Gen Zhang との間の契約であり、Apple とのものではありません。Apple の標準エンドユーザー使用許諾契約（EULA）も適用されます：https://www.apple.com/legal/internet-services/itunes/dev/stdeula/

### 8. 変更

本規約は更新されることがあります。最新版は常にこのページに掲載します。

### 9. お問い合わせ

zhanggenlove@gmail.com`,
  },
}
