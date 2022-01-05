module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_',
      },
    ],
    'no-use-before-define': 0,
    'no-plusplus': 0,
    'no-control-regex': 0,
    'no-nested-ternary': 0,
    'no-underscore-dangle': ['error', { allow: ['_id', '_name', '__ref'] }],
    'no-shadow': 0,
    'no-console': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'react/react-in-jsx-scope': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.ts', 'tsx'],
      },
    ],
    'react/jsx-curly-newline': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/no-danger': 0,
    'import/prefer-default-export': 'off',
    'react/display-name': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['Select'],
        depth: 2,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
    react: {
      version: 'detect',
    },
  },
}
