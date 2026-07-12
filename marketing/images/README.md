# marketing/images — 投稿画像

Netero のブランド（黒曜石 #050507 × 残り火 #ff4d1c→#ff9a3c、Linear 系）で作る投稿画像。
外部の画像生成AIではなく **SVG をコードで組んで PNG にラスタライズ**して作る（トンマナを正確に再現でき、文言差し替えも一瞬）。

## 生成物

| ファイル | 用途 | サイズ |
|---|---|---|
| `day01-hero.png` | Day1 ローンチ / IG 縦・X 兼用のヒーロー | 1080×1350 |

## 再生成・新規作成

`generate.js` が SVG → PNG レンダラ（[@resvg/resvg-js](https://github.com/yisibl/resvg-js)、日本語は Noto Sans CJK JP を自動使用）。

```bash
npm i @resvg/resvg-js       # 初回のみ
node generate.js . day01-hero.png
```

新しい絵は `generate.js` 内の SVG テンプレート（文言・レイアウト）を編集して別名で出力する。
- ヘッドライン・バッジ・CTA・フッターは変数化しておくと量産しやすい
- X 横用は viewBox を 1600×900 に、正方形は 1080×1080 に変える
- グラデーション `#fire`、グロー、フォント(`Noto Sans CJK JP` weight 900) は共通トンマナとして固定
