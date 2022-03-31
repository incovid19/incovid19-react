if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"512341b139e340268d0a394118c894ec","url":"404.html"},{"revision":"e288ac1c440c1a4310bd8e763451e67e","url":"4190e52b2836c751e516.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"512341b139e340268d0a394118c894ec","url":"index.html"},{"revision":"48e070807d3a73a3bc7675e7816aafdc","url":"static/css/22.bded3b46.chunk.css"},{"revision":"4885d6b25fd4a579bc474068aa14e8b4","url":"static/css/23.313c38a8.chunk.css"},{"revision":"d0a5dc033a59aa85e238b76f5024d4bc","url":"static/css/3.6c493df4.chunk.css"},{"revision":"65fd7959714c73540469ffc3ff1909c7","url":"static/js/0.24383a73.chunk.js"},{"revision":"90133c2e34fe57c46f905b786fa4f65a","url":"static/js/1.e39ec854.chunk.js"},{"revision":"703b782ae3740245a3a76b9578fda871","url":"static/js/10.eaeaf7ac.chunk.js"},{"revision":"89b8ce0063f58fe9a74e466934d19f15","url":"static/js/13.59ff7811.chunk.js"},{"revision":"67943c25dfea2e270021d536a2777647","url":"static/js/14.858b219d.chunk.js"},{"revision":"5019f8fdb011d19dde4f0d578c2eef8f","url":"static/js/15.2d5df8cf.chunk.js"},{"revision":"7e5cfc913e7cf6e1e6808fa769db6eb2","url":"static/js/16.9965385e.chunk.js"},{"revision":"1f8bfb2bb3136e3e462bc4bed5156bd3","url":"static/js/17.4dcf4ad5.chunk.js"},{"revision":"abeef1b4d6c70c4830e2195156dc1c6d","url":"static/js/18.a9460e10.chunk.js"},{"revision":"e29a447457f140c4bf5abe5b17cb6d18","url":"static/js/19.37203f7a.chunk.js"},{"revision":"14b31edef8634778af0a0c16ccc475fc","url":"static/js/2.b7ec53d9.chunk.js"},{"revision":"8ee5d51307ee10c510195ab9c194f4b9","url":"static/js/20.5d0f4ba2.chunk.js"},{"revision":"c77ce6b7d050fb401cc6e3c3af9ec66e","url":"static/js/21.a1cd2878.chunk.js"},{"revision":"09e48d2387f6b7f82660a81224c46562","url":"static/js/22.5ada1f1c.chunk.js"},{"revision":"8e7ff079a8f7bdaa0c6f7cb83477873b","url":"static/js/23.def210b2.chunk.js"},{"revision":"6240beddc7db2ae366deb9742c711a61","url":"static/js/24.c50c36e7.chunk.js"},{"revision":"e5865399f8b8b9dc69cf94c13654d83d","url":"static/js/25.c217005b.chunk.js"},{"revision":"4d128c7bd57a4778717faa9901fa4429","url":"static/js/26.8e0dfc2b.chunk.js"},{"revision":"8a99e06d979a7c7ffc0b57e3dbe7187f","url":"static/js/27.5088c4fb.chunk.js"},{"revision":"b46741da3831f93bd4bea29edf37ae19","url":"static/js/28.8d278f69.chunk.js"},{"revision":"c93f3c89680cb2ce432071b858100688","url":"static/js/29.f1e6f189.chunk.js"},{"revision":"798151234f0fa07dfee2fd450afa4956","url":"static/js/3.23ed40c7.chunk.js"},{"revision":"99fc96d4708a242b900f60368b2d4d37","url":"static/js/30.40a0d9af.chunk.js"},{"revision":"4d98f547ced20c7febbefbaa0cbc752a","url":"static/js/31.4976673a.chunk.js"},{"revision":"a14e00e3a85f0f3e9e8b5547c09c79c3","url":"static/js/32.b457afef.chunk.js"},{"revision":"e41d50830b09750f64dfe325f8f676bb","url":"static/js/33.5888d4fe.chunk.js"},{"revision":"330baad7091e457db5e3bd2c2faf3e35","url":"static/js/34.90d0d307.chunk.js"},{"revision":"4bcc607439dd011764c25d81a602040c","url":"static/js/35.6e9ccf70.chunk.js"},{"revision":"205ac6b5c8da143d57136eff40e2b39c","url":"static/js/36.c1417546.chunk.js"},{"revision":"6b1cce1a317dede8a1cdf47175ba4c2b","url":"static/js/37.f71714a1.chunk.js"},{"revision":"0f779a661d21770248a50dfcf66d79aa","url":"static/js/38.8e7bfc2e.chunk.js"},{"revision":"fff84dd85d6f4b8cca655e685dc4adaf","url":"static/js/39.09e96867.chunk.js"},{"revision":"216c07b64504bc5b9ad91acc4b5f1831","url":"static/js/4.b6e88d76.chunk.js"},{"revision":"2d4c608c3d9ea4c407f2560320800438","url":"static/js/40.1f519880.chunk.js"},{"revision":"4c96237be92f8469d4af08d33186cac7","url":"static/js/41.d67d2570.chunk.js"},{"revision":"7b30f41fe2a29780fccd91620a88ebbe","url":"static/js/42.ba2c5e22.chunk.js"},{"revision":"7859f57329c12198eac991741e19a55b","url":"static/js/43.ec350a43.chunk.js"},{"revision":"01f5bca8727a6c6871e4ba7644fa28e1","url":"static/js/44.6fa9e25b.chunk.js"},{"revision":"593a413481c9ee6f0aae662dadcb0e63","url":"static/js/45.0056c130.chunk.js"},{"revision":"eeaa28cf5033e386c9088212d5a0583f","url":"static/js/46.a23c3ff2.chunk.js"},{"revision":"2164cb98301a3e19f4ece1086cb4b032","url":"static/js/47.1204ec0c.chunk.js"},{"revision":"87fc66f4ab1260088609b75c4f6c61fb","url":"static/js/48.9cbeee67.chunk.js"},{"revision":"0645649f8266d2e1e7333b35b85b03a5","url":"static/js/5.bcc30aca.chunk.js"},{"revision":"a12e196087f0de8e5ce058c8de9c9116","url":"static/js/6.51a20310.chunk.js"},{"revision":"9598b2ce88ff3fe2d1ad5bb8fe54e5d8","url":"static/js/7.b710bb5e.chunk.js"},{"revision":"19f5f22f27722165f01b64540e7d58af","url":"static/js/8.3bbcb140.chunk.js"},{"revision":"ba97a8b96e02f384dbac231068348bd8","url":"static/js/9.57ef544f.chunk.js"},{"revision":"97f0c1736403562b8d52001425f6cede","url":"static/js/main.0ab75777.chunk.js"},{"revision":"7c7bd7225936aff04dd2580299fe2e4d","url":"static/js/runtime-main.9d169a35.js"}]);

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
