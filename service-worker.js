if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"d389cb344f38fdc65bd0353f702b7047","url":"404.html"},{"revision":"3dbd7dbd868d44d5bab36f8ac51ea308","url":"9347b090841fe52298e5.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"d389cb344f38fdc65bd0353f702b7047","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"a66872bead1f894a79ea2488187e8ff2","url":"static/css/20.f5f9d973.chunk.css"},{"revision":"fa48331d4ea94c1713d89d2c2161fad7","url":"static/css/21.805f4326.chunk.css"},{"revision":"3d0130ea8efd2561a6192c71f3757dab","url":"static/js/0.6f89c99d.chunk.js"},{"revision":"74f31289a53f49a7fef67f3db3a9b54e","url":"static/js/1.d673cdac.chunk.js"},{"revision":"ef5fffbce481b04a3abea1bc06f25928","url":"static/js/12.e7d02ff7.chunk.js"},{"revision":"c189423737ddd6547e158a840f223e18","url":"static/js/13.03c66c2a.chunk.js"},{"revision":"a250e4cd6720671aa7fab4bc4befa728","url":"static/js/14.30d95791.chunk.js"},{"revision":"14714b02edabd7a5f1bfbf9e5a0e26a6","url":"static/js/15.a8b7d723.chunk.js"},{"revision":"3b1ad387b631a2951234054d17948fb2","url":"static/js/16.49c43f0d.chunk.js"},{"revision":"6dbf248924784f8ad01b0319280c1f44","url":"static/js/17.c991d78f.chunk.js"},{"revision":"e56438714e1a57dfacf37a2eeb56eca7","url":"static/js/18.454a01fa.chunk.js"},{"revision":"34b26ef77ec879093b2689d316601b31","url":"static/js/19.57bae919.chunk.js"},{"revision":"d6a3a1a8f8f1ff39dab2f9dd585bb317","url":"static/js/2.b00115e4.chunk.js"},{"revision":"dfea5fc97b0bb97339cb375ddd57782e","url":"static/js/20.42aaffb5.chunk.js"},{"revision":"9559dba6eb4b51c3bf52e8654443a7a5","url":"static/js/21.aa059e82.chunk.js"},{"revision":"61dabfa769d793ce56d0d3a5bf4fdd50","url":"static/js/22.39fa7748.chunk.js"},{"revision":"1e9e05f92c464462de5c4fc5ce68f293","url":"static/js/23.1950dc0f.chunk.js"},{"revision":"53038f07987f92c54d5441f308256476","url":"static/js/24.805c773b.chunk.js"},{"revision":"9b2b1596e547b12aefa9b423ca166c02","url":"static/js/25.ff6a04cb.chunk.js"},{"revision":"498c38ee928915e39db47b85a5add739","url":"static/js/26.7a68e35b.chunk.js"},{"revision":"d349312db92fc67bad0ad62ca2a0dbc1","url":"static/js/27.c9fe5023.chunk.js"},{"revision":"86bba55e72c107194b6008736656cc1b","url":"static/js/28.9fbd43b0.chunk.js"},{"revision":"67340c988ae32e93fba5e70eba791490","url":"static/js/29.0d678432.chunk.js"},{"revision":"d38c825452aeca523f1e707c471e22b0","url":"static/js/3.60ebc3a4.chunk.js"},{"revision":"c450e784a3e509eff15d7b0270bfb2fe","url":"static/js/30.888044e0.chunk.js"},{"revision":"84bc90b2a5bb976036d4aa4c3734c464","url":"static/js/31.e0a9b5a3.chunk.js"},{"revision":"0cf07450350f65b9021baa9647979bd5","url":"static/js/32.ee947b0e.chunk.js"},{"revision":"f085bf9d04868856cc7b9ec411b16109","url":"static/js/33.f0c982a8.chunk.js"},{"revision":"dab6d356e882a8d6db4c9627f111239b","url":"static/js/34.ff9e05f6.chunk.js"},{"revision":"54347cb942bb82e8b09f2e2db10d2b09","url":"static/js/35.497e70dd.chunk.js"},{"revision":"3ab48f2654679ee336ff6b805ae815b3","url":"static/js/36.e1f80ad1.chunk.js"},{"revision":"8bcae6d53ec6ad1ce44fa459fe94fd95","url":"static/js/37.cd4e8b4e.chunk.js"},{"revision":"feebc823353f380c0f73a707ec595897","url":"static/js/38.b9fefe08.chunk.js"},{"revision":"207376868ac36c394e751d194cbb1ab5","url":"static/js/39.2f95a15f.chunk.js"},{"revision":"e251cd2706e143594693ebe7f6494f61","url":"static/js/4.bae07e40.chunk.js"},{"revision":"d5d4945e73de1775f43c1c679a1dc371","url":"static/js/40.08a7bd40.chunk.js"},{"revision":"e7e9c1a049b0a98b0870e246ee56b368","url":"static/js/41.faad43e0.chunk.js"},{"revision":"4b4e49e47ebf86512f409e10ff6e096a","url":"static/js/42.e1eb9f2f.chunk.js"},{"revision":"a4e4fc283d32c420a396d17e63f25574","url":"static/js/43.43202196.chunk.js"},{"revision":"de2ef226a120ec05b78e6447ce334b45","url":"static/js/44.60e7539f.chunk.js"},{"revision":"d7c41241d5b30039faa20dbdc58124fb","url":"static/js/45.8fcba6e8.chunk.js"},{"revision":"df171a6704d875ae99616be6fae131ee","url":"static/js/46.29808fe4.chunk.js"},{"revision":"edb39d6641447e3852b21005d101c09e","url":"static/js/47.dceb28f9.chunk.js"},{"revision":"16aa374c4eae9ff69d4c2fb9e2ebd1a6","url":"static/js/48.7854d132.chunk.js"},{"revision":"384e7c0f1a049d0f95487d322a8eea1f","url":"static/js/5.ae99d055.chunk.js"},{"revision":"4c9e259794605fde8df20ec01d81d0b1","url":"static/js/6.02a95f0f.chunk.js"},{"revision":"ffbe027ee9c70c2073c4daaecc5e7311","url":"static/js/7.c6181acd.chunk.js"},{"revision":"d84bc969c3ce54c03700c154ca1f652d","url":"static/js/8.619eb8f0.chunk.js"},{"revision":"4e62b0375c5112505ca79608fe1944e6","url":"static/js/9.37d172ac.chunk.js"},{"revision":"a90097b40ef71cb7c7e5894643af69d5","url":"static/js/main.11b73410.chunk.js"},{"revision":"a85f2eb063ae58103cbcf7f5027223b6","url":"static/js/runtime-main.731a1978.js"}]);

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
