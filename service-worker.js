if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"8f90387ee8e477c59535b4d85fa46b45","url":"404.html"},{"revision":"3dbd7dbd868d44d5bab36f8ac51ea308","url":"9347b090841fe52298e5.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"8f90387ee8e477c59535b4d85fa46b45","url":"index.html"},{"revision":"a66872bead1f894a79ea2488187e8ff2","url":"static/css/20.f5f9d973.chunk.css"},{"revision":"a1f5e14da36e6095e34815abe65d8b20","url":"static/css/22.f2d25b90.chunk.css"},{"revision":"ce3aec4c9c8ce12b4516e2279b43ea4b","url":"static/css/3.1432c553.chunk.css"},{"revision":"3d0130ea8efd2561a6192c71f3757dab","url":"static/js/0.6f89c99d.chunk.js"},{"revision":"48152d36d29014a1fabf06c7946c8acf","url":"static/js/1.94265561.chunk.js"},{"revision":"ef5fffbce481b04a3abea1bc06f25928","url":"static/js/12.e7d02ff7.chunk.js"},{"revision":"84a4eb6b3a37da86160603b3fdf4251a","url":"static/js/13.be2f29b1.chunk.js"},{"revision":"86d7a0f33cdde7b62663cb37591514b5","url":"static/js/14.dc5ea860.chunk.js"},{"revision":"7612619604d63e3c0e000042bfbca955","url":"static/js/15.012d5645.chunk.js"},{"revision":"40ee7226881734de9331c65bd87f9744","url":"static/js/16.3613e2e5.chunk.js"},{"revision":"6c8b0f23aa88310946e3a70e9fc2b8a1","url":"static/js/17.ee4a6a0b.chunk.js"},{"revision":"f414235a63148a3548b279d6e2dda8fd","url":"static/js/18.fdafa258.chunk.js"},{"revision":"5d02997b11921d3fc4c78cfb98a1faee","url":"static/js/19.24a0f10a.chunk.js"},{"revision":"55895975363950a1d2ab7b9f5d3c41b7","url":"static/js/2.9b05d02c.chunk.js"},{"revision":"c740ad6345d9767a10aecd4e80404332","url":"static/js/20.571ab14a.chunk.js"},{"revision":"f1259b8c056d93120b4387c277a669f2","url":"static/js/21.d73ee162.chunk.js"},{"revision":"55bed291233a7d34f078b5a7f90707a0","url":"static/js/22.4cb68ef4.chunk.js"},{"revision":"90247646a857e50087f7a7c8c16a80ef","url":"static/js/23.67559083.chunk.js"},{"revision":"096bba38497ff984dbd75797634aebf9","url":"static/js/24.0e986bc8.chunk.js"},{"revision":"db6ff5447d7e195476743df9f696a90a","url":"static/js/25.075545cc.chunk.js"},{"revision":"d2cacc303e53b888140e80aed604f47c","url":"static/js/26.0438299c.chunk.js"},{"revision":"12ed4575c9e31fa107bb886d4300e130","url":"static/js/27.9cdddecf.chunk.js"},{"revision":"416771e155f03899047af2962d3bc110","url":"static/js/28.75415310.chunk.js"},{"revision":"0d17fe397114241f4c7a9a44db180e02","url":"static/js/29.ddb3ce9e.chunk.js"},{"revision":"3779440f934877a092871e4ea1ceb3a8","url":"static/js/3.3dc73908.chunk.js"},{"revision":"304cd2de6a2faf032b3d9c17de8261b8","url":"static/js/30.dc9a0140.chunk.js"},{"revision":"6c7a0c17d0a905ca75a222bddf434d8a","url":"static/js/31.e5bb9a3c.chunk.js"},{"revision":"5869a9a95e7ed46ff6ad49bd42dc8030","url":"static/js/32.29b68d8d.chunk.js"},{"revision":"b724d5027226e77ee1b07c9ebde02856","url":"static/js/33.9771424f.chunk.js"},{"revision":"9861e19cd7356bafd916ba4e368e76e4","url":"static/js/34.decb9fb2.chunk.js"},{"revision":"7ff6c7c7f29401d67c193c9eb155b7d7","url":"static/js/35.7e478ee1.chunk.js"},{"revision":"e7e6ad9ab566854b40baeab751249937","url":"static/js/36.72610c25.chunk.js"},{"revision":"fb375da0fb6bb4fcb1bd57fc41a11bf3","url":"static/js/37.f164a095.chunk.js"},{"revision":"884809c3ca854f0b59cd7e6ec5980a50","url":"static/js/38.ff71dc9e.chunk.js"},{"revision":"4e3a7ef4b5ccdb9346528919068c2b98","url":"static/js/39.cb2d3aa1.chunk.js"},{"revision":"1286d5ea7150fe3d6635cbc6b8d7c7da","url":"static/js/4.c6309601.chunk.js"},{"revision":"3f6a1024e10cf1bc070f6423ffd2aff3","url":"static/js/40.86eeb1eb.chunk.js"},{"revision":"c5b7f12dee805f7883a384635e23cfb6","url":"static/js/41.9b649997.chunk.js"},{"revision":"22873588c72647c5d6bd021facdee654","url":"static/js/42.e52e6904.chunk.js"},{"revision":"8b79149a02dd0a9407937a7745831c68","url":"static/js/43.c02b443f.chunk.js"},{"revision":"6f5b439df281ddd5465a5aa7b69affa6","url":"static/js/44.00974e28.chunk.js"},{"revision":"b95e23b6e132d7d2cf255ea635f861e1","url":"static/js/45.af994610.chunk.js"},{"revision":"f8acd32bd7a1c4efd3c4d60cd37ee57b","url":"static/js/46.51eb7c40.chunk.js"},{"revision":"389345f7a7d129f86eb9ee43df788cd3","url":"static/js/47.1fcf83e5.chunk.js"},{"revision":"22b0fb68106baa2830e40761842204ef","url":"static/js/48.6ada0cad.chunk.js"},{"revision":"69d312345a360030bcde9ae73cc3c876","url":"static/js/49.45339184.chunk.js"},{"revision":"ae6df377405595e47acf1840b648b9af","url":"static/js/5.d36bf93e.chunk.js"},{"revision":"5e78d9082b9d3b94993ffe7f8dab36fd","url":"static/js/6.8a00f94e.chunk.js"},{"revision":"318f41abe9ae4456a6d8b0ab9de8a71d","url":"static/js/7.527c94e8.chunk.js"},{"revision":"e819ee9a1bda46086703410c803f6440","url":"static/js/8.1116fd1d.chunk.js"},{"revision":"479f38f25a0ccd989e9018a3d45985b3","url":"static/js/9.fa55f9f3.chunk.js"},{"revision":"4f6d3f3ed5a3f1b66a43604074b528e9","url":"static/js/main.0ca5fa94.chunk.js"},{"revision":"b350529d2ea53407556c63012cf032e8","url":"static/js/runtime-main.ffd862d0.js"}]);

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
