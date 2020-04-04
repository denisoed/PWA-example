if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      // registration.active;
      registration.update();
      console.log('Service worker successfully registered on scope', registration.scope);
    }).catch(function (error) {
      console.log('Service worker failed to register');
    });
  });
}
