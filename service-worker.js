self.addEventListener('install', function (e) {
    console.log("installed");
    e.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
            '/',
            '/index.html',
            '/css/main.css',
            '/images/logo.png',
            '/images/Burnham/a.jpg',
            '/images/Burnham/city-travel.jpg',
                '/images/Burnham/euro.jpg',
                '/images/Burnham/griffin.jpg',
                '/images/Burnham/heritage.jpg',
                '/images/Burnham/paragon.jpg',
                '/images/Burnham/prince.jpg',
                '/images/cjh/aim.jpg',
                '/images/cjh/forest.jpg',
                '/images/cjh/manor.jpg',
                '/images/cjh/monet.jpg',
                '/images/mines/albergo.jpg',
                '/images/mines/park.jpg',
                '/images/mines/ridgewood.jpg',
                '/images/mines/villa.jpg',
                '/images/Session Road/azalea.jpg',
                '/images/Session Road/baguio-holiday.jpg',
                '/images/Session Road/bbs.jpg',
                '/images/Session Road/citylight.jpg',
                '/images/Session Road/golden-pine.jpg',
                '/images/Session Road/hotel-henrico.jpg',
                '/images/Session Road/hotel-supreme.jpg',
                '/images/Session Road/hotel-veniz.jpg',
                '/images/Session Road/inn-rocio.jpg',
                '/images/Session Road/microtel.jpg',
                '/images/Session Road/newtown.jpg',
                '/images/Session Road/travelite.jpg',
                '/images/Session Road/venus-parkview.jpg',
                '/images/wright/eli.jpg',
                '/images/wright/grand.jpg',
                '/images/wright/kamiseta.jpg',
                '/images/wright/log.jpg',
                '/images/wright/safari.jpg',
            '/scripts/main.js',
            '/manifest.json',
            '/service-worker.js'
        ]);
        })
    );
});

self.addEventListener('activate', function (e) {
    console.log("activated");
});

self.addEventListener('fetch', function (e) {
    console.log(e.request.url);
    e.respondWith(
    caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
    })
    
    );
});