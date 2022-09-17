if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"a485660f01952965c301bd94bac49959","url":"404.html"},{"revision":"e288ac1c440c1a4310bd8e763451e67e","url":"4190e52b2836c751e516.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"a485660f01952965c301bd94bac49959","url":"index.html"},{"revision":"48e070807d3a73a3bc7675e7816aafdc","url":"static/css/22.bded3b46.chunk.css"},{"revision":"04db6bb08c2dcb2832c5b6661f0a8ec4","url":"static/css/23.ca288aa9.chunk.css"},{"revision":"d0a5dc033a59aa85e238b76f5024d4bc","url":"static/css/3.6c493df4.chunk.css"},{"revision":"443da734b7d2d743bdee2acf23f4fb50","url":"static/js/0.a99728ac.chunk.js"},{"revision":"a4689b97dacf6d5219f661632979f7e5","url":"static/js/1.30217026.chunk.js"},{"revision":"9dd761187031ffb6f7425eeb6607a446","url":"static/js/10.300988d8.chunk.js"},{"revision":"d692ed2a3491a2132383584c6c277e82","url":"static/js/13.5d19aed3.chunk.js"},{"revision":"fffb3dde2553d9f3be30f6417274ab27","url":"static/js/14.48ab271f.chunk.js"},{"revision":"8cb539029cf30479f60b4e42b404f743","url":"static/js/15.58f638bb.chunk.js"},{"revision":"98de95751af7866cd67243d4a278940f","url":"static/js/16.961ed1dc.chunk.js"},{"revision":"fc2d38e74b628bb0b360d3add56c26b8","url":"static/js/17.2cec7d4e.chunk.js"},{"revision":"5692dcac89206884a579a1d9c44e7d44","url":"static/js/18.24881428.chunk.js"},{"revision":"a92f0b79122ae856e4dd6fed2f0d9dc8","url":"static/js/19.3c68e50e.chunk.js"},{"revision":"c15314ade67cc5957fef0fc3d6db321a","url":"static/js/2.f3bc674e.chunk.js"},{"revision":"89d64e394d7fdcb2c26080fc8c28845c","url":"static/js/20.4d542c7a.chunk.js"},{"revision":"29e6f8fc21ee0af81fd6e41ced26044e","url":"static/js/21.e0e49669.chunk.js"},{"revision":"784051a9b100221c7990e01f99f9c932","url":"static/js/22.9efa4c86.chunk.js"},{"revision":"af1a607aaad42c04bef3b40ce2d7d705","url":"static/js/23.9ff00732.chunk.js"},{"revision":"eb73ffa8e6503f0eec811a009eedb81e","url":"static/js/24.1a03ecb0.chunk.js"},{"revision":"2a98202c7c8c548dbf6de8238c0af8ee","url":"static/js/25.f9de7868.chunk.js"},{"revision":"99ca149ca8812bec72d06a25479bd240","url":"static/js/26.4b98c000.chunk.js"},{"revision":"4e4e157ea5ca9e5ec0b74503e2793528","url":"static/js/27.d35934c2.chunk.js"},{"revision":"224fd8c913907141c728909fa2208798","url":"static/js/28.6cab065a.chunk.js"},{"revision":"14339831f76fb956ec6297d229bda3a4","url":"static/js/29.2fa5ddd2.chunk.js"},{"revision":"798151234f0fa07dfee2fd450afa4956","url":"static/js/3.23ed40c7.chunk.js"},{"revision":"1a4f20decf28021404997844b8f2eb8b","url":"static/js/30.28ca8041.chunk.js"},{"revision":"729fa41c221a994f4bf6a6b7a4af9ae3","url":"static/js/31.2ed95e64.chunk.js"},{"revision":"f8b5701cb743fced84d25832f57a2506","url":"static/js/32.515c74fa.chunk.js"},{"revision":"4943e389103eef3ace701f4d5322b28e","url":"static/js/33.03d3cdcb.chunk.js"},{"revision":"5f8852ad395ae173fdc1d8fa9e977976","url":"static/js/34.0a2a58bf.chunk.js"},{"revision":"5acff0a505c5cf2ad78dd236c8bc45c6","url":"static/js/35.66220b12.chunk.js"},{"revision":"e4f8a2e1fe24cb48f9da7a9be76ac4f3","url":"static/js/36.e5b450c6.chunk.js"},{"revision":"1a789e36647c9740fb2e1a32c3b651ac","url":"static/js/37.305f04fe.chunk.js"},{"revision":"b0b01f96b5f57d217cc5cf85d83ff8c3","url":"static/js/38.47c0a8a8.chunk.js"},{"revision":"568d73ca42a8d4ee0e44672a71f4fb80","url":"static/js/39.9874b516.chunk.js"},{"revision":"c28350af45168c3918b43b9a73220f40","url":"static/js/4.9740f008.chunk.js"},{"revision":"86a60b41c7a53367e659342c8180f025","url":"static/js/40.5df326c2.chunk.js"},{"revision":"f8a3a10b14df7409f143f287f64ed870","url":"static/js/41.bd571a8e.chunk.js"},{"revision":"1b3523bea92e313a3d2aa4e7772923db","url":"static/js/42.23f9ac0a.chunk.js"},{"revision":"d991a898dea34522d4aeadd26623b2c0","url":"static/js/43.23cf21d0.chunk.js"},{"revision":"dfb5527f63752582f94a4e2b01024788","url":"static/js/44.8c86f2dd.chunk.js"},{"revision":"739cbe28113f1ac0dd7f7bf925ee1412","url":"static/js/45.6aa44093.chunk.js"},{"revision":"d3e0f6707d9c1ea29a0b06e62c44d889","url":"static/js/46.602e9f00.chunk.js"},{"revision":"dfee20549eda38971a38da2c731b6ca2","url":"static/js/47.f100de3f.chunk.js"},{"revision":"a4cec9e1867a5a0b90dc710ce5d3c273","url":"static/js/48.ab396e29.chunk.js"},{"revision":"76d04b3c04f99fc3608d0d367a0f4961","url":"static/js/49.a479859e.chunk.js"},{"revision":"b716f5f9174c5f71fba445ed550349c2","url":"static/js/5.45494229.chunk.js"},{"revision":"a12e196087f0de8e5ce058c8de9c9116","url":"static/js/6.51a20310.chunk.js"},{"revision":"72989cba60d8299269efdb44465f447e","url":"static/js/7.35c4d25a.chunk.js"},{"revision":"2778d1df4e1254899253b6da66f9095a","url":"static/js/8.484fe03b.chunk.js"},{"revision":"5a594fe69b74a9d07caff811959b9472","url":"static/js/9.4f62a8e8.chunk.js"},{"revision":"f9fe618fe88d057d305e97a842415982","url":"static/js/main.951a0527.chunk.js"},{"revision":"ea16a7261a63968a0470a2fe5048a5d1","url":"static/js/runtime-main.097f85ee.js"}]);

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
