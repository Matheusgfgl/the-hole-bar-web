/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  overrides: [
    {
      files: [
        '**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
        '**/*.test.ts',
      ],
      'extends': [
        'plugin:cypress/recommended',
      ],
      rules: {
        'no-console': ['off'],
      },
    },
  ],
  rules: {
    // --- ESLint
    'eqeqeq': ['error', 'always'],
    'dot-notation': 'error',
    'func-call-spacing': ['error', 'never'],
    'key-spacing': ['error', { 'beforeColon': false }],
    // 'max-len': ['error', { 'code': 120, 'ignoreStrings': true }],
    'no-useless-concat': 'error',
    'prefer-template': 'error',
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
    'object-curly-spacing': ['error', 'always'],
    'space-unary-ops': 'error',
    'template-curly-spacing': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    'quotes': ['error', 'single'],
    'no-trailing-spaces': 'error',
    // 'no-undef': 'error',
    // 'no-unused-vars': 'error',
    'camelcase': ['error', { 'properties': 'never', ignoreDestructuring: true }],
    'no-underscore-dangle': 'error',
    'no-param-reassign': ['error', { 'props': true, 'ignorePropertyModificationsFor': ['state'] }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any',    prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: 'try', next: '*' },
    ],
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'prefer-arrow-callback': 'error',
    'arrow-spacing': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
