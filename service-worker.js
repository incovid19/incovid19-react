if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"1196f6c1587f3bca5cc6c421d230deca","url":"404.html"},{"revision":"640e6bc20607c27c95aabc9a8e286894","url":"b4b1c9748bd2cad83b2b.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"1196f6c1587f3bca5cc6c421d230deca","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"ee193d41615fb8cf1732f6191cb78d96","url":"static/css/22.f5f9d973.chunk.css"},{"revision":"f521845e5f42547c7633f208c18c815a","url":"static/css/23.b1ee63fa.chunk.css"},{"revision":"03ada91fa755124bb56a92169bfaa0ec","url":"static/js/0.2c72183f.chunk.js"},{"revision":"232475cd838341db989a4bce75ca32f1","url":"static/js/1.8ab3828c.chunk.js"},{"revision":"70a286c263e948eb988e8ebf97fdc60e","url":"static/js/12.559a191e.chunk.js"},{"revision":"7ca994221a32d9b49608e35d640d51a5","url":"static/js/13.7ffbd868.chunk.js"},{"revision":"95fd9a5300ce6160661f331c1f8fb761","url":"static/js/14.1e8fccb1.chunk.js"},{"revision":"cd925485e0c7340171abfb533c7d87f9","url":"static/js/15.d794cb72.chunk.js"},{"revision":"b5700bed6c066fa5fbd9decefbaffa53","url":"static/js/16.d6401b8d.chunk.js"},{"revision":"f436b5692cc959e3cd26cad5651a7cec","url":"static/js/17.cfb25bb1.chunk.js"},{"revision":"0159d9ce13be52162fa717a52d377036","url":"static/js/18.0d17395f.chunk.js"},{"revision":"81cf042deef9b290d0cdf056217fc186","url":"static/js/19.f4224679.chunk.js"},{"revision":"464802be71d3be5af9db3fde3ef3d146","url":"static/js/2.d55e79df.chunk.js"},{"revision":"90627c1c415c0633bb1081b86c41cae5","url":"static/js/20.419ad111.chunk.js"},{"revision":"b31d5b1f1e95c40dcc677c61e064b458","url":"static/js/21.9b39d453.chunk.js"},{"revision":"a5879a13269b8bc59596071600e1a9dd","url":"static/js/22.e29c8755.chunk.js"},{"revision":"e4e3f11fa5345445a48d70db34f724fd","url":"static/js/23.70df184c.chunk.js"},{"revision":"0962fad6ec6f68630fe0c4e85dba2d43","url":"static/js/24.6d1e1585.chunk.js"},{"revision":"aff8fd040fa0cd3827c0dd022dc4b5d3","url":"static/js/25.cbe21657.chunk.js"},{"revision":"da3d2b8bf340d40309e21a934ec981b5","url":"static/js/26.0c19b3ae.chunk.js"},{"revision":"e9fcb4d2f31233201143be30dee2e188","url":"static/js/27.f0eabe5a.chunk.js"},{"revision":"9391dca378241df7e213801fe61f5210","url":"static/js/28.64d257b4.chunk.js"},{"revision":"8d98101506eb4961eeac4e2cf26093f4","url":"static/js/29.73d91da6.chunk.js"},{"revision":"a44346eb41bc48d47977e0d304863377","url":"static/js/3.8a3fd6af.chunk.js"},{"revision":"82ec352be4553dde8782ae3068acbdeb","url":"static/js/30.acf61beb.chunk.js"},{"revision":"6209e7f863c73a796aa45133b47da3d9","url":"static/js/31.0a6bfa8b.chunk.js"},{"revision":"c03e5bbe082ffd937837a88e80e594e5","url":"static/js/32.b6c55b95.chunk.js"},{"revision":"58e809f298a47d278e6db613ddf5611f","url":"static/js/33.f927fc53.chunk.js"},{"revision":"1acce973467709494b368f587ac3fc6b","url":"static/js/34.15b61b47.chunk.js"},{"revision":"a95cb261400814722eaf7f417610364b","url":"static/js/35.bb6a8ee7.chunk.js"},{"revision":"5862cd7451cdfbe29387a68a1465d3da","url":"static/js/36.ec55131b.chunk.js"},{"revision":"42c98da8a46f20bd7be30edfff5db17b","url":"static/js/37.933e60d3.chunk.js"},{"revision":"a43f35eaf4b470139c6eec7eedaba315","url":"static/js/38.953c4412.chunk.js"},{"revision":"f84e1892b6eafc21d3fb93c1fefd65d5","url":"static/js/39.b310245f.chunk.js"},{"revision":"022e1a18a35cfe5dff9f62ba5a201219","url":"static/js/4.61714e0a.chunk.js"},{"revision":"1facc215136282e34f3010e10b2d5d11","url":"static/js/40.d3a79d91.chunk.js"},{"revision":"f81a7dfb4d8d5fa07028605aed79d664","url":"static/js/41.f88f0fe4.chunk.js"},{"revision":"5728623fa0e2b83e85aef649309a7852","url":"static/js/42.fd190cc8.chunk.js"},{"revision":"491e6202d4c2cb920151df5aa65a0fcd","url":"static/js/43.573f3473.chunk.js"},{"revision":"cba2396028987f8f0e776bd4b6a84b26","url":"static/js/44.9415c12b.chunk.js"},{"revision":"6424e1d5ff577434397dcf04608b4541","url":"static/js/45.48f8b582.chunk.js"},{"revision":"1d344333b7fda3bf74a3e5793fe7df7f","url":"static/js/46.70e4f4b5.chunk.js"},{"revision":"295c7d520d5ab9fd3ed9b29ca136843b","url":"static/js/5.52654ff6.chunk.js"},{"revision":"0976565e984b1385e42bedc8e771db0f","url":"static/js/6.33020e2b.chunk.js"},{"revision":"efd029e35067851cd8ef305733d31617","url":"static/js/7.eed68295.chunk.js"},{"revision":"a34c4be7b3437d19e69cf6ab32450163","url":"static/js/8.189472ac.chunk.js"},{"revision":"b80201f7cdb6a31ef3edf19d36baa801","url":"static/js/9.790e1f6e.chunk.js"},{"revision":"8b579c271357911895cadd88778c1808","url":"static/js/main.0d6de1aa.chunk.js"},{"revision":"d276bc5f4a97f94425bfb673774daae8","url":"static/js/runtime-main.25824855.js"}]);

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
