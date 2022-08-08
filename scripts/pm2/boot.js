const { startMetricServer, initMetricLifecycle } = require('@tokopedia/skipper/cli/pm2/metric');
const generateNrConfig = require('@tokopedia/skipper/infra/newrelic/generate-config.js');

startMetricServer();
initMetricLifecycle();

(async () => {
  // Script for generating NR config file
  // Just before the App is launched
  await generateNrConfig({ verbose: true });

  // eslint-disable-next-line import/no-unresolved
  require('../../build/server/index');
})();
