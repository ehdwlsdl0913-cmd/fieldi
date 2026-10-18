const CACHE='fieldi-locked-0766573a537d';
const ASSETS=['./','index.html','payload.json?v=0766573a537d','manifest.webmanifest','vendor/pdfjs/pdf.min.js','vendor/pdfjs/pdf.worker.min.js','icons/icon-180.png','icons/icon-192.png','icons/icon-512.png','icons/logo.png','icons/mark.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
if(e.request.mode==='navigate'||u.pathname.endsWith('/')||u.pathname.endsWith('/index.html')){e.respondWith(Promise.race([fetch(e.request,{cache:'no-cache'}).then(res=>{if(res.ok){const c=res.clone();caches.open(CACHE).then(ca=>ca.put('index.html',c))}return res}),new Promise((_,rj)=>setTimeout(rj,4000))]).catch(()=>caches.match('index.html')));return} // 첫 화면은 인터넷 먼저(새 배포가 처음 열 때 바로 보이게), 4초 안에 안 되면 저장본
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok){const c=res.clone();caches.open(CACHE).then(ca=>ca.put(e.request,c))}return res}).catch(()=>caches.match('index.html'))))});
