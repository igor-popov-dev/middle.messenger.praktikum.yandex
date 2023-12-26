module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    '@stylistic/js'
  ],
  'rules': {
    'quotes': ['error', 'single'],  
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@stylistic/js/eol-last': 1,
    'no-undef': 'warn',
  }
};
