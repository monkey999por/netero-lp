const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const path = require('path');

const W = 1080, H = 1350;
const SANS = 'Noto Sans CJK JP';
const SERIF = 'Noto Serif CJK JP';
const OUT = process.argv[2] || '.';

function grid(color, op){
  let s = `<g stroke="${color}" stroke-opacity="${op}" stroke-width="1">`;
  for(let i=0;i<16;i++) s+=`<line x1="${i*72}" y1="0" x2="${i*72}" y2="${H}"/>`;
  for(let i=0;i<19;i++) s+=`<line x1="0" y1="${i*72}" x2="${W}" y2="${i*72}"/>`;
  return s+'</g>';
}
function render(svg, name){
  const r = new Resvg(svg, { fitTo:{mode:'width',value:W}, font:{loadSystemFonts:true, defaultFontFamily:SANS} });
  const p = path.join(OUT, name);
  fs.mkdirSync(path.dirname(p), {recursive:true});
  fs.writeFileSync(p, r.render().asPng());
  console.log('wrote', name);
}

/* ===================== 資格試験 (shikaku) — ink & gold, seal, serif ===================== */
const shikakuHero = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>
  <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0d878"/><stop offset="1" stop-color="#d4af37"/></linearGradient>
  <radialGradient id="gtop" cx="0.5" cy="0" r="0.7"><stop offset="0" stop-color="#d4af37" stop-opacity="0.22"/><stop offset="1" stop-color="#d4af37" stop-opacity="0"/></radialGradient>
</defs>
<rect width="${W}" height="${H}" fill="#0b1020"/>
${grid('#d4af37',0.05)}
<rect width="${W}" height="${H}" fill="url(#gtop)"/>
<text x="${W/2}" y="150" font-family="${SANS}" font-size="26" fill="#d4af37" text-anchor="middle" letter-spacing="10">ARENA — 資格試験</text>
<!-- seal -->
<g transform="translate(${W/2},330)">
  <circle r="118" fill="none" stroke="#c0392b" stroke-width="5"/>
  <circle r="98" fill="none" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 7"/>
  <text y="-6" font-family="${SERIF}" font-weight="900" font-size="70" fill="#c0392b" text-anchor="middle">合格</text>
  <text y="58" font-family="${SERIF}" font-weight="700" font-size="30" fill="#c0392b" text-anchor="middle" letter-spacing="8">を、日課に</text>
</g>
<g font-family="${SERIF}" font-weight="900" text-anchor="middle">
  <text x="${W/2}" y="620" font-size="92" fill="#eae4d2">受かる人は、</text>
  <text x="${W/2}" y="740" font-size="92" fill="url(#gold)">隠さない。</text>
</g>
<g font-family="${SERIF}" text-anchor="middle" fill="#9aa0b8">
  <text x="${W/2}" y="850" font-size="32">全員の学習タスクが、公開で流れる。</text>
  <text x="${W/2}" y="900" font-size="32">逃げ場がないから、受かる。</text>
</g>
<g transform="translate(${W/2},1070)">
  <rect x="-260" y="-46" width="520" height="92" rx="10" fill="url(#gold)"/>
  <text y="12" font-family="${SANS}" font-weight="900" font-size="34" fill="#1a1406" text-anchor="middle">ウェイトリスト受付中</text>
</g>
<text x="${W/2}" y="1270" font-family="${SANS}" font-weight="700" font-size="26" fill="#5b6188" text-anchor="middle">Netero ・ X / @chmod_777_prod</text>
</svg>`;

const shikakuQuote = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs><radialGradient id="v" cx="0.5" cy="0.5" r="0.6"><stop offset="0" stop-color="#c0392b" stop-opacity="0.14"/><stop offset="1" stop-color="#c0392b" stop-opacity="0"/></radialGradient></defs>
<rect width="${W}" height="${H}" fill="#0b1020"/>${grid('#d4af37',0.045)}
<rect width="${W}" height="${H}" fill="url(#v)"/>
<text x="${W/2}" y="360" font-family="${SERIF}" font-size="120" fill="#d4af37" text-anchor="middle">＂</text>
<g font-family="${SERIF}" font-weight="900" text-anchor="middle" fill="#eae4d2">
  <text x="${W/2}" y="600" font-size="72">才能じゃない。</text>
  <text x="${W/2}" y="710" font-size="60" fill="#9aa0b8">毎日机に向かえるか、</text>
  <text x="${W/2}" y="820" font-size="76" fill="#f0d878">それだけ。</text>
</g>
<text x="${W/2}" y="1010" font-family="${SANS}" font-size="28" fill="#5b6188" text-anchor="middle" letter-spacing="4">Netero ー 資格試験アリーナ</text>
</svg>`;

/* ===================== 個人開発 (indie) — terminal / green ===================== */
const indieHero = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>
  <linearGradient id="grn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#56d364"/><stop offset="1" stop-color="#3fb950"/></linearGradient>
  <radialGradient id="gt" cx="0.5" cy="0" r="0.7"><stop offset="0" stop-color="#3fb950" stop-opacity="0.16"/><stop offset="1" stop-color="#3fb950" stop-opacity="0"/></radialGradient>
</defs>
<rect width="${W}" height="${H}" fill="#0d1117"/>
<rect width="${W}" height="${H}" fill="url(#gt)"/>
<!-- terminal window -->
<g transform="translate(90,150)">
  <rect width="900" height="470" rx="14" fill="#010409" stroke="#30363d" stroke-width="1.5"/>
  <rect width="900" height="46" rx="14" fill="#161b22"/>
  <rect y="30" width="900" height="16" fill="#161b22"/>
  <circle cx="28" cy="23" r="7" fill="#ff5f56"/><circle cx="52" cy="23" r="7" fill="#ffbd2e"/><circle cx="76" cy="23" r="7" fill="#27c93f"/>
  <text x="110" y="28" font-family="${SANS}" font-size="18" fill="#484f58">netero — arena/indie</text>
  <g font-family="${SANS}" font-size="24">
    <text x="34" y="108" fill="#3fb950">$ netero ship --daily</text>
    <text x="34" y="168" fill="#8b949e">watching arena "個人開発" · 342 devs shipping…</text>
    <text x="34" y="236" fill="#bc8cff">a1f9c02 <tspan fill="#58a6ff">kai_dev</tspan> <tspan fill="#e6edf3">認証まわりを実装し切る</tspan> <tspan fill="#56d364">✓done</tspan></text>
    <text x="34" y="288" fill="#bc8cff">7e3b1d8 <tspan fill="#58a6ff">mono</tspan> <tspan fill="#e6edf3">LPをCloudflareに公開</tspan> <tspan fill="#56d364">✓done</tspan></text>
    <text x="34" y="340" fill="#bc8cff">c02a5f1 <tspan fill="#58a6ff">yuzu</tspan> <tspan fill="#e6edf3">Stripe決済フローを繋ぐ</tspan> <tspan fill="#58a6ff">wip</tspan></text>
    <text x="34" y="392" fill="#bc8cff">3d9e740 <tspan fill="#58a6ff">nano</tspan> <tspan fill="#e6edf3">store を分割リファクタ</tspan> <tspan fill="#56d364">✓done</tspan></text>
    <text x="34" y="444" fill="#3fb950">_</text>
  </g>
</g>
<g font-family="${SANS}" font-weight="900" text-anchor="middle">
  <text x="${W/2}" y="770" font-size="60" fill="#e6edf3">毎日 <tspan fill="#56d364">commit</tspan> する開発者だけが、</text>
  <text x="${W/2}" y="850" font-size="60" fill="#58a6ff">リリースに辿り着く。</text>
</g>
<text x="${W/2}" y="945" font-family="${SANS}" font-size="30" fill="#8b949e" text-anchor="middle">全員の開発タスクが、git log のように流れる。</text>
<g transform="translate(${W/2},1075)">
  <rect x="-250" y="-46" width="500" height="92" rx="10" fill="url(#grn)"/>
  <text y="12" font-family="${SANS}" font-weight="900" font-size="32" fill="#06210c" text-anchor="middle">$ netero join --waitlist</text>
</g>
<text x="${W/2}" y="1270" font-family="${SANS}" font-size="26" fill="#484f58" text-anchor="middle">Netero ・ X / @chmod_777_prod</text>
</svg>`;

let cells='';
for(let c=0;c<26;c++)for(let r=0;r<7;r++){const bias=Math.min(9,Math.floor(c/2.4)+((c*7+r)%4));const lv=[0,0,1,1,2,2,3,3,4,4][Math.min(9,bias)];const col=['#161b22','#161b22','#0e4429','#0e4429','#006d32','#006d32','#26a641','#26a641','#39d353','#39d353'][Math.min(9,bias)];cells+=`<rect x="${90+c*34}" y="${360+r*34}" width="28" height="28" rx="5" fill="${col}"/>`;}
const indieGraph = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<rect width="${W}" height="${H}" fill="#0d1117"/>
<text x="${W/2}" y="180" font-family="${SANS}" font-size="26" fill="#3fb950" text-anchor="middle" letter-spacing="6">// don't break the chain</text>
<text x="${W/2}" y="290" font-family="${SANS}" font-weight="900" font-size="72" fill="#e6edf3" text-anchor="middle">草を、切らすな。</text>
${cells}
<text x="90" y="700" font-family="${SANS}" font-size="28" fill="#8b949e">you — contribution / last 26 weeks</text>
<text x="990" y="700" font-family="${SANS}" font-weight="900" font-size="28" fill="#56d364" text-anchor="end">current streak: 26</text>
<g transform="translate(${W/2},900)" text-anchor="middle" font-family="${SANS}" font-weight="900">
  <text font-size="58" fill="#e6edf3">while (<tspan fill="#58a6ff">alive</tspan>) {</text>
  <text y="80" font-size="58" fill="#56d364">  ship();</text>
  <text y="160" font-size="58" fill="#e6edf3">}</text>
</g>
<text x="${W/2}" y="1250" font-family="${SANS}" font-size="26" fill="#484f58" text-anchor="middle">Netero ー 個人開発アリーナ</text>
</svg>`;

/* ===================== 大学受験 (juken) — chalkboard ===================== */
const noise = `<filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2"/></filter>`;
const jukenHero = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>${noise}</defs>
<rect width="${W}" height="${H}" fill="#20423a"/>
<rect width="${W}" height="${H}" filter="url(#n)" opacity="0.06"/>
<rect x="24" y="24" width="${W-48}" height="${H-48}" rx="10" fill="none" stroke="#5b3a22" stroke-width="14"/>
<rect x="40" y="40" width="${W-80}" height="${H-80}" rx="4" fill="none" stroke="#78502f" stroke-width="3"/>
<text x="${W/2}" y="180" font-family="${SANS}" font-size="30" fill="#ffe08a" text-anchor="middle" letter-spacing="6">✎ ARENA ー 大学受験</text>
<g font-family="${SANS}" font-weight="900" text-anchor="middle">
  <text x="${W/2}" y="400" font-size="90" fill="#f5f2e8">隣の席が、</text>
  <text x="${W/2}" y="520" font-size="90" fill="#ffe08a">ペンを止めない。</text>
  <rect x="230" y="540" width="620" height="8" rx="4" fill="#ff9d92"/>
</g>
<g font-family="${SANS}" text-anchor="middle" fill="#c4c9bd">
  <text x="${W/2}" y="640" font-size="32">全員の勉強が流れる、終わらない自習室。</text>
  <text x="${W/2}" y="690" font-size="32">だから、あなたも止まれない。</text>
</g>
<!-- countdown -->
<g transform="translate(${W/2},840)">
  <rect x="-280" y="-56" width="560" height="112" rx="16" fill="none" stroke="#f5f2e8" stroke-opacity="0.4" stroke-width="2.5" stroke-dasharray="9 7"/>
  <text x="-150" y="-4" font-family="${SANS}" font-size="30" fill="#c4c9bd" text-anchor="middle">共通テストまで</text>
  <text x="120" y="18" font-family="${SANS}" font-weight="900" font-size="72" fill="#ffe08a" text-anchor="middle">あと183</text>
</g>
<g transform="translate(${W/2},1050)">
  <rect x="-240" y="-46" width="480" height="92" rx="10" fill="#ffe08a"/>
  <text y="12" font-family="${SANS}" font-weight="900" font-size="34" fill="#20423a" text-anchor="middle">ウェイトリスト受付中 ✎</text>
</g>
<text x="${W/2}" y="1250" font-family="${SANS}" font-size="26" fill="#8fa096" text-anchor="middle">Netero ・ X / @chmod_777_prod</text>
</svg>`;

const jukenQuote = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>${noise}</defs>
<rect width="${W}" height="${H}" fill="#20423a"/>
<rect width="${W}" height="${H}" filter="url(#n)" opacity="0.06"/>
<g font-family="${SANS}" font-weight="900" text-anchor="middle">
  <text x="${W/2}" y="560" font-size="72" fill="#f5f2e8">才能で受かるんじゃない。</text>
  <text x="${W/2}" y="700" font-size="80" fill="#ffe08a">机に向かった日数</text>
  <rect x="200" y="722" width="680" height="8" rx="4" fill="#ff9d92"/>
  <text x="${W/2}" y="820" font-size="72" fill="#f5f2e8">で受かる。</text>
</g>
<text x="${W/2}" y="1000" font-family="${SANS}" font-size="30" fill="#c4c9bd" text-anchor="middle">——だから、今日も座ろう。</text>
<text x="${W/2}" y="1250" font-family="${SANS}" font-size="26" fill="#8fa096" text-anchor="middle">Netero ー 大学受験アリーナ</text>
</svg>`;

render(shikakuHero, 'shikaku/hero.png');
render(shikakuQuote, 'shikaku/quote.png');
render(indieHero, 'indie/hero.png');
render(indieGraph, 'indie/streak.png');
render(jukenHero, 'juken/hero.png');
render(jukenQuote, 'juken/quote.png');
