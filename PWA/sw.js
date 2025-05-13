const CACHE_NAME = 'contador-cache-v1';
const ARCHIUS_A_CACHEJAR = [
  '/',
  '/index.html',
  '/assets/app.js',
  '/assets/css/bootstrap.css',
  '/manifest.json',
  '/assets/icons/icons8-app-store-192.png',
  '/assets/icons/icons8-youtube-512.png'
];

// Instalem — Guardem els fitxers al cache
self.addEventListener('install', (event) => {
  console.log('Instal·lant Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Arxius guardats a la caché');
      return cache.addAll(ARCHIUS_A_CACHEJAR);
    })
  );
});

// (Opcional) neteja vells caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  console.log('Activat i cache netejada');
});

//  Fetch — Intercepta peticions i respon amb cache o xarxa
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resposta) => {
      return resposta || fetch(event.request);
    })
  );
});
