if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"0ce2ec82c198dcaf03bbee30d5b01a76","url":"404.html"},{"revision":"eba97405ea752a65cb176a16c950f935","url":"9c1e8fdfd863c476c6bd.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"0ce2ec82c198dcaf03bbee30d5b01a76","url":"index.html"},{"revision":"cb9615687ee710b9cf130a8998e9faea","url":"static/css/2.6c493df4.chunk.css"},{"revision":"1d23272d3465feea3a6d8066dbff23a3","url":"static/css/20.bded3b46.chunk.css"},{"revision":"e3ba2c76406bc1efdef9b126ee270520","url":"static/css/21.b6f6da28.chunk.css"},{"revision":"ea3b1730dd35b5f1d55e0862c0ff30e9","url":"static/js/0.01285865.chunk.js"},{"revision":"5666f61d8470c7479e3c7a6dd4d3ca93","url":"static/js/1.8f1cd3d7.chunk.js"},{"revision":"f742be4ef94af8fa7cc52892a1ded5eb","url":"static/js/12.508c6a48.chunk.js"},{"revision":"b8251ba7999ec3f541c0eaa9f1575fa6","url":"static/js/13.1e31b42b.chunk.js"},{"revision":"99473b93c3785abf97b2d89b2727ed49","url":"static/js/14.1049ad21.chunk.js"},{"revision":"93ec3bfba86019f7e8007dbcfe29d5a5","url":"static/js/15.051a7aaa.chunk.js"},{"revision":"70e1c85123f27911051b137368a933de","url":"static/js/16.7bd99825.chunk.js"},{"revision":"621dbbc86e0737fdaaedec816b3bba88","url":"static/js/17.3763a619.chunk.js"},{"revision":"990bf46d7884dc729ffaead7024609a8","url":"static/js/18.ef88abfc.chunk.js"},{"revision":"92b8d8bf21ca99bd1dc4c89c89c83121","url":"static/js/19.48d1359d.chunk.js"},{"revision":"614315fc5e4969d44aa9d8239ee76d2e","url":"static/js/2.478006dc.chunk.js"},{"revision":"5d99cf302438c0c5d0d66556bd21b6fe","url":"static/js/20.17c47776.chunk.js"},{"revision":"9c43d27c64f1778fe8140ec397c9732a","url":"static/js/21.88bacd88.chunk.js"},{"revision":"118e39019b8de60cde4e790562df91b0","url":"static/js/22.41ed5e59.chunk.js"},{"revision":"709dd69329bf6be78917bdf275cf73f2","url":"static/js/23.20607b53.chunk.js"},{"revision":"5c8ec22dab14f8af1b59aa89b17a9c47","url":"static/js/24.aceade9e.chunk.js"},{"revision":"1df010067dd330cd34ada3631f292e6c","url":"static/js/25.aa0c39d9.chunk.js"},{"revision":"33f13b5ced7d2274c5c46114188063ba","url":"static/js/26.d14b8051.chunk.js"},{"revision":"4e984172c8c6c5315cf5941d0f8d1def","url":"static/js/27.33ce5416.chunk.js"},{"revision":"15e72bbd56dc0545aee5d43f833d967f","url":"static/js/28.f571b840.chunk.js"},{"revision":"67b467b4069221eac26d72baedd423f6","url":"static/js/29.d7b045c6.chunk.js"},{"revision":"085ad359d920e92813a962c5137d65d4","url":"static/js/3.3cad6091.chunk.js"},{"revision":"aa282a44f8e4eb5e4770d70e6cf21ce4","url":"static/js/30.6b2821f1.chunk.js"},{"revision":"3126194046bf4788d6bf79e0eaf99e5e","url":"static/js/31.9cdca500.chunk.js"},{"revision":"e6db8a20be93c14685fdff269a2088ac","url":"static/js/32.39a027a0.chunk.js"},{"revision":"e536f368d6e002fc3ade9d8133e072d5","url":"static/js/33.f8161b7a.chunk.js"},{"revision":"8ffa14f90d7ebb12a238f158cdc63632","url":"static/js/34.e90d4965.chunk.js"},{"revision":"3139d59796a6173b50a79bdcb2202427","url":"static/js/35.50a18a31.chunk.js"},{"revision":"e0aefabfc90b73eba35d5e9fbe2b3094","url":"static/js/36.efb19f4f.chunk.js"},{"revision":"d9789775b7f4c1a858b05a5c4cdb63d0","url":"static/js/37.56f8d755.chunk.js"},{"revision":"dd5dc663a61f7c812fe2da3e0868a062","url":"static/js/38.29c207dd.chunk.js"},{"revision":"242d55014f8fc1470420f89a5c71a47e","url":"static/js/39.df255012.chunk.js"},{"revision":"9b245a6c9861ff768a67a4d1c968dd14","url":"static/js/4.2edbbf20.chunk.js"},{"revision":"fe96ab303ba6f7c78c879d6a5be27690","url":"static/js/40.6f537626.chunk.js"},{"revision":"3ca189e89238352a70ed1e134a15f4f6","url":"static/js/41.f498eeea.chunk.js"},{"revision":"1a9fc118716f8d2b67526c38e175df02","url":"static/js/42.bb87795c.chunk.js"},{"revision":"d2df5bb5261872a98495b0fa0d865bd0","url":"static/js/43.f0279487.chunk.js"},{"revision":"ed3d151320d2f08af40432be133a130b","url":"static/js/44.a96e06a1.chunk.js"},{"revision":"96278bb59e9e5b20edf4a61f5ea4a2a3","url":"static/js/45.97c6db78.chunk.js"},{"revision":"52fc851c25861ed65a67147015bf7241","url":"static/js/46.8c97a58e.chunk.js"},{"revision":"b050bbc05ec0b785c57c08b0ecd88819","url":"static/js/47.332db938.chunk.js"},{"revision":"87fc66f4ab1260088609b75c4f6c61fb","url":"static/js/48.9cbeee67.chunk.js"},{"revision":"662613c0d3d913579ecd87d2b59bbc08","url":"static/js/5.fe38608f.chunk.js"},{"revision":"fa1352e2926194decd53923f0ed186ed","url":"static/js/6.9bbeaf11.chunk.js"},{"revision":"5ff06993121ab31ac1f474fe8b3de827","url":"static/js/7.5ae5025c.chunk.js"},{"revision":"0293b0ad9499e8e71cc46c36d6793cc9","url":"static/js/8.c4e28d3d.chunk.js"},{"revision":"7fede215adc9e9d4dd3a0792085e44e5","url":"static/js/9.b8e8a057.chunk.js"},{"revision":"ff9873f3ea5855cdd517dd6ec4502d65","url":"static/js/main.754c8599.chunk.js"},{"revision":"9a931a3c51afbaa7e1c6d0d9d682c99a","url":"static/js/runtime-main.1b81c483.js"}]);

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
