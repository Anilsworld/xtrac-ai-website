import { chromium } from 'playwright-core';
let b; for (const ch of ['chrome','msedge']) { try { b = await chromium.launch({ channel: ch }); break; } catch(e){} }
const p = await (await b.newContext({ viewport:{width:1360,height:900} })).newPage();
await p.goto('https://business.xtrac.app/', { waitUntil:'networkidle', timeout:45000 }).catch(()=>{});
await p.waitForTimeout(3500);
console.log('URL after load:', p.url());
await p.screenshot({ path:'D:/xtrac-ai-website/.bizlogin.png' });
await b.close();
