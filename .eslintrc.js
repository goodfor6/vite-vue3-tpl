
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    '@constq/eslint-config-qzr/index',
    '@constq/eslint-config-qzr/vue',
    '@constq/eslint-config-qzr/typescript',
    'plugin:jest/recommended',
    'vue-global-api'
  ],
  globals: {
    defineProps: true,
    defineEmits: true
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  ignorePatterns: ['index.html', '/docker'],
  plugins: [
    'vue',
    '@typescript-eslint',
    'jest'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'complexity': 'off'
  },
}
