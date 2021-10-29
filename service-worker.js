if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"98f7f13b16f4fcf5e33aab0541378dd8","url":"404.html"},{"revision":"640e6bc20607c27c95aabc9a8e286894","url":"b4b1c9748bd2cad83b2b.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"98f7f13b16f4fcf5e33aab0541378dd8","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"c1327559dc804d14e80e20d834e40b60","url":"static/css/22.aba9979c.chunk.css"},{"revision":"03ada91fa755124bb56a92169bfaa0ec","url":"static/js/0.2c72183f.chunk.js"},{"revision":"d94237526af77210b8d1e73c5a6132f2","url":"static/js/1.b498d3e6.chunk.js"},{"revision":"70a286c263e948eb988e8ebf97fdc60e","url":"static/js/12.559a191e.chunk.js"},{"revision":"1cb15f8cf73b02287e5b1fb7be5436ad","url":"static/js/13.41bceaf4.chunk.js"},{"revision":"caf208ef866d4727d3dde82b38e71acc","url":"static/js/14.24635c14.chunk.js"},{"revision":"107be0df0f46def07b44d1739eaa1cc9","url":"static/js/15.db3f6d91.chunk.js"},{"revision":"a131af86f25d1a136fd16999a10b649a","url":"static/js/16.28f0fb93.chunk.js"},{"revision":"9941baee04a432ef74347f5b398257d8","url":"static/js/17.4da3adab.chunk.js"},{"revision":"6f163f69e6ae4a70259802a0089e0b66","url":"static/js/18.cbccb1f0.chunk.js"},{"revision":"53431916f6b3006b72fb3626b4bd7bcc","url":"static/js/19.3a81dbb9.chunk.js"},{"revision":"c21eea1a39a1072dab237990c75434b4","url":"static/js/2.614a42cb.chunk.js"},{"revision":"5241ecddeaafe71ec463c61caceb21dc","url":"static/js/20.e0ee6a93.chunk.js"},{"revision":"f545d4531d9d8c09efa8006272e383ec","url":"static/js/21.dbaa891b.chunk.js"},{"revision":"c6634db67d05bf13ea52a81c24be559d","url":"static/js/22.c541b868.chunk.js"},{"revision":"85ab1aaaf636dc97404e2aaf9f1815b5","url":"static/js/23.07fcaeda.chunk.js"},{"revision":"2f17c1e5f1f4504e268e1ef33e6718f6","url":"static/js/24.a4440e20.chunk.js"},{"revision":"6a4250d96eabe4b2ac0cce3e57cdf90b","url":"static/js/25.c4d1312a.chunk.js"},{"revision":"66fd3a587210101a3153835c70dddf69","url":"static/js/26.cd3d12b4.chunk.js"},{"revision":"dcc3d12b6b4e315c1769037b4af020b4","url":"static/js/27.b1a2dbc0.chunk.js"},{"revision":"7b52f98f2564d1be7e091fa6f604aa4c","url":"static/js/28.c0d2e1f0.chunk.js"},{"revision":"5afc5b0eb0589977926c55d169dbaa69","url":"static/js/29.7a189e94.chunk.js"},{"revision":"3b4b0a155035621a5317349b9838932a","url":"static/js/3.a1d6aff2.chunk.js"},{"revision":"562d268f4b62b9fc60245ea967365b64","url":"static/js/30.40b9d79b.chunk.js"},{"revision":"05c2ccb04478274fad4e28e59e88726d","url":"static/js/31.1a095804.chunk.js"},{"revision":"ba061afaf501eab03f4fd18650ba216e","url":"static/js/32.cda2c673.chunk.js"},{"revision":"45dfdf042fd1dbe95b4bf4bc09e68ea0","url":"static/js/33.dcae6f62.chunk.js"},{"revision":"0f8ab9097290e5c96b41253450e390be","url":"static/js/34.092303dd.chunk.js"},{"revision":"e653bb5e6e5d291bad90ecce2071e2f8","url":"static/js/35.a98eb3a6.chunk.js"},{"revision":"c736b6f12658c146ff73b9c077d0cdef","url":"static/js/36.f798b6a2.chunk.js"},{"revision":"df83b0c933164c90104dee4a95ed4126","url":"static/js/37.d7525c8f.chunk.js"},{"revision":"bd1e1bc4741626f81f928a284f1221bd","url":"static/js/38.0dd0ac76.chunk.js"},{"revision":"3f385fd70406ab3e0b1fa04ae7866516","url":"static/js/39.66378c33.chunk.js"},{"revision":"9113c1263ce42d4c17951449ab3548d8","url":"static/js/4.f4be6ead.chunk.js"},{"revision":"d3028a316a36b750f4c13bc2730dd8b5","url":"static/js/40.61226c81.chunk.js"},{"revision":"bfaea737f99dee67a37e4fa64bbf0a9c","url":"static/js/41.c79429f6.chunk.js"},{"revision":"094944e853535f25f71066e47a048671","url":"static/js/42.ad29b20a.chunk.js"},{"revision":"6bc5c4a8e0e6ba3ebee9c56b822f0a74","url":"static/js/43.5d50c77d.chunk.js"},{"revision":"2e1a650aff42dc5207346e5ea415ee27","url":"static/js/44.837a94b6.chunk.js"},{"revision":"49df41788f11e9f971200e849bb55a32","url":"static/js/45.0a640635.chunk.js"},{"revision":"1d344333b7fda3bf74a3e5793fe7df7f","url":"static/js/46.70e4f4b5.chunk.js"},{"revision":"295c7d520d5ab9fd3ed9b29ca136843b","url":"static/js/5.52654ff6.chunk.js"},{"revision":"81f12764ed4b30fe8cfa3f376839986b","url":"static/js/6.8f4f9fc9.chunk.js"},{"revision":"aa2e3cf87e71a211b62148dd4d80c938","url":"static/js/7.93fbc081.chunk.js"},{"revision":"840d3d8af87bea7fe6e5daa171adbd3d","url":"static/js/8.fc77a01c.chunk.js"},{"revision":"695634fac52c7357f33cec3545ebad11","url":"static/js/9.f8c2182f.chunk.js"},{"revision":"5a109283b59f66da11c865823345a458","url":"static/js/main.8788093d.chunk.js"},{"revision":"17c156a1bdd9524eeb795d677e7e6f34","url":"static/js/runtime-main.8dd128dd.js"}]);

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
