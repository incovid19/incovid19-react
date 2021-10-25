if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"6fd269d06fb51f1a8ea70edb66911e13","url":"404.html"},{"revision":"511ecd66ebc7d2b5571943099af771c9","url":"574bdd1bc212e9c2e2c6.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"6fd269d06fb51f1a8ea70edb66911e13","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"62b00db1f026d8ca0b595ab66409a4b2","url":"static/css/22.b1ee63fa.chunk.css"},{"revision":"0ff5cf098070438329a1271ddf981ca0","url":"static/js/0.a0c39cc9.chunk.js"},{"revision":"7e068db41cc9587c9bc725e0f599d8aa","url":"static/js/1.194cfc6b.chunk.js"},{"revision":"e7637109ba475caece7e2f7e28babcec","url":"static/js/11.3f9ae905.chunk.js"},{"revision":"d50c69159c4698148305c533909ecb4e","url":"static/js/12.a04cd993.chunk.js"},{"revision":"fe830168484a8fc448cabe89d472a9a7","url":"static/js/13.5e35559c.chunk.js"},{"revision":"4de1cc72b4bc0633d5a90b0df7824d72","url":"static/js/14.ba6aa9ec.chunk.js"},{"revision":"4f87ced6bbd0eba95d8c08cdc388fabe","url":"static/js/15.d5336327.chunk.js"},{"revision":"d305d21eff122e0147add953a02f6b9f","url":"static/js/16.4e6abe16.chunk.js"},{"revision":"b5b2882aed7749953b20b86903f2c985","url":"static/js/17.8384badc.chunk.js"},{"revision":"bff7177ced782f6ab7c30e17ab3c1bec","url":"static/js/18.3b81331f.chunk.js"},{"revision":"25e1b25ff18a28cdf2859ae1a6521660","url":"static/js/19.988b4e8c.chunk.js"},{"revision":"f0fbd43ae3c7cb2bce87ae3f37d9b816","url":"static/js/2.b9040596.chunk.js"},{"revision":"702d19ce618425d0a20c1b6e8e3f094c","url":"static/js/20.e4a4b107.chunk.js"},{"revision":"f5b4dcd2b16ec5cc60183c1b931b43f6","url":"static/js/21.91c2ce5d.chunk.js"},{"revision":"75534ae8f808feecc37e18dda95d5dc9","url":"static/js/22.685a4d1e.chunk.js"},{"revision":"67f3073a7a06fc87e22cf8d7b72b05d2","url":"static/js/23.18371aa3.chunk.js"},{"revision":"891f969e702d6b2b35960e8548c63d67","url":"static/js/24.0def4236.chunk.js"},{"revision":"3315f631de163343bbc40d5b14c0f8b7","url":"static/js/25.1a3f8fcd.chunk.js"},{"revision":"23deca0c1af81b70fc4d458fbc84ca03","url":"static/js/26.4d1c5a86.chunk.js"},{"revision":"e8a9d85785bd1fdc400f1e2c2719b31e","url":"static/js/27.e7bc14d0.chunk.js"},{"revision":"fb41845137ee2efac70ada7dd4da4b9f","url":"static/js/28.e5b8dfd4.chunk.js"},{"revision":"b0a0037fdce0e7a78449151263fc5ba9","url":"static/js/29.40f59c61.chunk.js"},{"revision":"92f9252b2f1fe3929ef2c3cb9638a086","url":"static/js/3.06f49726.chunk.js"},{"revision":"bbf91a7e5f3318a42a07e45bcdb0f2b2","url":"static/js/30.803e5496.chunk.js"},{"revision":"3143b718c0fe05b986016aaaca518c7d","url":"static/js/31.a702486e.chunk.js"},{"revision":"74e9680b365c7186b3643f1f9cce9db0","url":"static/js/32.177efa5e.chunk.js"},{"revision":"97470936ee2c13625645b010b4ee7355","url":"static/js/33.169a5f31.chunk.js"},{"revision":"6e6993e6e1286d484157c68f667ad7c3","url":"static/js/34.56b942c7.chunk.js"},{"revision":"93530b446707bf8a80de1da0b8062372","url":"static/js/35.dc71a92f.chunk.js"},{"revision":"918a61c0dfb16d56c69992e108c679de","url":"static/js/36.934473a7.chunk.js"},{"revision":"04edbf7d2fff2b7031dfd4c0e94d0ae4","url":"static/js/37.d4f98d18.chunk.js"},{"revision":"989ec379eabf3d5dde5e73af2d8edf69","url":"static/js/38.04dd770c.chunk.js"},{"revision":"f3be3b2c1c0cc76548b8e288fcc0d2f1","url":"static/js/39.667670ee.chunk.js"},{"revision":"6f2d773a71432e513a78fcdf2626b9a0","url":"static/js/4.2c0898e3.chunk.js"},{"revision":"3a369cb3950edd329b5039c74236fd94","url":"static/js/40.33668916.chunk.js"},{"revision":"b5e824b05ff634b3da842d71491e726b","url":"static/js/41.35d90a02.chunk.js"},{"revision":"bf2ab1a05a43945d8ef3b75e3b4d18ba","url":"static/js/42.2deff7af.chunk.js"},{"revision":"73d433e171a3050121cd15d62d747782","url":"static/js/43.952d0052.chunk.js"},{"revision":"889795ec8d6e18f5f70ee1ed0c2cab93","url":"static/js/44.35706abc.chunk.js"},{"revision":"13cefcd0461769506093a21639276e12","url":"static/js/45.bd4ac566.chunk.js"},{"revision":"a5483a5bb0b0a98302cf07d2452f7244","url":"static/js/46.8c39b76b.chunk.js"},{"revision":"bd22fd7f016c880d8ac0f620286ff725","url":"static/js/5.86cb1ed3.chunk.js"},{"revision":"2586bf0c80b72ae133c72b656d3f23b3","url":"static/js/6.59de0973.chunk.js"},{"revision":"685a5ab8c030d3b9b38ab827d8d37336","url":"static/js/7.25f0e432.chunk.js"},{"revision":"724fbec6123836b12f2b083a8fa67d4c","url":"static/js/8.65f42e3b.chunk.js"},{"revision":"fe49033c40e7348e30413ec3d69d123f","url":"static/js/main.914fe66f.chunk.js"},{"revision":"bbbd18ef6cf5a0bfe58f6e3732eedcb6","url":"static/js/runtime-main.9fe525d6.js"}]);

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
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
