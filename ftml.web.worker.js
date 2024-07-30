// import { init, renderHTML, ready, loading, makeInfo, WikitextSettings } from './lib/ftml-wasm/esm/wj-ftml-wasm.js';
import { init, renderHTML, ready, loading, makeInfo } from './lib/ftml-wasm/esm/wj-ftml-wasm.js';


init();

onmessage = async (e) => {
  if (!ready) await loading;
  const ftmlSource = e.data.value;
  // const settings = WikitextSettings.from_mode({ mode: 'page', layout: 'wikidot' });
  const info = makeInfo({ score: 0 });
  // const htmlOutput = renderHTML(ftmlSource, info, settings);
  const htmlOutput = renderHTML(ftmlSource, info);
  const html = htmlOutput.html;
  const styles = extractStyles(html);
  const type = e.data.type;

  postMessage({ html, styles, type });
};

function extractStyles(html) {
  const styleMatches = html.match(/<style[^>]*>([^<]*)<\/style>/g);
  return styleMatches ? styleMatches.map(style => style.replace(/<\/?style[^>]*>/g, '')) : [];
}

// v0.0.2-beta 2024-07-30
// fix wj-ftml-wasm.js func ftom_mode, add default layout variable