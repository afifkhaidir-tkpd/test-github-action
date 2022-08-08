module.exports = {
  '*.{js,mjs,jsx,ts,tsx}': ['prettier --config .prettierrc.js --write', 'eslint --fix'],
  '*.json': ['prettier --config .prettierrc.js --write', 'sort-package-json'],
};
