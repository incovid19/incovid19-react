if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"b69cc8b80cb00633c7c90a631dd18d36","url":"404.html"},{"revision":"b35b1bf85473c2c525f1eca8b9e17000","url":"c59c8a6e635ce7b3e36b.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"b69cc8b80cb00633c7c90a631dd18d36","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"62b00db1f026d8ca0b595ab66409a4b2","url":"static/css/22.b1ee63fa.chunk.css"},{"revision":"3b5c8fcd13639df76e28cfb4098fe822","url":"static/js/0.1ef30ce3.chunk.js"},{"revision":"774527b284a20716957712998abcc23c","url":"static/js/1.b0243838.chunk.js"},{"revision":"85259e824c8a410ebee8b89b4c3a4fcb","url":"static/js/11.e8f5df8e.chunk.js"},{"revision":"66da70e62e8f6bfcc3aef4a9ac046b25","url":"static/js/12.eeb21094.chunk.js"},{"revision":"e837632f765e6f685c2cffeec6b7241a","url":"static/js/13.95f05a52.chunk.js"},{"revision":"66bc11817e590dcef9e85a83f24ba44c","url":"static/js/14.57a95a2f.chunk.js"},{"revision":"bbd3bd16462919e7aba2983c893b2ad4","url":"static/js/15.9eefe192.chunk.js"},{"revision":"2eef4cfa777d16c9cde1898f33887864","url":"static/js/16.12456272.chunk.js"},{"revision":"42afd65b5fc9b03489e8ba40b4f1726c","url":"static/js/17.d20d3cf3.chunk.js"},{"revision":"d11739d7d73a14b8518f8e40e286f9e3","url":"static/js/18.2d891159.chunk.js"},{"revision":"903f3e2dcf8d755debbfe1b1301ebdc1","url":"static/js/19.fd5f74e4.chunk.js"},{"revision":"a1e5caaecc833485e314f953f722c1bb","url":"static/js/2.e85f9689.chunk.js"},{"revision":"5acb6a1f955632a376505a5fd957fa80","url":"static/js/20.097475c4.chunk.js"},{"revision":"9cae8407a69bd8423211f40c8fc89bfc","url":"static/js/21.c648e6da.chunk.js"},{"revision":"7a6c4ca5ec5b51119979abecc8e39ab7","url":"static/js/22.a8d70dac.chunk.js"},{"revision":"e8e1904ac8354600650f805c52bcff90","url":"static/js/23.73944e44.chunk.js"},{"revision":"32dfd1beb4aadab6bfd7dde1cad2582f","url":"static/js/24.a76ad73f.chunk.js"},{"revision":"37e619ceea33955057a2402aa37ba1f0","url":"static/js/25.a24b4e15.chunk.js"},{"revision":"ecf2323e83cca76d86414251f066e9c3","url":"static/js/26.bb3a5993.chunk.js"},{"revision":"9b78d19df5388f6ade3dc009ef5406bc","url":"static/js/27.bad57e0b.chunk.js"},{"revision":"3a127d6d5a8a38fd92f41141805778fc","url":"static/js/28.4e3cb383.chunk.js"},{"revision":"e8217873ef21953620818d80f85d9a92","url":"static/js/29.6f29312f.chunk.js"},{"revision":"a26a95c6cd85e464687e9820d0c2a520","url":"static/js/3.e30acbe4.chunk.js"},{"revision":"412e2b4238a07e209cb0ab6221ef67c0","url":"static/js/30.a5b60918.chunk.js"},{"revision":"e8ace72174f5c6057372822f005c722a","url":"static/js/31.5f3cc946.chunk.js"},{"revision":"7cd98ed1aed117e371fb2cfea8ddbf96","url":"static/js/32.5c842bb1.chunk.js"},{"revision":"5617c06aaf62111d73c502e8bcbd9547","url":"static/js/33.4c336dfc.chunk.js"},{"revision":"f6a8de26783d7c565d6516df787970ec","url":"static/js/34.205a69d6.chunk.js"},{"revision":"62a36a989aeaf1d5aa2d3876a9477b27","url":"static/js/35.0ec7bd8a.chunk.js"},{"revision":"111e39819678c974cfddef3fd135d034","url":"static/js/36.0816093c.chunk.js"},{"revision":"c5c9d0c6a7bc634e0257ff57be1cc58f","url":"static/js/37.43974c94.chunk.js"},{"revision":"8d4861ed3f50931568640c82ec7905e8","url":"static/js/38.2510c7f8.chunk.js"},{"revision":"e595eff217097f53cbc24543ded8afc7","url":"static/js/39.a500f2bb.chunk.js"},{"revision":"a8f9572e97ba5e736dc0380bcd57ea91","url":"static/js/4.faf4afd0.chunk.js"},{"revision":"0ab1fce8bd1f1e2c88cb77f27c24bef7","url":"static/js/40.d4c900a1.chunk.js"},{"revision":"6810b041712af2c2020d73d44257a672","url":"static/js/41.038faf9d.chunk.js"},{"revision":"f1a6c02473357cc5e8e4165bf773c510","url":"static/js/42.e0e48fd7.chunk.js"},{"revision":"f71a3839f12f2938cfdc842bac39bee1","url":"static/js/43.6de728b7.chunk.js"},{"revision":"38805357f4df1a0eba90cb8b04052355","url":"static/js/44.4ae87e73.chunk.js"},{"revision":"135e5026ad5ca63614ca02c1b1b8016d","url":"static/js/45.c484db98.chunk.js"},{"revision":"d8b9aaaeca0623af0c8995b161103bec","url":"static/js/46.1b27d1c6.chunk.js"},{"revision":"d0d0da2f65ebef4501b430d26a4403f0","url":"static/js/5.14293d49.chunk.js"},{"revision":"32361baec31d53b2c00f990032fc8b8f","url":"static/js/6.3c6d3285.chunk.js"},{"revision":"223518ae24416695fa2741a07f4d6e1e","url":"static/js/7.37fd15dd.chunk.js"},{"revision":"7010fdf64962dfb33a671a6048c5f98a","url":"static/js/8.d1f14e59.chunk.js"},{"revision":"6c5795269f5d79490aab07bf2bb33bb9","url":"static/js/main.9d85b594.chunk.js"},{"revision":"23c5b55e1bc6c9f71c3f089b953f988e","url":"static/js/runtime-main.0c41abee.js"}]);

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
