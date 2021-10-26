if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"dc19296b1dffc99042d5066ed9d0cbe7","url":"404.html"},{"revision":"640e6bc20607c27c95aabc9a8e286894","url":"b4b1c9748bd2cad83b2b.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"dc19296b1dffc99042d5066ed9d0cbe7","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"ee193d41615fb8cf1732f6191cb78d96","url":"static/css/22.f5f9d973.chunk.css"},{"revision":"f521845e5f42547c7633f208c18c815a","url":"static/css/23.b1ee63fa.chunk.css"},{"revision":"85f44499c3d52ebd6256ee53982ddf27","url":"static/js/0.6b6d08a1.chunk.js"},{"revision":"69d8542dcd9ccde6a22ec43a4666aa6e","url":"static/js/1.13882fb0.chunk.js"},{"revision":"70a286c263e948eb988e8ebf97fdc60e","url":"static/js/12.559a191e.chunk.js"},{"revision":"e5b3ffdf79911a6fb4587e0099f13c81","url":"static/js/13.349a8cbb.chunk.js"},{"revision":"c2ed5ba803149f4e4d9eae23632b3b60","url":"static/js/14.d23c9bf9.chunk.js"},{"revision":"179234bee36e82e4c97a5b328986efa2","url":"static/js/15.11baf435.chunk.js"},{"revision":"3411fb31727a3a23a65261a8f0748612","url":"static/js/16.d774837e.chunk.js"},{"revision":"e65bcac8615ace7e6ba7d8dac37a51fd","url":"static/js/17.0b025c2d.chunk.js"},{"revision":"97b9b926a105335551032e6dc655ec8e","url":"static/js/18.079df6da.chunk.js"},{"revision":"97743f2a969927c6bf236abb5196ca65","url":"static/js/19.e114027e.chunk.js"},{"revision":"464802be71d3be5af9db3fde3ef3d146","url":"static/js/2.d55e79df.chunk.js"},{"revision":"7b3faf83cec25041ff26e8df1dbce3aa","url":"static/js/20.f05a80cd.chunk.js"},{"revision":"7cc9682bb64a90f039b8e7038eb80bbf","url":"static/js/21.eee1a559.chunk.js"},{"revision":"a0077e0866baf36b4ce75b07a5b5901d","url":"static/js/22.95e3b5f4.chunk.js"},{"revision":"b6aed0efa5b85705f8148136e7f4670e","url":"static/js/23.5133ccb4.chunk.js"},{"revision":"ad81095f60f15ccb4acf8f917f0edf4b","url":"static/js/24.b53fdaa2.chunk.js"},{"revision":"4fa6b350a613af59351ab580607d3aea","url":"static/js/25.cdf15f9e.chunk.js"},{"revision":"f0e3d5e63ceb44c725ca7faed86175a0","url":"static/js/26.837c5d2a.chunk.js"},{"revision":"d5a6c9ff2a49a1c6f4c6ee23916b35ec","url":"static/js/27.3a65cb4d.chunk.js"},{"revision":"65f60a9bedd6ddb9efb2ca85db93c08d","url":"static/js/28.650db539.chunk.js"},{"revision":"c9131e367269c436b9930b09aebf2576","url":"static/js/29.df6aa8a2.chunk.js"},{"revision":"5f1415acd985ee2c5b59189edc2e093a","url":"static/js/3.c3eb2e7b.chunk.js"},{"revision":"38d2a891e850943e2d24fa9e0f1eed56","url":"static/js/30.754d3234.chunk.js"},{"revision":"f66723b7f3e47887cec2418f8cbc7a29","url":"static/js/31.9b665138.chunk.js"},{"revision":"5aa3cd59cf3927af9fc4b8e9be00a904","url":"static/js/32.64dd80ab.chunk.js"},{"revision":"0897028d81883a2eda3bf582446f1951","url":"static/js/33.7e86ff32.chunk.js"},{"revision":"67f56d18a4b00d34f8ca55b441c89725","url":"static/js/34.9868da0b.chunk.js"},{"revision":"2103d573619a4090f0ec7f5a6a06d74b","url":"static/js/35.39f4c5dc.chunk.js"},{"revision":"de3a18dce5e22a965e76c83d0ad68819","url":"static/js/36.b5885cc2.chunk.js"},{"revision":"742cfc9f5b382b4ebc30d483ad587875","url":"static/js/37.7b409a87.chunk.js"},{"revision":"a1abb6ccd12a89fc4907648678f16b39","url":"static/js/38.020f572d.chunk.js"},{"revision":"480bdf8c47b159759b32f48721b1f944","url":"static/js/39.4f1540b2.chunk.js"},{"revision":"022e1a18a35cfe5dff9f62ba5a201219","url":"static/js/4.61714e0a.chunk.js"},{"revision":"5d8ff0109ea7ef9f5484e167251ff74b","url":"static/js/40.94dd472d.chunk.js"},{"revision":"3e13c7d97dfbe46161289ab5408e773d","url":"static/js/41.6d6c0826.chunk.js"},{"revision":"998530af4dd73be28d3459f3ae780bc6","url":"static/js/42.94aa1515.chunk.js"},{"revision":"4fa7d5416642a8d46bb870e163dc5735","url":"static/js/43.8f7c1d13.chunk.js"},{"revision":"d1a4b8da28fd24cc79943aa8dcbd62b6","url":"static/js/44.66b14bd6.chunk.js"},{"revision":"bd522469f98028889eabf5c27b457a39","url":"static/js/45.308a62e0.chunk.js"},{"revision":"3b2454e6ee11f618a0532f6089e418b0","url":"static/js/46.ba2bf5dc.chunk.js"},{"revision":"b7747b804074319f3513f214dc443822","url":"static/js/47.19214adf.chunk.js"},{"revision":"295c7d520d5ab9fd3ed9b29ca136843b","url":"static/js/5.52654ff6.chunk.js"},{"revision":"9b917a41767314aa5b3a7c093821c136","url":"static/js/6.dda6c368.chunk.js"},{"revision":"7883b8d269844983af445fec8e24295f","url":"static/js/7.ad0cd23d.chunk.js"},{"revision":"a34c4be7b3437d19e69cf6ab32450163","url":"static/js/8.189472ac.chunk.js"},{"revision":"efafc2977cc23ae14ba7378a76d5ff0c","url":"static/js/9.cd5e9c8f.chunk.js"},{"revision":"c710aa30f4de7c15661b7e6b362b71b6","url":"static/js/main.df25fdf6.chunk.js"},{"revision":"ebed0a6102360732addf79d320dc1a25","url":"static/js/runtime-main.b55a2513.js"}]);

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
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
