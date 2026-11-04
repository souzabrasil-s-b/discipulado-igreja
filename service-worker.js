// O Discipulado mudou de endereço: este arquivo só limpa o que o app antigo guardou no aparelho.
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(ks){ return Promise.all(ks.map(function(k){ return caches.delete(k); })); })
    .then(function(){ return self.registration.unregister(); })
    .then(function(){ return self.clients.matchAll({ type: 'window' }); })
    .then(function(cs){ cs.forEach(function(c){ c.navigate(c.url); }); }));
});
self.addEventListener('fetch', function(e){ e.respondWith(fetch(e.request)); });
 
