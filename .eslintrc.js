module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: ['always'],
    'max-len': ['error', { code: 140 }],
    'no-console': [
      'error',
      {
        allow: [
          'error',
          'warn',
          'info',
          'debug'
        ]
      }
    ],
    // https://eslint.org/docs/rules/no-param-reassign#disallow-reassignment-of-function-parameters-no-param-reassign
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'accumulator', // for reduce accumulators
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
        'el', // for forEach
        'request', // for Axios requests
        'response', // for Axios responses
        'payload', // for Axios
        'row', // for row tables
        'state' // for Vuex
      ]
    }],
    'no-prototype-builtins': 'off',
    'prefer-default-export': 'off',
    'linebreak-style': 'off',
    'no-plusplus': 'off',
    'no-minusminus': 'off',
    'operator-assignment': 'off',
    'arrow-parens': [2, 'as-needed'],
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false
    }],
    // https://github.com/benmosher/eslint-plugin-import
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off'
  }
}
