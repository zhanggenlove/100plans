import type { LocalizedString } from '@/types/product'

interface ProductPolicy {
  privacy: LocalizedString
  terms: LocalizedString
}

export const blechatPolicy: ProductPolicy = {
  privacy: {
    en: `## Privacy Policy — BLEChat

**Last updated: November 24, 2026**

Gen Zhang ("we", "us") develops BLEChat (the "App") for iPhone, iPad and Apple Watch. BLEChat lets people near each other chat over Bluetooth with no internet. In short: **there are no accounts and no servers, and we collect no personal data.**

### 1. Information We Collect

**We do not collect, store or sell any personal information.** The App has no account system, no advertising and no analytics or tracking SDKs, and we run no servers for it.

### 2. What Stays on Your Device

- Your profile (name, status, about, avatar and photo), messages, contacts, keys and settings are stored **only on your device**.
- Your private key is kept in the iOS Keychain on your device and never leaves it.
- Deleting the App, or **Settings → Delete All Data**, removes everything from your device.

### 3. What Nearby Devices Receive

BLEChat works by talking directly to other phones over Bluetooth. While **Sharing** is on:

- Nearby devices can read your **profile** (name, status, about, avatar, profile photo and public keys).
- **Public messages** can be read by anyone in Bluetooth range and are relayed by other devices to reach people further away.
- **Private messages** are end-to-end encrypted (P-256 key agreement, ChaCha20-Poly1305 and signatures, using Apple CryptoKit). Devices that relay them cannot read them.
- **Voice calls** go directly between the two phones and the audio is encrypted with a key exchanged inside an encrypted message.

Messages that other people have received stay on their devices; we cannot recall or delete them. Turn off **Sharing** at any time to stop being visible.

### 4. Permissions the App Asks For

| Permission | Why | When |
|---|---|---|
| Bluetooth | Find people nearby and carry messages | While the App runs and Sharing is on |
| Microphone | Voice calls | Only during a call |
| Camera | Take a profile picture | Only when you choose to |
| Photos | Pick a profile picture or chat wallpaper | Only the picture you choose |
| Notifications | Alerts for new messages and nearby people | Optional |

You can change these permissions at any time in iOS Settings.

### 5. Feedback, Reports and Ratings

- If you email feedback or a report, we receive what you choose to send, including your email address. We use it only to reply and to improve the App.
- Rating prompts are shown by Apple's own system.
- The "More Apps" list loads public App Store information about our other apps from Apple when you are online.

### 6. Children

The App is not directed to children under 13 and we do not knowingly collect information from children.

### 7. Changes

We may update this policy. The latest version is always on this page.

### 8. Contact

zhanggenlove@gmail.com`,
    zh: `## 隐私协议 — BLEChat

**最后更新：2026 年 11 月 24 日**

Gen Zhang（“我们”）开发了 BLEChat（“本应用”），适用于 iPhone、iPad 和 Apple Watch。BLEChat 让附近的人在没有网络的情况下通过蓝牙聊天。简而言之：**本应用没有账号、没有服务器，我们不收集任何个人数据。**

### 1. 我们收集的信息

**我们不收集、不存储、也不出售任何个人信息。** 本应用没有账号系统，没有广告，也没有任何统计分析或追踪 SDK，我们也不为本应用运行任何服务器。

### 2. 保存在你设备上的内容

- 你的个人资料（名字、状态、简介、头像和照片）、消息、联系人、密钥和设置**只保存在你的设备上**。
- 你的私钥保存在设备的 iOS 钥匙串中，永远不会离开设备。
- 删除本应用，或使用**设置 → 删除所有数据**，即可清除设备上的全部内容。

### 3. 附近设备会收到的内容

BLEChat 通过蓝牙与其他手机直接通信。在开启**共享**时：

- 附近的设备可以读取你的**个人资料**（名字、状态、简介、头像、照片和公钥）。
- **公开消息**可被蓝牙范围内的任何人读取，并由其他设备转发给更远的人。
- **私信**采用端到端加密（基于 Apple CryptoKit 的 P-256 密钥协商、ChaCha20-Poly1305 和签名），转发设备无法读取。
- **语音通话**在两部手机之间直接进行，音频使用在加密消息中交换的密钥加密。

别人已经收到的消息会保留在对方设备上，我们无法撤回或删除。你可以随时关闭**共享**，不再被附近的人看到。

### 4. 本应用申请的权限

| 权限 | 用途 | 何时使用 |
|---|---|---|
| 蓝牙 | 发现附近的人、传递消息 | 应用运行且开启共享时 |
| 麦克风 | 语音通话 | 仅在通话中 |
| 相机 | 拍摄头像 | 仅在你主动选择时 |
| 照片 | 选择头像或聊天壁纸 | 仅限你选择的照片 |
| 通知 | 新消息和附近的人提醒 | 可选 |

你可以随时在 iOS 设置中更改这些权限。

### 5. 反馈、举报与评分

- 当你通过邮件发送反馈或举报时，我们会收到你选择发送的内容（包括你的邮箱地址），仅用于回复和改进本应用。
- 评分弹窗由 Apple 系统提供。
- 联网时，“更多应用”列表会从 Apple 读取我们其他应用的公开信息。

### 6. 儿童

本应用不面向 13 岁以下儿童，我们不会有意收集儿童的信息。

### 7. 变更

我们可能会更新本协议，最新版本始终发布在本页面。

### 8. 联系我们

zhanggenlove@gmail.com`,
    ja: `## プライバシーポリシー — BLEChat

**最終更新：2026年11月24日**

Gen Zhang（以下「私たち」）は iPhone・iPad・Apple Watch 向けアプリ BLEChat（以下「本アプリ」）を開発しています。BLEChat はインターネットなしで、近くの人と Bluetooth でチャットできるアプリです。要点：**アカウントもサーバーもなく、私たちは個人データを一切収集しません。**

### 1. 収集する情報

**個人情報を収集・保存・販売することはありません。** 本アプリにはアカウント機能、広告、分析・トラッキング SDK がなく、私たちはサーバーも運用していません。

### 2. 端末に保存されるもの

- プロフィール（名前、ステータス、自己紹介、アバター、写真）、メッセージ、連絡先、鍵、設定は**あなたの端末にのみ**保存されます。
- 秘密鍵は端末の iOS キーチェーンに保存され、端末の外に出ることはありません。
- 本アプリを削除するか、**設定 → すべてのデータを削除** で端末上のデータをすべて消去できます。

### 3. 近くの端末が受け取るもの

BLEChat は Bluetooth で他のスマホと直接通信します。**共有**がオンのとき：

- 近くの端末はあなたの**プロフィール**（名前、ステータス、自己紹介、アバター、写真、公開鍵）を読み取れます。
- **公開メッセージ**は Bluetooth の範囲内の誰でも読むことができ、さらに遠くの人へ他の端末によって中継されます。
- **プライベートメッセージ**はエンドツーエンドで暗号化されます（Apple CryptoKit による P-256 鍵共有、ChaCha20-Poly1305、署名）。中継する端末は内容を読めません。
- **音声通話**は 2 台の端末間で直接行われ、音声は暗号化メッセージで交換した鍵で暗号化されます。

相手が受け取ったメッセージは相手の端末に残り、私たちが取り消したり削除したりすることはできません。**共有**はいつでもオフにできます。

### 4. 本アプリが求める権限

| 権限 | 目的 | タイミング |
|---|---|---|
| Bluetooth | 近くの人を見つけ、メッセージを届ける | 起動中かつ共有がオンのとき |
| マイク | 音声通話 | 通話中のみ |
| カメラ | プロフィール写真の撮影 | あなたが選んだときのみ |
| 写真 | プロフィール写真や壁紙の選択 | 選んだ写真のみ |
| 通知 | 新着メッセージや近くの人のお知らせ | 任意 |

これらの権限は iOS の設定からいつでも変更できます。

### 5. フィードバック・報告・評価

- メールでフィードバックや報告を送ると、あなたが送った内容（メールアドレスを含む）を受け取ります。返信と改善のためにのみ使用します。
- 評価のお願いは Apple のシステムが表示します。
- オンライン時、「その他のアプリ」一覧は Apple から私たちの他のアプリの公開情報を読み込みます。

### 6. 子ども

本アプリは 13 歳未満の子どもを対象としておらず、子どもの情報を意図的に収集することはありません。

### 7. 変更

本ポリシーは更新されることがあります。最新版は常にこのページに掲載します。

### 8. お問い合わせ

zhanggenlove@gmail.com`,
  },
  terms: {
    en: `## Terms of Service — BLEChat

**Last updated: November 24, 2026**

By using BLEChat (the "App") you agree to these terms.

### 1. The Service

BLEChat lets nearby devices exchange messages and calls over Bluetooth without the internet. The App is free and provided **as is**, without warranties of any kind.

### 2. No Guarantee of Delivery

Bluetooth range and message delivery depend on your surroundings, your device and who is nearby. Messages may be delayed or never arrive. **Do not rely on BLEChat as your only way to reach emergency services.**

### 3. Acceptable Use

There is **no tolerance for objectionable content or abusive users.** You agree not to use BLEChat to:

- harass, threaten, bully or impersonate anyone;
- send hateful, sexually explicit, violent or illegal content;
- send spam or flood the network;
- interfere with the App or other people's devices.

You are responsible for everything you send.

### 4. Blocking and Reporting

Because BLEChat has no servers, we cannot read, remove or moderate messages. You can block or report anyone from their profile or by long-pressing a message, and hide words in Settings. Reports are sent to us by email and we act on them within 24 hours where we can, for example by improving the App's filters.

### 5. Intellectual Property

The App, its design and code belong to Gen Zhang. You keep the rights to what you write.

### 6. Limitation of Liability

To the extent permitted by law, we are not liable for any loss or damage arising from your use of the App, including missed or delayed messages.

### 7. Apple

These terms are between you and Gen Zhang, not Apple. Your use of the App is also subject to Apple's Standard End User License Agreement (EULA).

### 8. Changes

We may update these terms. The latest version is always on this page.

### 9. Contact

zhanggenlove@gmail.com`,
    zh: `## 服务条款 — BLEChat

**最后更新：2026 年 11 月 24 日**

使用 BLEChat（“本应用”）即表示你同意本条款。

### 1. 服务说明

BLEChat 让附近的设备在没有网络的情况下通过蓝牙收发消息和通话。本应用免费提供，并按**现状**提供，不作任何形式的保证。

### 2. 不保证送达

蓝牙范围与消息送达取决于周围环境、设备以及附近的用户，消息可能延迟或无法送达。**请勿将 BLEChat 作为联系紧急救援的唯一方式。**

### 3. 使用规范

我们对**不当内容和恶意用户零容忍**。你同意不使用 BLEChat：

- 骚扰、威胁、欺凌或冒充他人；
- 发送仇恨、色情、暴力或违法内容；
- 发送垃圾信息或刷屏；
- 干扰本应用或他人的设备。

你需要对自己发送的所有内容负责。

### 4. 屏蔽与举报

由于 BLEChat 没有服务器，我们无法读取、删除或审核消息。你可以在对方资料页或长按消息来屏蔽、举报任何人，也可以在设置中隐藏词语。举报会通过邮件发送给我们，我们会尽可能在 24 小时内处理，例如改进应用内的过滤功能。

### 5. 知识产权

本应用及其设计和代码归 Gen Zhang 所有。你发送的内容归你所有。

### 6. 责任限制

在法律允许的范围内，我们对你使用本应用造成的任何损失（包括消息丢失或延迟）不承担责任。

### 7. Apple

本条款是你与 Gen Zhang 之间的约定，与 Apple 无关。你对本应用的使用同时受 Apple 标准最终用户许可协议（EULA）约束。

### 8. 变更

我们可能会更新本条款，最新版本始终发布在本页面。

### 9. 联系我们

zhanggenlove@gmail.com`,
    ja: `## 利用規約 — BLEChat

**最終更新：2026年11月24日**

BLEChat（以下「本アプリ」）を利用することで、本規約に同意したものとみなされます。

### 1. サービス

BLEChat は、インターネットなしで近くの端末同士が Bluetooth でメッセージや通話をやり取りできるアプリです。本アプリは無料で、**現状のまま**提供され、いかなる保証もありません。

### 2. 配信の保証はありません

Bluetooth の範囲や配信は、周囲の環境、端末、近くの利用者によって変わります。メッセージは遅れたり届かなかったりすることがあります。**緊急通報の唯一の手段として BLEChat に頼らないでください。**

### 3. 禁止事項

**不適切なコンテンツや悪質な利用者は一切容認しません。** 次の目的で BLEChat を使用しないでください：

- 嫌がらせ、脅迫、いじめ、なりすまし
- 差別的、性的、暴力的、違法なコンテンツの送信
- スパムや大量送信
- 本アプリや他人の端末の妨害

送信した内容の責任はあなたにあります。

### 4. ブロックと報告

BLEChat にはサーバーがないため、私たちがメッセージを閲覧・削除・審査することはできません。プロフィールやメッセージの長押しから誰でもブロック・報告でき、設定で単語を非表示にできます。報告はメールで私たちに届き、可能な限り 24 時間以内に対応します（フィルター機能の改善など）。

### 5. 知的財産

本アプリ、そのデザインとコードは Gen Zhang に帰属します。あなたが書いた内容の権利はあなたにあります。

### 6. 責任の制限

法律で認められる範囲で、本アプリの利用によって生じた損害（メッセージの不達や遅延を含む）について責任を負いません。

### 7. Apple

本規約はあなたと Gen Zhang との間の契約であり、Apple とのものではありません。本アプリの利用には Apple の標準エンドユーザー使用許諾契約（EULA）も適用されます。

### 8. 変更

本規約は更新されることがあります。最新版は常にこのページに掲載します。

### 9. お問い合わせ

zhanggenlove@gmail.com`,
  },
}
