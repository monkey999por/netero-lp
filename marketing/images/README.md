# marketing/images — 投稿画像

外部の画像生成AIではなく **SVG をコードで組んで PNG にラスタライズ**して作る（ブランドのトンマナを正確に再現でき、文言差し替えも一瞬）。日本語は Noto Sans / Serif CJK JP を自動使用。

## 生成物

| ファイル | アリーナ | 用途 | サイズ |
|---|---|---|---|
| `day01-hero.png` | AIで稼ぐ | ローンチ用ヒーロー（ember×obsidian） | 1080×1350 |
| `shikaku/hero.png` `shikaku/quote.png` | 資格試験 | ヒーロー（合格印×ink&gold）/ 名言 | 1080×1350 |
| `indie/hero.png` `indie/streak.png` | 個人開発 | ターミナル / 草グラフ（GitHub dark×green） | 1080×1350 |
| `juken/hero.png` `juken/quote.png` | 大学受験 | 黒板ヒーロー / 名言（chalkboard） | 1080×1350 |

## 再生成・新規作成

SVG → PNG レンダラは [@resvg/resvg-js](https://github.com/yisibl/resvg-js)。

```bash
npm i @resvg/resvg-js                 # 初回のみ（node_modules は未コミット）
node generate.js . day01-hero.png     # ai-earn 単体（ember）
node generate-arenas.js .             # 資格/個人開発/大学受験の6枚を一括生成
```

- `generate.js` = ai-earn（ember）単体テンプレ。
- `generate-arenas.js` = アリーナ別ビルダー（各アリーナのパレット・レイアウトを関数で保持）。新アリーナはビルダーを1つ足して `render(...)` に追加。
- 各アリーナのトンマナ（配色・フォント・モチーフ）は対応する `/<slug>/index.html` の LP と揃える。
- SVG 不向きな写真系（自習室の実写など）は各週次デッキの生成AIプロンプトに委ねる。ここはブランド図版に限定。
