module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
  ],
};
