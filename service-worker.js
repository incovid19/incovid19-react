if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"975449889869348be402a7ccb707bf67","url":"404.html"},{"revision":"640e6bc20607c27c95aabc9a8e286894","url":"b4b1c9748bd2cad83b2b.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"975449889869348be402a7ccb707bf67","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"a66872bead1f894a79ea2488187e8ff2","url":"static/css/20.f5f9d973.chunk.css"},{"revision":"b118e22da008280bd0b1ec0871f93404","url":"static/css/21.6ec96a3b.chunk.css"},{"revision":"27bb5aee7580177c6657dbb67fa49714","url":"static/js/0.fbe4cb36.chunk.js"},{"revision":"6005374a2480eafcd022de2b0a5ffe3b","url":"static/js/1.0f7181c0.chunk.js"},{"revision":"70a286c263e948eb988e8ebf97fdc60e","url":"static/js/12.559a191e.chunk.js"},{"revision":"db0c87695ff3ab9679aec32857e11dbf","url":"static/js/13.f46c0715.chunk.js"},{"revision":"40c8179bbe8829fc5d717cae94f8ec37","url":"static/js/14.922aafa3.chunk.js"},{"revision":"164a5dcb20b6a9d5cedf9c2dcd42b9b5","url":"static/js/15.a33ee86f.chunk.js"},{"revision":"db5cad419c0bfe2ca9cc420820895953","url":"static/js/16.aa9e89a4.chunk.js"},{"revision":"7e81ab85aca0584968312ac4952a84ec","url":"static/js/17.01e1a83b.chunk.js"},{"revision":"297bf6e51b2777e4c0d6c47e7cbc75b8","url":"static/js/18.f501dc71.chunk.js"},{"revision":"dace501fc97e248a1022f707e580d7be","url":"static/js/19.c363fcbb.chunk.js"},{"revision":"6ec86183829ddd003e8e5ba54961c0c0","url":"static/js/2.0d2c4bd6.chunk.js"},{"revision":"a20a84c9838dee5e01569300ea59e6df","url":"static/js/20.25421744.chunk.js"},{"revision":"3b25bf32cb6ce9eae5817c3afe9c2373","url":"static/js/21.df008091.chunk.js"},{"revision":"57e469fbb36276a3462042e8bbde724f","url":"static/js/22.720d38e6.chunk.js"},{"revision":"4b3fe238a12bf36cbe8dde554f0ad2fc","url":"static/js/23.2151332a.chunk.js"},{"revision":"7c305a49fcb541d95b3c2ccd9bd7d9a1","url":"static/js/24.750ab117.chunk.js"},{"revision":"567675445c2b87f14fa2ffeaf3a55e91","url":"static/js/25.d21c4ea3.chunk.js"},{"revision":"801cc86c93cf94b1e38712079f078018","url":"static/js/26.b39f8e07.chunk.js"},{"revision":"8db9cc863d55c0a0f0708ba6e74ace12","url":"static/js/27.b2bf8cb7.chunk.js"},{"revision":"f205cfaa1799c4e599b0dd8b0cadcafb","url":"static/js/28.871930ca.chunk.js"},{"revision":"5db3ec440db6ca023e608af1f5592f90","url":"static/js/29.75935b77.chunk.js"},{"revision":"94572d41393f9a49e7e42f1d0d770b76","url":"static/js/3.7c83256d.chunk.js"},{"revision":"c627e5430f3b2e3bb1c6c0692579285a","url":"static/js/30.a8a9e152.chunk.js"},{"revision":"e3de2518e7bef48ada805b295f4808ea","url":"static/js/31.48c2df55.chunk.js"},{"revision":"8df5ae2f0855d6be35520e5b8ce7d43f","url":"static/js/32.9d5bf406.chunk.js"},{"revision":"645b8996ceb2f88553a04651e70ea95e","url":"static/js/33.737dbd95.chunk.js"},{"revision":"d73935d98197183418352507b601d216","url":"static/js/34.dd84fb70.chunk.js"},{"revision":"0466094dfbbc3b445d5d937b6b5fe306","url":"static/js/35.6614b148.chunk.js"},{"revision":"bdfa35c1e9c01ab4778eb3ed84eb7a2f","url":"static/js/36.f0dad2fa.chunk.js"},{"revision":"9052fd146eae60842b85b66d6ad3588f","url":"static/js/37.a770521b.chunk.js"},{"revision":"d815a134c728ce06d76d56968aa91c02","url":"static/js/38.4d0c80ad.chunk.js"},{"revision":"1af396d700dd6534d5835f29c5a3d1c9","url":"static/js/39.82ef253e.chunk.js"},{"revision":"4264dc0635f5555c76e045de15ed72d8","url":"static/js/4.dea7f8e5.chunk.js"},{"revision":"c2c0d08f1b87d38b47ead20a4f788ac1","url":"static/js/40.d2d6ad49.chunk.js"},{"revision":"a44dc8b7f890e926128e57068436eeb9","url":"static/js/41.54659bb3.chunk.js"},{"revision":"bb00fba78e135c42ef0074024a6f8526","url":"static/js/42.678c7791.chunk.js"},{"revision":"88bdda28dde7237280d12c455d1072e4","url":"static/js/43.092ad8d8.chunk.js"},{"revision":"0f14165ac7994736b49073437c9f640c","url":"static/js/44.0afde41e.chunk.js"},{"revision":"d3a5ba9276df085cdea63dfe4c57db17","url":"static/js/45.336a7cae.chunk.js"},{"revision":"1d344333b7fda3bf74a3e5793fe7df7f","url":"static/js/46.70e4f4b5.chunk.js"},{"revision":"2ed88e63541e39b57e89d03cbeb49161","url":"static/js/5.0d2970ac.chunk.js"},{"revision":"22ff62cbf29f1d06bf9e419621b84648","url":"static/js/6.3b046f2a.chunk.js"},{"revision":"c7913046b0e0384fcf20fc54c92afc71","url":"static/js/7.60bf0961.chunk.js"},{"revision":"d7bb9bf26014daefad4e95fadd7e376b","url":"static/js/8.b6507d5a.chunk.js"},{"revision":"7b3f5c25225cd230c78731113c96ad73","url":"static/js/9.9e9c1bd9.chunk.js"},{"revision":"50b32f8e6e0a5f34a7804b4179fd0046","url":"static/js/main.0c030af2.chunk.js"},{"revision":"515cc6bb5c28d8ad6fd2f8dec36fc30a","url":"static/js/runtime-main.8cff2f7a.js"}]);

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
