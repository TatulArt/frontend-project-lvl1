module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'prefer-template': 'off',
    'no-plusplus': 'off',
    'import/extensions': 'off',
    'no-await-in-loop': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
  },
};
