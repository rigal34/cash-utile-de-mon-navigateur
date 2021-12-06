
// mettre en cache




const cacheName = "cache-v6";
const assets = [
  "/",
  "/index.html",
   
   "/style.css",
   "/assets/img.jpg",
  "/assets/Lobster-Regular.ttf"];

// mettre en cache
//self fait référence à la page,quand l'évènement est install tu fais la fonction suivante 
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

// fetcher le cache aller chercher le cache une fois que je suis hors conection
 self.addEventListener("fetch", (e) => {
   console.log(e.request);
  e.respondWith(
     caches.match(e.request).then((cache) => {
      return cache || fetch(e.request);     
    })
  );
 });
