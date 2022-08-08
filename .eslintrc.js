const path = require('path');
const tsconfig = require('./tsconfig.json');

const aliases = (tsconfig.compilerOptions || {}).paths || {};

function resolveAlias() {
  return Object.keys(aliases).reduce(function red(prev, curr) {
    const p = path.resolve(__dirname, aliases[curr][0]);
    return [...prev, [curr, p]];
  }, []);
}

module.exports = {
  extends: '@tokopedia/eslint-config/react',
  root: true,
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: resolveAlias(),
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      webpack: {
        config: path.resolve(__dirname, 'import.resolver.js'),
      },
      typescript: {
        project: path.resolve(__dirname, 'tsconfig.json'),
      },
    },
  },
};
