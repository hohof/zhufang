module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  // parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'prettier/prettier': 'error',
  },
}
