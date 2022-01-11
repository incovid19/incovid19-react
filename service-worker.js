if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"576ea90de7e17ea80bbbe9c6047e5561","url":"404.html"},{"revision":"e288ac1c440c1a4310bd8e763451e67e","url":"4190e52b2836c751e516.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"576ea90de7e17ea80bbbe9c6047e5561","url":"index.html"},{"revision":"2263aa552a3699c5d34460e463061180","url":"static/css/21.bded3b46.chunk.css"},{"revision":"01085307cc773c41b1a4cc7ba2142693","url":"static/css/22.37ea2fb6.chunk.css"},{"revision":"d0a5dc033a59aa85e238b76f5024d4bc","url":"static/css/3.6c493df4.chunk.css"},{"revision":"7193994a9d9599ddcba68f60a212e200","url":"static/js/0.27a06171.chunk.js"},{"revision":"993e576113d27a2f0426d3b0b9a84bdc","url":"static/js/1.169d7004.chunk.js"},{"revision":"7a9b5d4a0f4fc8ea4b3a709f06534c3f","url":"static/js/12.f09a2355.chunk.js"},{"revision":"c5ff0f215740fa7ef6860ca46ecd00b5","url":"static/js/13.49d3952d.chunk.js"},{"revision":"e933dc8f61a07bb8e79d7d0fcfbfabc1","url":"static/js/14.89931d33.chunk.js"},{"revision":"44b5f3c76b9b0f2a416b2fbd0189214e","url":"static/js/15.c499992c.chunk.js"},{"revision":"02b0af4e0b58b74af7cedf17b2335204","url":"static/js/16.98de7a32.chunk.js"},{"revision":"59c4fa0de567354cfd2221e5cb6b6b45","url":"static/js/17.9ccd42de.chunk.js"},{"revision":"4a6155fbddd4ec258e248a161515acab","url":"static/js/18.2d10c64d.chunk.js"},{"revision":"1b7cfa021270c3d1a9ee9570d403c697","url":"static/js/19.d59a6894.chunk.js"},{"revision":"22d231d93c75d03b153f76c1a1130440","url":"static/js/2.f8bdaf22.chunk.js"},{"revision":"759f874f6645d1de4d5d657e6e40c91f","url":"static/js/20.24b00e79.chunk.js"},{"revision":"f2e2ddd0f3d550a617569aadad666229","url":"static/js/21.fdc292fc.chunk.js"},{"revision":"370990a87f45d5d61efa278f94fee169","url":"static/js/22.fa517c3a.chunk.js"},{"revision":"737f6173c5c1d8e9d583f78e023799e8","url":"static/js/23.ef2a59d8.chunk.js"},{"revision":"e549e25d07769b04c0c6dc88025b9d57","url":"static/js/24.52349789.chunk.js"},{"revision":"8981bfec0b2b6a1ec63724a704e583ae","url":"static/js/25.d20dde28.chunk.js"},{"revision":"d3df5aeddadc084773ed8e0abcc42a3f","url":"static/js/26.aaf5373c.chunk.js"},{"revision":"15870fe9cc82c1b6562312fbcdea914a","url":"static/js/27.a583ee64.chunk.js"},{"revision":"60c47bfebf9c150be828a2614fa5f5e0","url":"static/js/28.249c0cf3.chunk.js"},{"revision":"faf3ddfea4ee8553c68dc6923b9c6db0","url":"static/js/29.8066dd10.chunk.js"},{"revision":"e7fc0cd942cfdd1478d5f0d6d7170bca","url":"static/js/3.357792d1.chunk.js"},{"revision":"67fc7da160af965d74a2f9419c540658","url":"static/js/30.0b7dccee.chunk.js"},{"revision":"b9a0333770e83606416834c9ae4848c4","url":"static/js/31.4726ca98.chunk.js"},{"revision":"f07c80f7ae3cbfd62334b9767a48df0e","url":"static/js/32.3b7cc7ee.chunk.js"},{"revision":"5e1ed471a74f69585a14ac90edb1aa44","url":"static/js/33.ce3fed81.chunk.js"},{"revision":"903a094249aa2501156715d3b07ccf69","url":"static/js/34.8f572542.chunk.js"},{"revision":"7244c98d744302ff13f5f4f8108d79fa","url":"static/js/35.686eab01.chunk.js"},{"revision":"dcfc8f5c3243913cc8ed8e9251aec3ee","url":"static/js/36.4e509edb.chunk.js"},{"revision":"e472b85aacc8bbb7a7a3e49933f227fd","url":"static/js/37.65187c90.chunk.js"},{"revision":"495aebf92c21e9990cd99f34fedeacf2","url":"static/js/38.b5b9fe7d.chunk.js"},{"revision":"2e938cf88efd90bcc1f8a62bc66fb2b3","url":"static/js/39.0c91a536.chunk.js"},{"revision":"a47c771fcac1de61036359a96a90c9e5","url":"static/js/4.2ce586d7.chunk.js"},{"revision":"6b7f5bebf51bc5b01031ed69e8ac0ace","url":"static/js/40.d850c59f.chunk.js"},{"revision":"cc16b4447bc0bb39588294a61080a362","url":"static/js/41.442a1a48.chunk.js"},{"revision":"e36dc9121a36eb22178948fb9c81cfe2","url":"static/js/42.f2a6d604.chunk.js"},{"revision":"5bc6cd9e4bc977b0000a8e40cfa5bb38","url":"static/js/43.4424082a.chunk.js"},{"revision":"7d8a362b73810648754dcc5389162acd","url":"static/js/44.21410f95.chunk.js"},{"revision":"beb2653ad5380cb4c2d54e5773f42b09","url":"static/js/45.e6b4b75f.chunk.js"},{"revision":"c475247a925d5b6f429f4c1125321c22","url":"static/js/46.04f6e022.chunk.js"},{"revision":"c87d3e8bef9ef9ad61b204d30d55fb24","url":"static/js/47.8f9f0f56.chunk.js"},{"revision":"786bff1b9955155727b34ed58f866ee8","url":"static/js/48.2500e190.chunk.js"},{"revision":"76d04b3c04f99fc3608d0d367a0f4961","url":"static/js/49.a479859e.chunk.js"},{"revision":"5cea233587587bcf430ae47b484cb168","url":"static/js/5.6a357b0e.chunk.js"},{"revision":"53ec620109e27d7e133a061d751f2ec4","url":"static/js/6.117d81ed.chunk.js"},{"revision":"9598b2ce88ff3fe2d1ad5bb8fe54e5d8","url":"static/js/7.b710bb5e.chunk.js"},{"revision":"19f5f22f27722165f01b64540e7d58af","url":"static/js/8.3bbcb140.chunk.js"},{"revision":"b0d06b4b5a37e36c2b8636e67cf6a00e","url":"static/js/9.886bd0a4.chunk.js"},{"revision":"9bc3d1b63d4efdca5fb9b9644a414d79","url":"static/js/main.a9723205.chunk.js"},{"revision":"d42757513fe91f8116003cd708a776bd","url":"static/js/runtime-main.f7c2f20b.js"}]);

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
