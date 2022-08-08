const { serviceV3JestConfig } = require('@tokopedia/lite-testing');

module.exports = {
  ...serviceV3JestConfig({
    frameworkName: 'react',
    transpiler: 'babel',
    externalPackage: {
      graphqlV3: true,
    },
  }),
  coverageReporters: ['json-summary', '@lite-v3/jest-coverage-reporter'],
};
