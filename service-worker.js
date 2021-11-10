if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"cfcc760708d18f507ea48ea95e81140d","url":"404.html"},{"revision":"eba97405ea752a65cb176a16c950f935","url":"9c1e8fdfd863c476c6bd.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"cfcc760708d18f507ea48ea95e81140d","url":"index.html"},{"revision":"cb9615687ee710b9cf130a8998e9faea","url":"static/css/2.6c493df4.chunk.css"},{"revision":"1d23272d3465feea3a6d8066dbff23a3","url":"static/css/20.bded3b46.chunk.css"},{"revision":"81b4b7e1667453bed1e92bc249e63c08","url":"static/css/21.0c676468.chunk.css"},{"revision":"ea3b1730dd35b5f1d55e0862c0ff30e9","url":"static/js/0.01285865.chunk.js"},{"revision":"ecc8c912b3e30b673183ed9ab6dd3812","url":"static/js/1.4f0e6d8d.chunk.js"},{"revision":"f742be4ef94af8fa7cc52892a1ded5eb","url":"static/js/12.508c6a48.chunk.js"},{"revision":"01f5d66a27f598be7799f2c8fc63256a","url":"static/js/13.cb0e643d.chunk.js"},{"revision":"ad262c0da80bec0ae0f76cc2cb056a81","url":"static/js/14.012db8bb.chunk.js"},{"revision":"d3b6eb7104f6fa19e4b331c4f76d0e8f","url":"static/js/15.c5431307.chunk.js"},{"revision":"316947c86e0554fc96c4912f713dd5ee","url":"static/js/16.6773f1c6.chunk.js"},{"revision":"d6e8054c36a62e536f7375d9f672b74e","url":"static/js/17.dcf4c803.chunk.js"},{"revision":"2eae9bf23554ec2ea49721c5dc3cc66a","url":"static/js/18.c22469cc.chunk.js"},{"revision":"eb4f52b70687aa0c260c9756d680cb92","url":"static/js/19.1cff1dff.chunk.js"},{"revision":"614315fc5e4969d44aa9d8239ee76d2e","url":"static/js/2.478006dc.chunk.js"},{"revision":"06f4af99a9c43a68cceae979e2d942b9","url":"static/js/20.06c1b27a.chunk.js"},{"revision":"56afdbb1e02c23ce74a65c86b97833cc","url":"static/js/21.fa82828b.chunk.js"},{"revision":"e39bf06370bdc7fea0a356148635b189","url":"static/js/22.17bf2008.chunk.js"},{"revision":"bf67547d304d089ad63d164d53a6c43e","url":"static/js/23.accd5e0b.chunk.js"},{"revision":"ddb091327ea3c2ea4ccd9f7f72f1a1df","url":"static/js/24.c7306dc6.chunk.js"},{"revision":"ab55c2d155a246a1aaff04a3fc32475f","url":"static/js/25.c37542c3.chunk.js"},{"revision":"24a27b2eefb331e6cda83d575f4d7761","url":"static/js/26.840bb5f2.chunk.js"},{"revision":"283245352a55f683c7af80710e29e9d0","url":"static/js/27.c87afbea.chunk.js"},{"revision":"807d0e23be32abc58e8217ef9c0db07f","url":"static/js/28.f4999e5f.chunk.js"},{"revision":"48593e831c602344b4ea7f6d9f813845","url":"static/js/29.0bca5e90.chunk.js"},{"revision":"fdf61751b55c21630eb3a023ff6f6046","url":"static/js/3.903658b8.chunk.js"},{"revision":"6863051113df26c945f3bc2a59cc5639","url":"static/js/30.89198211.chunk.js"},{"revision":"2c3aa0cd20272dee79440cb6e9d56b42","url":"static/js/31.1f7065b8.chunk.js"},{"revision":"aa2d599991afdd4649c54c1497e660fd","url":"static/js/32.73ee6f03.chunk.js"},{"revision":"69cb9fb3c518d46a464d2a3431adb4cb","url":"static/js/33.bbbfb264.chunk.js"},{"revision":"6da5fc4efc9f800f0b0c1cb601d3f4a5","url":"static/js/34.ad0883a0.chunk.js"},{"revision":"dc1638f60802df99244e8e8ab00c2f9d","url":"static/js/35.9b326b8a.chunk.js"},{"revision":"3474190b87ef12c770718a959cbc30ef","url":"static/js/36.cec2a17d.chunk.js"},{"revision":"fdc1ed58149a7bc8a94dd60afd993029","url":"static/js/37.61f28f3f.chunk.js"},{"revision":"0aae54e393d9125e4f137a0a8c3ae47a","url":"static/js/38.95256c23.chunk.js"},{"revision":"82216608845df9264e12ec9ad5f24f5a","url":"static/js/39.991c3503.chunk.js"},{"revision":"3ee5cc33115478dfd3ec5487e7021710","url":"static/js/4.fb4aaa94.chunk.js"},{"revision":"f64d98a3349edf5947c22fed0c079f67","url":"static/js/40.a4138e8a.chunk.js"},{"revision":"21432ed60290ca8bea51f049368db23b","url":"static/js/41.bbe7d46e.chunk.js"},{"revision":"9888be93b476e42b958769f891a82e60","url":"static/js/42.3db636e3.chunk.js"},{"revision":"2f322067c34815eec23cf437f31e0f51","url":"static/js/43.91e1b42c.chunk.js"},{"revision":"a56a4a421e9a0fc6de06a55aecb99567","url":"static/js/44.f841cd51.chunk.js"},{"revision":"34fef8f19ef97d0949273d39ea429501","url":"static/js/45.debce52e.chunk.js"},{"revision":"0b2e4db7b851160ba0e68930f04fd7fe","url":"static/js/46.7071c904.chunk.js"},{"revision":"ffcdffe206bd367042cc1b0f949e21d0","url":"static/js/47.32641565.chunk.js"},{"revision":"afbb004e8596804f41893660f77f388f","url":"static/js/5.f933096a.chunk.js"},{"revision":"6fa10b85536057e18308661eda07d96f","url":"static/js/6.7b837db0.chunk.js"},{"revision":"46e62622c7fc5468e2232fbad5142bb3","url":"static/js/7.5d9640d3.chunk.js"},{"revision":"71a00baf6d92eb2adba02e66968173fe","url":"static/js/8.c0fe7965.chunk.js"},{"revision":"74582f59e8b3736008b4a5f1724ecf77","url":"static/js/9.f58a5482.chunk.js"},{"revision":"bacf5295ed49350e60ff1042ccfc969f","url":"static/js/main.6353320f.chunk.js"},{"revision":"10eef7e0c581d029a2cd5b0158b010d3","url":"static/js/runtime-main.4d78d672.js"}]);

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
