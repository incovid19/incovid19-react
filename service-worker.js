if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"f8d288a96d04cf0d32b23b3e10b21352","url":"404.html"},{"revision":"640e6bc20607c27c95aabc9a8e286894","url":"b4b1c9748bd2cad83b2b.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"f8d288a96d04cf0d32b23b3e10b21352","url":"index.html"},{"revision":"a66872bead1f894a79ea2488187e8ff2","url":"static/css/20.f5f9d973.chunk.css"},{"revision":"b118e22da008280bd0b1ec0871f93404","url":"static/css/21.6ec96a3b.chunk.css"},{"revision":"ce3aec4c9c8ce12b4516e2279b43ea4b","url":"static/css/3.1432c553.chunk.css"},{"revision":"d54105d2d4dcd6f95afd2da49bdc5366","url":"static/js/0.d1d981d8.chunk.js"},{"revision":"6ac1319fdb2f58eae8587390d5746ec2","url":"static/js/1.30a0f7ac.chunk.js"},{"revision":"70a286c263e948eb988e8ebf97fdc60e","url":"static/js/12.559a191e.chunk.js"},{"revision":"a89325c69e59c839651ad64c7d02b37f","url":"static/js/13.190c9d85.chunk.js"},{"revision":"95dcc05e35a664d4957f6511e9f1d09b","url":"static/js/14.95029b9e.chunk.js"},{"revision":"6088a376c5e94d97dd8ede68d18990de","url":"static/js/15.d749c2fc.chunk.js"},{"revision":"758769324c0472a3344bd8dab02cb54e","url":"static/js/16.808d83ad.chunk.js"},{"revision":"358b60cbc648cd52be434fe46145cbef","url":"static/js/17.5894742d.chunk.js"},{"revision":"69ba8141c5997891fbfab1aac12fc336","url":"static/js/18.0fcfc899.chunk.js"},{"revision":"1807d3569ba621cae958c430a8fbfa0f","url":"static/js/19.617a1314.chunk.js"},{"revision":"840df4511cdcbde0079050a82ba090ac","url":"static/js/2.9b3ced1b.chunk.js"},{"revision":"78af19813430e7a1c7327f2bb32eced5","url":"static/js/20.caacc8f3.chunk.js"},{"revision":"9ac74d723d36f775d1c0768323678a42","url":"static/js/21.618fe265.chunk.js"},{"revision":"72b9096d7a2ec3cfba0823abfd2c13fd","url":"static/js/22.c4136aa6.chunk.js"},{"revision":"93c14a58736ea7e0cf96c0e54b5694ce","url":"static/js/23.b11facc6.chunk.js"},{"revision":"6af11178d82650e54b4b5c736c55884f","url":"static/js/24.1f0789a1.chunk.js"},{"revision":"567675445c2b87f14fa2ffeaf3a55e91","url":"static/js/25.d21c4ea3.chunk.js"},{"revision":"2de1cddde502ef2ea48f7b23d0df0622","url":"static/js/26.d4d44007.chunk.js"},{"revision":"b5d53d3201324c51a302df140c2d1ed3","url":"static/js/27.ef1c3376.chunk.js"},{"revision":"a4838813e2c81187fc117876a8be144c","url":"static/js/28.e1f78698.chunk.js"},{"revision":"116d8f3dc0d60b3b486dc73b6d5251ea","url":"static/js/29.1a5eb337.chunk.js"},{"revision":"7b560a06f8f8cae23d6fbda37ebaff2e","url":"static/js/3.c480efd7.chunk.js"},{"revision":"d9805b89c752d22defb8fc8ec119f0ee","url":"static/js/30.9cb6f4fd.chunk.js"},{"revision":"f80c44f2fee411908d92e29352a6e3cd","url":"static/js/31.737d2c94.chunk.js"},{"revision":"a5694d54729c9c743ae574ed335d9a18","url":"static/js/32.1df69503.chunk.js"},{"revision":"ac2d09e37fd6e312d169e93346a9a578","url":"static/js/33.93f50aad.chunk.js"},{"revision":"d73935d98197183418352507b601d216","url":"static/js/34.dd84fb70.chunk.js"},{"revision":"7b616196f4a7773316920ee1b453e5dd","url":"static/js/35.9524871f.chunk.js"},{"revision":"cc421399657958e560e40ecb5fc10ea9","url":"static/js/36.8a0eb030.chunk.js"},{"revision":"177bfc2ad5417a46138cb62ce164cbbe","url":"static/js/37.62641d42.chunk.js"},{"revision":"ff1052c9a3300c045c759a88fdb34629","url":"static/js/38.775d5608.chunk.js"},{"revision":"2ff133811debe66a12de257917abdc62","url":"static/js/39.06f24f4a.chunk.js"},{"revision":"4264dc0635f5555c76e045de15ed72d8","url":"static/js/4.dea7f8e5.chunk.js"},{"revision":"b75bbbb92f8b9738ea6cd1a414758c68","url":"static/js/40.20689810.chunk.js"},{"revision":"a44dc8b7f890e926128e57068436eeb9","url":"static/js/41.54659bb3.chunk.js"},{"revision":"c1e3f48e6bc69e48a2a391b7c4e640ea","url":"static/js/42.a3cd526f.chunk.js"},{"revision":"8f19d19dade84ffa9b4d938fe1645790","url":"static/js/43.5038d162.chunk.js"},{"revision":"0c76fd33bba3b0ff2ee9a7ca2e9ed659","url":"static/js/44.e75f2be1.chunk.js"},{"revision":"d3a5ba9276df085cdea63dfe4c57db17","url":"static/js/45.336a7cae.chunk.js"},{"revision":"1d344333b7fda3bf74a3e5793fe7df7f","url":"static/js/46.70e4f4b5.chunk.js"},{"revision":"74a3dee99a22f408c9bb219a33442276","url":"static/js/5.97ad5e9f.chunk.js"},{"revision":"88a40a5d5487ae9b57f22d7829e90bea","url":"static/js/6.42733f37.chunk.js"},{"revision":"c7913046b0e0384fcf20fc54c92afc71","url":"static/js/7.60bf0961.chunk.js"},{"revision":"bdb2266bed9103f1230eae2ccb71f016","url":"static/js/8.2e8ba272.chunk.js"},{"revision":"7b3f5c25225cd230c78731113c96ad73","url":"static/js/9.9e9c1bd9.chunk.js"},{"revision":"50b32f8e6e0a5f34a7804b4179fd0046","url":"static/js/main.0c030af2.chunk.js"},{"revision":"1b3fdf0a5582ef05f4ccdcf9d8fa7a9f","url":"static/js/runtime-main.19ec22d8.js"}]);

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
