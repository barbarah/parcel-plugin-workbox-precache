const buildServiceWorker = require('./helpers/buildServiceWorker.js');

function precacheFilter(filename) {
  return filename !== 'manifest.webmanifest' &&
    !filename.startsWith('service-worker.') &&
    !filename.endsWith('.map');
}

module.exports = function(bundler) {
  bundler.on('bundled', async (bundle) => {
    await buildServiceWorker(bundle, 'service-worker.js', precacheFilter);
  });
};
