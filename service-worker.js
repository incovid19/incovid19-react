if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"72956d8a70eae42980abe047561f8b81","url":"404.html"},{"revision":"640e6bc20607c27c95aabc9a8e286894","url":"b4b1c9748bd2cad83b2b.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"72956d8a70eae42980abe047561f8b81","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"a66872bead1f894a79ea2488187e8ff2","url":"static/css/20.f5f9d973.chunk.css"},{"revision":"b118e22da008280bd0b1ec0871f93404","url":"static/css/21.6ec96a3b.chunk.css"},{"revision":"27bb5aee7580177c6657dbb67fa49714","url":"static/js/0.fbe4cb36.chunk.js"},{"revision":"6bbb9be62a2ac6533256b1452ec7ef1b","url":"static/js/1.467c4ed0.chunk.js"},{"revision":"70a286c263e948eb988e8ebf97fdc60e","url":"static/js/12.559a191e.chunk.js"},{"revision":"6092f5f69a95d63fa7c19e55f37c557a","url":"static/js/13.b04c5a02.chunk.js"},{"revision":"1a4a5878629edee68ca7aca49de6d38e","url":"static/js/14.c963cc46.chunk.js"},{"revision":"8b2e33592f56ed3ed34ac90cfc6a739b","url":"static/js/15.98b0020c.chunk.js"},{"revision":"91a08b4a9b469d1b7412446f56668f5f","url":"static/js/16.16b54fc2.chunk.js"},{"revision":"a4a409b7745e034b5f9e1214a6690f5b","url":"static/js/17.e7434619.chunk.js"},{"revision":"486b730bf0506d77691ea5bae06fc1c6","url":"static/js/18.fbe64383.chunk.js"},{"revision":"8a6025e9a0b2c814af8583b8b3c89648","url":"static/js/19.314269c2.chunk.js"},{"revision":"6ec86183829ddd003e8e5ba54961c0c0","url":"static/js/2.0d2c4bd6.chunk.js"},{"revision":"bd4a8fba948a508344974b4d8cd086cf","url":"static/js/20.574501a5.chunk.js"},{"revision":"a512b64799add14c4e7d1341290db5c9","url":"static/js/21.bfa50def.chunk.js"},{"revision":"da7bb24418637e6efcec302a53fd7957","url":"static/js/22.00e16796.chunk.js"},{"revision":"325e7163e4b2d4968344c4d2feadedcf","url":"static/js/23.3ab7839d.chunk.js"},{"revision":"d19f452ea3793737d8f02efed9179b52","url":"static/js/24.4989d870.chunk.js"},{"revision":"8eec1788ca9435ebf667117df68bf567","url":"static/js/25.4a1113b4.chunk.js"},{"revision":"d64d584290eca7c860fd8876df6d5d30","url":"static/js/26.b8dd3c92.chunk.js"},{"revision":"8db9cc863d55c0a0f0708ba6e74ace12","url":"static/js/27.b2bf8cb7.chunk.js"},{"revision":"18681dc482d2273f79ec1841a38660ff","url":"static/js/28.f4540026.chunk.js"},{"revision":"1f80a9d2771803fb7cc077163968fb19","url":"static/js/29.301a3943.chunk.js"},{"revision":"561f9837464709c13d2afe7b96bfdd0a","url":"static/js/3.f175cba0.chunk.js"},{"revision":"ccc2b8bc57d5b3f723ca6bef0621c6a3","url":"static/js/30.6931499f.chunk.js"},{"revision":"db6afa4fc5a21a74098d4eb18ab4298d","url":"static/js/31.f3824b44.chunk.js"},{"revision":"568c6a53e3fa03e64f6e18c66630e75c","url":"static/js/32.a72c3fcc.chunk.js"},{"revision":"28299cdf49a9c3f0d38c2aead109ac8f","url":"static/js/33.7a2cee8b.chunk.js"},{"revision":"a714b86ff719c4a6c915a75b41a2bf02","url":"static/js/34.f33d8f84.chunk.js"},{"revision":"92b2eea2eb27615ce268b3e4b702821f","url":"static/js/35.0e792a84.chunk.js"},{"revision":"dc570bc056daa66013b9092ef6475c59","url":"static/js/36.9c407527.chunk.js"},{"revision":"1721b2188bb3a78cc90c0fd00dd85ce2","url":"static/js/37.74f3c10f.chunk.js"},{"revision":"f8e5508e19b75e6a3713d1404b4ecd78","url":"static/js/38.ce5425c9.chunk.js"},{"revision":"ed1e061b626e31b23d05ee90e1c01198","url":"static/js/39.8001e23c.chunk.js"},{"revision":"4264dc0635f5555c76e045de15ed72d8","url":"static/js/4.dea7f8e5.chunk.js"},{"revision":"5b88e0ef196627eb3db1675cdb6e2567","url":"static/js/40.36df39d0.chunk.js"},{"revision":"2e6dfc3f27a8706cc9c3f56e62b4f294","url":"static/js/41.ee7323a2.chunk.js"},{"revision":"0bd346533c0ddadaf9552b47848bf476","url":"static/js/42.9144f977.chunk.js"},{"revision":"e265f1276994e81cb5637d80ad56db69","url":"static/js/43.ae9081aa.chunk.js"},{"revision":"4eef8522983314cf7765557dcf39d62c","url":"static/js/44.1b907664.chunk.js"},{"revision":"aacbacaeb6415b181d1cfa622f4c934c","url":"static/js/45.c88e6175.chunk.js"},{"revision":"289c446a58379eab1bfa01b4bc721840","url":"static/js/46.dfa5972c.chunk.js"},{"revision":"b7747b804074319f3513f214dc443822","url":"static/js/47.19214adf.chunk.js"},{"revision":"5f71e89c3b6819ee64f14143fd5cf0fc","url":"static/js/5.d616fc5f.chunk.js"},{"revision":"22ff62cbf29f1d06bf9e419621b84648","url":"static/js/6.3b046f2a.chunk.js"},{"revision":"c7913046b0e0384fcf20fc54c92afc71","url":"static/js/7.60bf0961.chunk.js"},{"revision":"d7bb9bf26014daefad4e95fadd7e376b","url":"static/js/8.b6507d5a.chunk.js"},{"revision":"beba8a683123c4c74831d2ecd734da71","url":"static/js/9.dccc18b9.chunk.js"},{"revision":"3570feab890e82bec5ed3e93748a0032","url":"static/js/main.0eb71334.chunk.js"},{"revision":"dea03f81c53c93df1ac743c73bbe9506","url":"static/js/runtime-main.bf147c06.js"}]);

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
