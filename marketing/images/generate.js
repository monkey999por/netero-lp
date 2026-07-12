const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const path = require('path');

const W = 1080, H = 1350;
const JP = 'Noto Sans CJK JP';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="fire" x1="0" y1="0" x2="1" y2="0.3">
      <stop offset="0" stop-color="#ff4d1c"/>
      <stop offset="0.55" stop-color="#ff9a3c"/>
      <stop offset="1" stop-color="#ffc24d"/>
    </linearGradient>
    <radialGradient id="glowTop" cx="0.5" cy="0.0" r="0.7">
      <stop offset="0" stop-color="#ff4d1c" stop-opacity="0.55"/>
      <stop offset="0.5" stop-color="#ff4d1c" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#ff4d1c" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowBehind" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="#ff4d1c" stop-opacity="0.30"/>
      <stop offset="1" stop-color="#ff4d1c" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="26"/>
    </filter>
    <linearGradient id="pillBorder" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ff9a3c" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#ff4d1c" stop-opacity="0.6"/>
    </linearGradient>
  </defs>

  <!-- base -->
  <rect width="${W}" height="${H}" fill="#050507"/>

  <!-- faint grid -->
  <g stroke="#ffffff" stroke-opacity="0.035" stroke-width="1">
    ${Array.from({length: 15}, (_, i) => `<line x1="${i*72}" y1="0" x2="${i*72}" y2="${H}"/>`).join('')}
    ${Array.from({length: 19}, (_, i) => `<line x1="0" y1="${i*72}" x2="${W}" y2="${i*72}"/>`).join('')}
  </g>

  <!-- top aurora glow -->
  <rect width="${W}" height="${H}" fill="url(#glowTop)"/>
  <!-- glow behind headline -->
  <ellipse cx="${W/2}" cy="640" rx="440" ry="220" fill="url(#glowBehind)" filter="url(#soft)"/>

  <!-- logo -->
  <g transform="translate(${W/2}, 150)">
    <rect x="-108" y="-26" width="52" height="52" rx="14" fill="url(#fire)"/>
    <text x="-82" y="10" font-family="${JP}" font-weight="900" font-size="26" fill="#170a02" text-anchor="middle">▲</text>
    <text x="-42" y="12" font-family="${JP}" font-weight="900" font-size="40" fill="#f2f2f5" text-anchor="start" letter-spacing="1">Netero</text>
  </g>

  <!-- badge -->
  <g transform="translate(${W/2}, 268)">
    <rect x="-300" y="-30" width="600" height="60" rx="30" fill="#ff4d1c" fill-opacity="0.08" stroke="#ff9a3c" stroke-opacity="0.35" stroke-width="1.5"/>
    <circle cx="-256" cy="0" r="6" fill="#ff4d1c"/>
    <text x="14" y="9" font-family="${JP}" font-weight="700" font-size="26" fill="#ff9a3c" text-anchor="middle">第1アリーナ「AIで稼ぐ」 ウェイトリスト受付中</text>
  </g>

  <!-- headline -->
  <g font-family="${JP}" font-weight="900" text-anchor="middle" letter-spacing="1">
    <text x="${W/2}" y="580" font-size="82" fill="#f2f2f5">意志力は、</text>
    <text x="${W/2}" y="678" font-size="82" fill="#f2f2f5">あてにならない。</text>
    <text x="${W/2}" y="812" font-size="82" fill="url(#fire)">環境は、裏切らない。</text>
  </g>

  <!-- subtext -->
  <g font-family="${JP}" text-anchor="middle">
    <text x="${W/2}" y="928" font-size="32" font-weight="500" fill="#c8c8d2">全員のタスクが、公開で流れる。</text>
    <text x="${W/2}" y="978" font-size="32" font-weight="500" fill="#9a9aa8">隠す場所はないから、続く。タスクSNS。</text>
  </g>

  <!-- CTA pill -->
  <g transform="translate(${W/2}, 1120)">
    <rect x="-250" y="-44" width="500" height="88" rx="20" fill="url(#fire)"/>
    <text x="0" y="12" font-family="${JP}" font-weight="900" font-size="34" fill="#170a02" text-anchor="middle">ウェイトリストに登録する →</text>
  </g>

  <!-- footer -->
  <g font-family="${JP}" text-anchor="middle">
    <text x="${W/2}" y="1258" font-size="26" font-weight="700" fill="#5c5c6b">X / @chmod_777_prod</text>
    <text x="${W/2}" y="1300" font-size="22" font-weight="400" fill="#3f3f4b">焦りを、燃料に変えろ。</text>
  </g>
</svg>`;

const outDir = process.argv[2] || '.';
const outName = process.argv[3] || 'poster.png';
const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: W },
  font: { loadSystemFonts: true, defaultFontFamily: JP },
});
const png = resvg.render().asPng();
const out = path.join(outDir, outName);
fs.writeFileSync(out, png);
console.log('wrote', out, png.length, 'bytes');
