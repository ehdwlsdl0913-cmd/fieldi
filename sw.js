const CACHE='fieldi-locked-4843f0937ba6';
const ASSETS=['./','index.html','payload.json?v=4843f0937ba6','manifest.webmanifest','vendor/pdfjs/pdf.min.js','vendor/pdfjs/pdf.worker.min.js','icons/icon-180.png','icons/icon-192.png','icons/icon-512.png','icons/logo.png','icons/mark.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok){const c=res.clone();caches.open(CACHE).then(ca=>ca.put(e.request,c))}return res}).catch(()=>caches.match('index.html'))))});
