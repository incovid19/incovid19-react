if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"66e6f2fecc71dc52cda00baf2e854da5","url":"404.html"},{"revision":"cb28d6aeb439fd6b3211ec0606be09f7","url":"98c45929971ca7637598.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"66e6f2fecc71dc52cda00baf2e854da5","url":"index.html"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"13b32c5419f62f5eff5fda5be416ba6a","url":"static/css/23.b1ade60d.chunk.css"},{"revision":"ce3aec4c9c8ce12b4516e2279b43ea4b","url":"static/css/3.1432c553.chunk.css"},{"revision":"b5656928115ef55ee180a3434b7123da","url":"static/js/0.915cbb36.chunk.js"},{"revision":"f5ebf17cd2e4cce06177b058a4cf69d3","url":"static/js/1.ab5ce6ac.chunk.js"},{"revision":"6d6de2304e3edd923f2100909e984f61","url":"static/js/10.a0fa7ce5.chunk.js"},{"revision":"cd5f0300187d68419db382cb9eb126b2","url":"static/js/13.0281b272.chunk.js"},{"revision":"658d0a68428c995b0beb1a32cbc63bcf","url":"static/js/14.94dd3654.chunk.js"},{"revision":"575f091cfb7691306305adf6d7de18ac","url":"static/js/15.01ae0925.chunk.js"},{"revision":"c4372c003db3c085d1d757b50a9eec5b","url":"static/js/16.56739851.chunk.js"},{"revision":"e0da255d01a0970df2afef4d5dcae960","url":"static/js/17.97d02b61.chunk.js"},{"revision":"42d7e7b310c9d910404a7da04431e1b5","url":"static/js/18.ea450e6f.chunk.js"},{"revision":"bf1e432c20e4e6862c32a5b902d3dd08","url":"static/js/19.3c7ebeff.chunk.js"},{"revision":"3e82b96b6561964010138c3fe1030525","url":"static/js/2.290ec27f.chunk.js"},{"revision":"2432de68082e27687a030727565ccf9e","url":"static/js/20.cb68c5bc.chunk.js"},{"revision":"cb5b0ddaf48a32b20b7286c55eef5e3f","url":"static/js/21.78e53fea.chunk.js"},{"revision":"d8a0522944d2db67425059cb240292c3","url":"static/js/22.bdd7e6d1.chunk.js"},{"revision":"66c5da41764cd8cf2a38c666fba77919","url":"static/js/23.2a3a155b.chunk.js"},{"revision":"423ce0bf21b564903034526468a0db73","url":"static/js/24.8b5aca60.chunk.js"},{"revision":"1cbd603c01fd61e9c7a03e8218b603a8","url":"static/js/25.730e4cd8.chunk.js"},{"revision":"212124cbe21f8fc302171cf20b4544e5","url":"static/js/26.b715de65.chunk.js"},{"revision":"ce256aed919bc30d3ecb26514c48a1d6","url":"static/js/27.ad1e6a3e.chunk.js"},{"revision":"dfaad39df80d299cc7c4a2de8f6e8703","url":"static/js/28.f7ebeec1.chunk.js"},{"revision":"d86307bfdffbd8b56ee2caabe8354c46","url":"static/js/29.c52a9766.chunk.js"},{"revision":"58daba733d5d96b8ecc548252bb953b5","url":"static/js/3.a0037b6d.chunk.js"},{"revision":"9ff4df5ecab0561041019d2d4b7f59b2","url":"static/js/30.85354299.chunk.js"},{"revision":"08a2322b90e316b65a114ce821d2a5da","url":"static/js/31.ca04ab08.chunk.js"},{"revision":"5dba834321d7fb64f7e0819dd4787514","url":"static/js/32.c6666dec.chunk.js"},{"revision":"6a499d5d8dc4ac9dcf5aca55e4bad05d","url":"static/js/33.68680ff4.chunk.js"},{"revision":"192969fe5f36aa0ce4672b25667b5820","url":"static/js/34.c2841ea1.chunk.js"},{"revision":"1a36aa8e1f2c9c53a6d17c753a7702fb","url":"static/js/35.10ce6c92.chunk.js"},{"revision":"64367d66272c5dc37cfc09cfd4e12108","url":"static/js/36.2fc69af9.chunk.js"},{"revision":"7f5626c2c14fac6fadd79ad8d51599e3","url":"static/js/37.3dba16d3.chunk.js"},{"revision":"b10f74f11abea8816c54e6192f55bd95","url":"static/js/38.6bcaddbd.chunk.js"},{"revision":"7fcaea920dea1a4045595753bbfb8383","url":"static/js/39.361a9c95.chunk.js"},{"revision":"40df83e82e6a6100307c9ac541cf112f","url":"static/js/4.6347ba45.chunk.js"},{"revision":"10d5fa720275f2ecbd447e516e9a0fe9","url":"static/js/40.ba813e58.chunk.js"},{"revision":"8b939c2fe784c3f378c5d0ccd9627e95","url":"static/js/41.59dbcfee.chunk.js"},{"revision":"02ab5c9536a08ae75053e5d5dd37fc12","url":"static/js/42.c0800ef2.chunk.js"},{"revision":"9382b4c19d69b8ddac06026a3e59c775","url":"static/js/43.2803837e.chunk.js"},{"revision":"c3ed8c587307acb0e61a858edd855289","url":"static/js/44.2d185893.chunk.js"},{"revision":"4dceb8d6252a8f994c0d326ec3a5746d","url":"static/js/45.50e9ee64.chunk.js"},{"revision":"18e7b83196cc1fedf6ed90aa0ef70ae5","url":"static/js/46.bea76e2d.chunk.js"},{"revision":"eca5c0aeaccdd6d6a63ee7f24d2998d2","url":"static/js/47.1a9354c4.chunk.js"},{"revision":"8d139012c69204f26a9a57875cd948ed","url":"static/js/48.02bdd3cd.chunk.js"},{"revision":"69d312345a360030bcde9ae73cc3c876","url":"static/js/49.45339184.chunk.js"},{"revision":"fbdbc8ea090a1605c3bd3afa6e74a64a","url":"static/js/5.680f5f36.chunk.js"},{"revision":"1bb7d4f834fc328f301d08695a2aeea1","url":"static/js/6.f65b64dd.chunk.js"},{"revision":"f12c646393402fee73342bd424a92783","url":"static/js/7.e84784f1.chunk.js"},{"revision":"e74fe23fa245f5e65d0b42cdc461c7cf","url":"static/js/8.a85474bd.chunk.js"},{"revision":"0ec9ab5ff7eff51bfe6712cf8514446c","url":"static/js/9.df0883ab.chunk.js"},{"revision":"8d7fc319d4165534c8603e8bf88bf7f3","url":"static/js/main.76d30159.chunk.js"},{"revision":"f9d6ea433508a1cb0fedaad9a214df48","url":"static/js/runtime-main.ff878e07.js"}]);

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
