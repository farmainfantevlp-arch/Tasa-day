const CACHE_NAME = 'tasas-ve-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Instala y guarda en caché el "esqueleto" de la app
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// Limpia cachés viejas al activar una nueva versión
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Estrategia:
// - Peticiones a la API de tasas (dolarapi.com) -> siempre red (nunca caché, son datos en vivo)
// - Resto (HTML/CSS/JS/iconos) -> caché primero, con red de respaldo
self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  if (url.includes('dolarapi.com')) {
    event.respondWith(fetch(event.request).catch(() => new Response(
      JSON.stringify({ error: 'Sin conexión. Conéctate a internet para ver tasas actualizadas.' }),
      { headers: { 'Content-Type': 'application/json' } }
    )));
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      }).catch(() => cached);
    })
  );
});
