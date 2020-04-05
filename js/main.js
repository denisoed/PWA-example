window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(reg => {
        const data = {
          type: 'CACHE_URLS',
          payload: [
            location.href,
            ...performance.getEntriesByType('resource').map(r => r.name)
          ]
        };
        reg.installing.postMessage(data);
        reg.update();
      }).catch(err => console.log('SW registration FAIL:', err));
  }
});
