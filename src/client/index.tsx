import registerClient from '@tokopedia/skipper/client';
import { InitEventTrackerWithNR } from '@tokopedia/lite-tracker/dist/client/initEventTrackerWithNR';

/**
 * Skipper client entry point. Append any global variables or script
 * initialization in either `beforeRegister` or `afterRegister`.
 *
 * The difference between these functions:
 * `beforeRegister` will run before the document hydration process.
 * `afterRegister` will run after the document hydration process.
 *
 */
const client = registerClient({
  beforeRegister: async () => {
    InitEventTrackerWithNR();
  },
  afterRegister: async () => {
    return;
  },
});

if (module.hot) {
  module.hot.accept();
}

export default client;
