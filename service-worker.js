if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"9102bcf907d2b177a1240e24fe985d1c","url":"404.html"},{"revision":"640e6bc20607c27c95aabc9a8e286894","url":"b4b1c9748bd2cad83b2b.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"9102bcf907d2b177a1240e24fe985d1c","url":"index.html"},{"revision":"a66872bead1f894a79ea2488187e8ff2","url":"static/css/20.f5f9d973.chunk.css"},{"revision":"b118e22da008280bd0b1ec0871f93404","url":"static/css/21.6ec96a3b.chunk.css"},{"revision":"ce3aec4c9c8ce12b4516e2279b43ea4b","url":"static/css/3.1432c553.chunk.css"},{"revision":"d54105d2d4dcd6f95afd2da49bdc5366","url":"static/js/0.d1d981d8.chunk.js"},{"revision":"f2789160044a64d4f52e10dab7e5ddc8","url":"static/js/1.aa7baa54.chunk.js"},{"revision":"70a286c263e948eb988e8ebf97fdc60e","url":"static/js/12.559a191e.chunk.js"},{"revision":"1188e59021e11da6f82da4965d7eecae","url":"static/js/13.98b69390.chunk.js"},{"revision":"e110e098888b6bb8f5f9ba3590eb3bd4","url":"static/js/14.fb33b38b.chunk.js"},{"revision":"a008e68c0915babc2680d712dfc43abe","url":"static/js/15.8ff4146e.chunk.js"},{"revision":"63bd4b6242a8478a9eaefdc1870c14d6","url":"static/js/16.d37fc34f.chunk.js"},{"revision":"1f09f536f24777e876d685552fa9434c","url":"static/js/17.78aaecee.chunk.js"},{"revision":"410b4fd45dddc26a146813d615108f81","url":"static/js/18.ad082059.chunk.js"},{"revision":"fb4865f81cf380ff9c2f95ae62f81da3","url":"static/js/19.14273c94.chunk.js"},{"revision":"a097af09acec5295b6b8ac1018868c39","url":"static/js/2.a716e13a.chunk.js"},{"revision":"c38657c06da3b191a9a743474b3fe7eb","url":"static/js/20.226a9687.chunk.js"},{"revision":"40cd134f0965fcad06141c6da0c27491","url":"static/js/21.d08d6bb0.chunk.js"},{"revision":"ae8808fc849a7380cfc6e3a5865122b3","url":"static/js/22.aae5efd3.chunk.js"},{"revision":"9d4f877432ef3b13bf422fde3061df1d","url":"static/js/23.b35091d7.chunk.js"},{"revision":"31c37362ac8572e3913f4a84af88c06c","url":"static/js/24.6ddb852b.chunk.js"},{"revision":"8eec1788ca9435ebf667117df68bf567","url":"static/js/25.4a1113b4.chunk.js"},{"revision":"7e73e08b9ce21d8226cd944c7ef1c612","url":"static/js/26.c38c6b1a.chunk.js"},{"revision":"b5d53d3201324c51a302df140c2d1ed3","url":"static/js/27.ef1c3376.chunk.js"},{"revision":"33a09c4fea4e887cf1dbe38f4b47107f","url":"static/js/28.75cc053a.chunk.js"},{"revision":"3324bdb71dd0a246340da4a45f19eb11","url":"static/js/29.d4b8b21a.chunk.js"},{"revision":"7b560a06f8f8cae23d6fbda37ebaff2e","url":"static/js/3.c480efd7.chunk.js"},{"revision":"457c1b98b7773745a845df05b0da638c","url":"static/js/30.6b7f3584.chunk.js"},{"revision":"357b16ed4b2d9589b2e19124ba7ba714","url":"static/js/31.cdf7f078.chunk.js"},{"revision":"2924ea0c6aadadb531090a9bbbc8d371","url":"static/js/32.a18d68f1.chunk.js"},{"revision":"2291b9c434177cd54634790b58c84301","url":"static/js/33.05cddf1e.chunk.js"},{"revision":"a714b86ff719c4a6c915a75b41a2bf02","url":"static/js/34.f33d8f84.chunk.js"},{"revision":"049c94528862436960c1a35ea700fe8e","url":"static/js/35.04116f57.chunk.js"},{"revision":"2bb8b98974dda0e1b5534f6210d00380","url":"static/js/36.c45d8e2f.chunk.js"},{"revision":"1b8c88658bb0ab1f6babd28d6510bb46","url":"static/js/37.44552ebf.chunk.js"},{"revision":"da42b68e48861c125c3eac86a402c325","url":"static/js/38.8db60be6.chunk.js"},{"revision":"74dff46d2f2a3983bc9f7d10c0fac48e","url":"static/js/39.9f6a9848.chunk.js"},{"revision":"4264dc0635f5555c76e045de15ed72d8","url":"static/js/4.dea7f8e5.chunk.js"},{"revision":"596a33b0f38234fbaa507db9baeced7c","url":"static/js/40.fc0fd3bc.chunk.js"},{"revision":"9985b5c07991d2ad9538c182652a32cf","url":"static/js/41.9b370381.chunk.js"},{"revision":"0bd346533c0ddadaf9552b47848bf476","url":"static/js/42.9144f977.chunk.js"},{"revision":"462910444b3e2865e1b0d10145361c10","url":"static/js/43.b24443e8.chunk.js"},{"revision":"0cdbbef2bd82e9d7b3e400615e080ac0","url":"static/js/44.a8bf488f.chunk.js"},{"revision":"5900dae213ea42718c0e573fbf86d3a6","url":"static/js/45.9e8943e1.chunk.js"},{"revision":"289c446a58379eab1bfa01b4bc721840","url":"static/js/46.dfa5972c.chunk.js"},{"revision":"b7747b804074319f3513f214dc443822","url":"static/js/47.19214adf.chunk.js"},{"revision":"a1bd7439e6dfa042a4c4739bb9a13963","url":"static/js/5.0fa50450.chunk.js"},{"revision":"88a40a5d5487ae9b57f22d7829e90bea","url":"static/js/6.42733f37.chunk.js"},{"revision":"c7913046b0e0384fcf20fc54c92afc71","url":"static/js/7.60bf0961.chunk.js"},{"revision":"bdb2266bed9103f1230eae2ccb71f016","url":"static/js/8.2e8ba272.chunk.js"},{"revision":"beba8a683123c4c74831d2ecd734da71","url":"static/js/9.dccc18b9.chunk.js"},{"revision":"a4ce0790a661a4d08d54ad20a2799951","url":"static/js/main.d416c1bf.chunk.js"},{"revision":"fe71ab6cc1aff0ee903efc008132f378","url":"static/js/runtime-main.9c345a27.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.incovid19\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
