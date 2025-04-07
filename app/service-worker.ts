/// <reference lib="webworker" />

export default null

declare let self: ServiceWorkerGlobalScope

self.addEventListener("install", (event) => {
  self.skipWaiting()
})

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim())
})

// Add offline caching if needed
const CACHE_NAME = "erol-kasapoglu-v1"
const urlsToCache = ["/", "/icons/icon-192x192.png", "/icons/icon-384x384.png", "/icons/icon-512x512.png"]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    }),
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }
      return fetch(event.request)
    }),
  )
})

