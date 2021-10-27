if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"d30c3cbb80819c1851fb63c4b9bc3fdb","url":"404.html"},{"revision":"640e6bc20607c27c95aabc9a8e286894","url":"b4b1c9748bd2cad83b2b.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"d30c3cbb80819c1851fb63c4b9bc3fdb","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"6b905b5cead018caae91877ef0443588","url":"static/css/22.7347b259.chunk.css"},{"revision":"03ada91fa755124bb56a92169bfaa0ec","url":"static/js/0.2c72183f.chunk.js"},{"revision":"30b98f364ea659f09f22539b021f55fe","url":"static/js/1.cdf52472.chunk.js"},{"revision":"70a286c263e948eb988e8ebf97fdc60e","url":"static/js/12.559a191e.chunk.js"},{"revision":"93ba3c1cd5f7e9f9cdba57813f3f75c1","url":"static/js/13.83bacf1f.chunk.js"},{"revision":"3cb95812da7d3e53145ea8817423dc08","url":"static/js/14.b386861c.chunk.js"},{"revision":"107be0df0f46def07b44d1739eaa1cc9","url":"static/js/15.db3f6d91.chunk.js"},{"revision":"a131af86f25d1a136fd16999a10b649a","url":"static/js/16.28f0fb93.chunk.js"},{"revision":"7514003bd013d7d28d40d2a9b488874e","url":"static/js/17.804da65c.chunk.js"},{"revision":"5d8c467ad83c258dd0b3fef72d230cd3","url":"static/js/18.9058121f.chunk.js"},{"revision":"49da507aa920dadb66b3294a0b0adf41","url":"static/js/19.4aafd48b.chunk.js"},{"revision":"c21eea1a39a1072dab237990c75434b4","url":"static/js/2.614a42cb.chunk.js"},{"revision":"a4f9cfa708e0197efca7383bf077fade","url":"static/js/20.f21d07e6.chunk.js"},{"revision":"f545d4531d9d8c09efa8006272e383ec","url":"static/js/21.dbaa891b.chunk.js"},{"revision":"c6634db67d05bf13ea52a81c24be559d","url":"static/js/22.c541b868.chunk.js"},{"revision":"98ed4e2f56488c3cc626509f7fd9fe30","url":"static/js/23.27acdd75.chunk.js"},{"revision":"2f17c1e5f1f4504e268e1ef33e6718f6","url":"static/js/24.a4440e20.chunk.js"},{"revision":"4a90a96a2bc2701765c89a0344938a8e","url":"static/js/25.946bd430.chunk.js"},{"revision":"06efb41bbd48b567176c41574b314a14","url":"static/js/26.198d53d9.chunk.js"},{"revision":"dcc3d12b6b4e315c1769037b4af020b4","url":"static/js/27.b1a2dbc0.chunk.js"},{"revision":"153a7408c36a6e887393d25c046db5bd","url":"static/js/28.d47cda69.chunk.js"},{"revision":"5afc5b0eb0589977926c55d169dbaa69","url":"static/js/29.7a189e94.chunk.js"},{"revision":"3b4b0a155035621a5317349b9838932a","url":"static/js/3.a1d6aff2.chunk.js"},{"revision":"562d268f4b62b9fc60245ea967365b64","url":"static/js/30.40b9d79b.chunk.js"},{"revision":"58eff10823f957ef6838e41b64c7f2de","url":"static/js/31.89b3bd0a.chunk.js"},{"revision":"2f85ebf5ff8824dec1b9646ffef94cab","url":"static/js/32.df6f22eb.chunk.js"},{"revision":"45dfdf042fd1dbe95b4bf4bc09e68ea0","url":"static/js/33.dcae6f62.chunk.js"},{"revision":"0f8ab9097290e5c96b41253450e390be","url":"static/js/34.092303dd.chunk.js"},{"revision":"e653bb5e6e5d291bad90ecce2071e2f8","url":"static/js/35.a98eb3a6.chunk.js"},{"revision":"c736b6f12658c146ff73b9c077d0cdef","url":"static/js/36.f798b6a2.chunk.js"},{"revision":"df83b0c933164c90104dee4a95ed4126","url":"static/js/37.d7525c8f.chunk.js"},{"revision":"bd1e1bc4741626f81f928a284f1221bd","url":"static/js/38.0dd0ac76.chunk.js"},{"revision":"3f385fd70406ab3e0b1fa04ae7866516","url":"static/js/39.66378c33.chunk.js"},{"revision":"9113c1263ce42d4c17951449ab3548d8","url":"static/js/4.f4be6ead.chunk.js"},{"revision":"d3028a316a36b750f4c13bc2730dd8b5","url":"static/js/40.61226c81.chunk.js"},{"revision":"bfaea737f99dee67a37e4fa64bbf0a9c","url":"static/js/41.c79429f6.chunk.js"},{"revision":"4db1afa9c87d0dc557efb1783e0440a1","url":"static/js/42.816d84d5.chunk.js"},{"revision":"6bc5c4a8e0e6ba3ebee9c56b822f0a74","url":"static/js/43.5d50c77d.chunk.js"},{"revision":"8f941446050806bd495a1a33bfc03788","url":"static/js/44.8e8572be.chunk.js"},{"revision":"49df41788f11e9f971200e849bb55a32","url":"static/js/45.0a640635.chunk.js"},{"revision":"1d344333b7fda3bf74a3e5793fe7df7f","url":"static/js/46.70e4f4b5.chunk.js"},{"revision":"295c7d520d5ab9fd3ed9b29ca136843b","url":"static/js/5.52654ff6.chunk.js"},{"revision":"0ea120e1bc4b2ed2679c5c20979db9e4","url":"static/js/6.e81c419d.chunk.js"},{"revision":"aa2e3cf87e71a211b62148dd4d80c938","url":"static/js/7.93fbc081.chunk.js"},{"revision":"11333a97fe9b323eb193dcc9f4c17b30","url":"static/js/8.d02dfd86.chunk.js"},{"revision":"695634fac52c7357f33cec3545ebad11","url":"static/js/9.f8c2182f.chunk.js"},{"revision":"5a109283b59f66da11c865823345a458","url":"static/js/main.8788093d.chunk.js"},{"revision":"7649a18770980c512a37dba3c98b5810","url":"static/js/runtime-main.1fe28ae8.js"}]);

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
