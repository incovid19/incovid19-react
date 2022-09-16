if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"5f30ae62361583fb797df6690689e069","url":"404.html"},{"revision":"cb28d6aeb439fd6b3211ec0606be09f7","url":"98c45929971ca7637598.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"5f30ae62361583fb797df6690689e069","url":"index.html"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"fb510644932de2a66e78444727b24ba2","url":"static/css/23.bf96db84.chunk.css"},{"revision":"ce3aec4c9c8ce12b4516e2279b43ea4b","url":"static/css/3.1432c553.chunk.css"},{"revision":"3ddd4d5ca9d3ac735d570b24d9687505","url":"static/js/0.753027af.chunk.js"},{"revision":"b87aed1b6a8afec034b50dfa01ea288b","url":"static/js/1.154f6557.chunk.js"},{"revision":"78a02bd9b55e79e345a5d3b4046bd84f","url":"static/js/10.56ee89b8.chunk.js"},{"revision":"cd5f0300187d68419db382cb9eb126b2","url":"static/js/13.0281b272.chunk.js"},{"revision":"c0b0265296708b51adb4926ce73a8e19","url":"static/js/14.a111c0c9.chunk.js"},{"revision":"418a27aad520184a077293fcdc6aa80c","url":"static/js/15.55715a3f.chunk.js"},{"revision":"b30237714f731285d585149a6e32f2b3","url":"static/js/16.c5c68b67.chunk.js"},{"revision":"048a31250389de9714f239c944a216b3","url":"static/js/17.0c8d6bef.chunk.js"},{"revision":"2fd0652369f8764ae4860cad8193c423","url":"static/js/18.c3369d9f.chunk.js"},{"revision":"b1d77b8c05c59a31c053f370d58a29af","url":"static/js/19.ecdfc1ef.chunk.js"},{"revision":"473647d494ee54c1ebd1ab8c9d0fd0b1","url":"static/js/2.69e30ebe.chunk.js"},{"revision":"08fceae62bfca20e3e5a57a6136d3c47","url":"static/js/20.9ab7ba5b.chunk.js"},{"revision":"ba3e06c38bb5f035b8584fefe797b766","url":"static/js/21.5a13d496.chunk.js"},{"revision":"ef21848b5e6cb629ae9101e2624e3942","url":"static/js/22.ae1838d9.chunk.js"},{"revision":"f4fa46e3c90327cc21f6c56f76923810","url":"static/js/23.b644076f.chunk.js"},{"revision":"c2e0c3d65148fb1fd7252af14752f518","url":"static/js/24.21557d8e.chunk.js"},{"revision":"ff2256452d32eac6e34b18de8859ac4b","url":"static/js/25.ec83e234.chunk.js"},{"revision":"c1f16ad723b35536c5002af1496da26b","url":"static/js/26.cf572442.chunk.js"},{"revision":"702b312f2e6d07995d13793d4e2d9303","url":"static/js/27.283a8e38.chunk.js"},{"revision":"40fc2605ceed422b246a7c23283a7cac","url":"static/js/28.198ef9f2.chunk.js"},{"revision":"d9985eb6d31c0015c49a650881eba6a3","url":"static/js/29.73cece17.chunk.js"},{"revision":"58daba733d5d96b8ecc548252bb953b5","url":"static/js/3.a0037b6d.chunk.js"},{"revision":"6107e4be3497856cb4797d4b0a683138","url":"static/js/30.a3d612e5.chunk.js"},{"revision":"25ef23c384601fd278090e62d11f70eb","url":"static/js/31.db492da7.chunk.js"},{"revision":"a3499760f10321e8143ab03a10a66f30","url":"static/js/32.a18538b9.chunk.js"},{"revision":"f900e44e52742d705ea848adfb147172","url":"static/js/33.af428dbf.chunk.js"},{"revision":"0552f8ec9c6431fd2fd0031c88541aac","url":"static/js/34.fe40ab5d.chunk.js"},{"revision":"60b5de8791ac805477fd5a274e4df408","url":"static/js/35.f8f7a165.chunk.js"},{"revision":"317f5fbca522e9f6b2af18d06def3067","url":"static/js/36.9067efa5.chunk.js"},{"revision":"f6dc68ec665f0bf3276a18c549a00d6c","url":"static/js/37.e153fe87.chunk.js"},{"revision":"3ce6e2a9892cc1de8e64595e214538a5","url":"static/js/38.dc3a5885.chunk.js"},{"revision":"4661ae338fb7d0c82af64241b35e7756","url":"static/js/39.b9063ae9.chunk.js"},{"revision":"87fedf9873e36effc4fc56705bfe877f","url":"static/js/4.891b315c.chunk.js"},{"revision":"0dda766424faacf95771fc1329a2aedc","url":"static/js/40.95ff6615.chunk.js"},{"revision":"7fc85e97d29012070ed33ce799779c90","url":"static/js/41.4fde1f92.chunk.js"},{"revision":"0d9afeae07e0a337157ae63bc76d13f7","url":"static/js/42.5849be0c.chunk.js"},{"revision":"beb4ef3f2c71279725fd194edea7666d","url":"static/js/43.256e0a7f.chunk.js"},{"revision":"e25b6424bae8a0e5ba9183ae550a4c5f","url":"static/js/44.77abf6ca.chunk.js"},{"revision":"dbf128f7521e982d5e916298227ea3a0","url":"static/js/45.147b23af.chunk.js"},{"revision":"f93208ff8f21a85ac09635efcbb50c09","url":"static/js/46.8e7023da.chunk.js"},{"revision":"08d1ac27c9231b81adade979ee993e8e","url":"static/js/47.d9104830.chunk.js"},{"revision":"16aa374c4eae9ff69d4c2fb9e2ebd1a6","url":"static/js/48.7854d132.chunk.js"},{"revision":"97e9808b9591940c4b99b1bb2b492fe3","url":"static/js/5.7bf60f53.chunk.js"},{"revision":"1bb7d4f834fc328f301d08695a2aeea1","url":"static/js/6.f65b64dd.chunk.js"},{"revision":"318f41abe9ae4456a6d8b0ab9de8a71d","url":"static/js/7.527c94e8.chunk.js"},{"revision":"e819ee9a1bda46086703410c803f6440","url":"static/js/8.1116fd1d.chunk.js"},{"revision":"363cf2578dbd4b253f4b4a1679d00b07","url":"static/js/9.f443842e.chunk.js"},{"revision":"95baaa39348d6a72a9e6c9e22e9cd345","url":"static/js/main.8a48288d.chunk.js"},{"revision":"64958e8ed818820b6e8a5b2bbc8b1669","url":"static/js/runtime-main.6aefddeb.js"}]);

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
