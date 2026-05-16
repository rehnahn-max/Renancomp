const CACHE_NAME = 'renan-tech-v10';

const urlsToCache = [

'/',
'/index.html',
'/manifest.json',
'/Fundo.jpg',
'/icon-192.png',
'/icon-512.png'

];

/* INSTALL */

self.addEventListener('install', event => {

self.skipWaiting();

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache => {

return cache.addAll(urlsToCache);

})

);

});

/* ACTIVATE */

self.addEventListener('activate', event => {

event.waitUntil(

caches.keys().then(keys => {

return Promise.all(

keys.map(key => {

if(key !== CACHE_NAME){

return caches.delete(key);

}

})

);

})

);

return self.clients.claim();

});

/* FETCH */

self.addEventListener('fetch', event => {

event.respondWith(

fetch(event.request)

.then(response => {

const responseClone = response.clone();

caches.open(CACHE_NAME)

.then(cache => {

cache.put(event.request, responseClone);

});

return response;

})

.catch(() => {

return caches.match(event.request);

})

);

});

/* FORCE UPDATE */

self.addEventListener('message', event => {

if(event.data === 'skipWaiting'){

self.skipWaiting();

}

});
