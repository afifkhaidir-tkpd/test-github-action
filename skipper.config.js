const define = require('@tokopedia/skipper/cli/config/define-config');

module.exports = define({
  babel: {},
  serviceWorker: { enabled: false, blacklistedRoutes: [], filename: 'service-worker.js' },
});
