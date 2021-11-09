if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"92801b947f55d56e4e3b86c82d84fcb7","url":"404.html"},{"revision":"eba97405ea752a65cb176a16c950f935","url":"9c1e8fdfd863c476c6bd.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"92801b947f55d56e4e3b86c82d84fcb7","url":"index.html"},{"revision":"cb9615687ee710b9cf130a8998e9faea","url":"static/css/2.6c493df4.chunk.css"},{"revision":"1d23272d3465feea3a6d8066dbff23a3","url":"static/css/20.bded3b46.chunk.css"},{"revision":"a955bfe6a45a4b9597acb1889d5f8a14","url":"static/css/21.483c52ac.chunk.css"},{"revision":"93f8404be8759a17edc3431a08066929","url":"static/js/0.b2ba4aaa.chunk.js"},{"revision":"9b9607141946d9f2648706414f329ec2","url":"static/js/1.804d329d.chunk.js"},{"revision":"90eb46b1b4afa2534714c49aa568a320","url":"static/js/12.18373884.chunk.js"},{"revision":"ce2d8568c7db883996adcad6c9e43aab","url":"static/js/13.5ef949bc.chunk.js"},{"revision":"80d04bf48c6e4596accbea98ccc046e5","url":"static/js/14.0372ea0d.chunk.js"},{"revision":"cb9b238d74415a790f68c78dfd6431fc","url":"static/js/15.3dac0cc6.chunk.js"},{"revision":"c1e0a0f5d2867715bd318e26a9c23a49","url":"static/js/16.0ad273e5.chunk.js"},{"revision":"365a35b76bf168db33ede40ee67e7762","url":"static/js/17.6f9d61e8.chunk.js"},{"revision":"6565ad6090906d844ab6191538f4c796","url":"static/js/18.4ca5131d.chunk.js"},{"revision":"f04dedde9014aab7637a6ca746a76060","url":"static/js/19.31089297.chunk.js"},{"revision":"2a86cec8ae0303dc63ea377d91ffac55","url":"static/js/2.aab29f3d.chunk.js"},{"revision":"1e9f90d0cef13bff22fb75561c024246","url":"static/js/20.6d25a186.chunk.js"},{"revision":"ab84e71e8174d4e250b97062ddc694e9","url":"static/js/21.0a77c26d.chunk.js"},{"revision":"d57fc17aded23ad83ae8799fbdfcc1ad","url":"static/js/22.ad275e99.chunk.js"},{"revision":"eb2dd83dfb120511c674a3677bb64b6c","url":"static/js/23.4b8b270f.chunk.js"},{"revision":"4d11579a91a48b5bf4ca5342127608b7","url":"static/js/24.4efd9b5e.chunk.js"},{"revision":"cdc0a9461c31ad19935441f7d63ce2eb","url":"static/js/25.9c2df48c.chunk.js"},{"revision":"bab2ae287c8e8a530bf94713f64d7264","url":"static/js/26.4cb6202e.chunk.js"},{"revision":"67286265bfd219af23d6debb523b4f96","url":"static/js/27.ea303024.chunk.js"},{"revision":"84a695063a398b20f17321d5d6fdcc8b","url":"static/js/28.37f92b67.chunk.js"},{"revision":"2c7eee1f4b1883356a64916afdd685d9","url":"static/js/29.77518a2f.chunk.js"},{"revision":"a616df6ad871e521fa95285e03bd7c5b","url":"static/js/3.5229ce8d.chunk.js"},{"revision":"0d58227c28efcdde87f9fc6580b49352","url":"static/js/30.7975b832.chunk.js"},{"revision":"75af57f94b2cc576eed5040c6f546ac1","url":"static/js/31.fd59912a.chunk.js"},{"revision":"6c27a0ababad20824c8d31f3c7ef33ed","url":"static/js/32.d13958ed.chunk.js"},{"revision":"4bf4ba073672e4a6f1d7950c922776af","url":"static/js/33.8713c4d6.chunk.js"},{"revision":"113a62d2741f6c28900b09b59173cfb9","url":"static/js/34.6abef2b2.chunk.js"},{"revision":"c8afe8b6cfcb1e5d5530c54568bd8b5f","url":"static/js/35.6cae2f89.chunk.js"},{"revision":"49e909104f4134c8d4768046fc16bdf1","url":"static/js/36.35bac786.chunk.js"},{"revision":"b799243fbfd35903c5ddca7cf4acd017","url":"static/js/37.dd68e105.chunk.js"},{"revision":"027609b68346a4e0969c546464e1cc48","url":"static/js/38.ed32e38a.chunk.js"},{"revision":"682642c36178caffa148b5c6ce7cfee6","url":"static/js/39.9b900a8f.chunk.js"},{"revision":"7cdf928e1129f453754a0527015d61d5","url":"static/js/4.7cf324e5.chunk.js"},{"revision":"bd8f8f973a9e5b7be5a2148603d11a2d","url":"static/js/40.29581d8b.chunk.js"},{"revision":"0ef87c27e312af7b252dd364f5a0fb15","url":"static/js/41.6f72ac80.chunk.js"},{"revision":"7d77b3f078a31df400b5b6ce2a8e6e10","url":"static/js/42.3bb2f879.chunk.js"},{"revision":"154bd5bb314b4886ddd04039bdd62d5b","url":"static/js/43.93f056bb.chunk.js"},{"revision":"cd0d967f38412656f5faf04266c0fdc9","url":"static/js/44.eb99e376.chunk.js"},{"revision":"c9972802b7da6a5f5dcf68a7aafd1de5","url":"static/js/45.31cd91a3.chunk.js"},{"revision":"e463b60dfb7cc0b7efe95246c82a5b67","url":"static/js/46.77db5cc5.chunk.js"},{"revision":"124252c72e8824383c7b773f07210f8d","url":"static/js/47.7e879c0a.chunk.js"},{"revision":"be2406c1c81a7336b57f3e92ef4c4d6f","url":"static/js/5.2ed14587.chunk.js"},{"revision":"dc6ae0e6dc6207bebae8653aac7ccbce","url":"static/js/6.3b786bf2.chunk.js"},{"revision":"d37543803b53f5ff8d72e3f1577281ca","url":"static/js/7.3526a921.chunk.js"},{"revision":"f62e2ab5917d8a8ba8fe24a84959dfbc","url":"static/js/8.4b886997.chunk.js"},{"revision":"7470d20214a2d373fc83cd0a97d693df","url":"static/js/9.f96255a8.chunk.js"},{"revision":"8dff24dfb2ba53baa13488f181a50806","url":"static/js/main.bb54a308.chunk.js"},{"revision":"55b4c46245678abb4a2191d68bced7c9","url":"static/js/runtime-main.1ba9881d.js"}]);

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
