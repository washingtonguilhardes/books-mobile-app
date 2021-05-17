module.exports = {
  root: true,
  parserOptions: {
    browser: true,
    'react-native/react-native': true,
    jest: true,
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react',
    'react-hooks',
    'eslint-plugin-import-helpers',
  ],
  extends: [
    'plugin:react/recommended',
    '@react-native-community',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'comma-dangle': 'off',
    semi: 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/^react/', '/^react-native/', 'module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
