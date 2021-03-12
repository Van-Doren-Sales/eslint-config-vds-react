module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-hooks'],
  rules: {
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'crlf',
      },
    ],
    'no-irregular-whitespace': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'windows'],
    semi: ['error', 'always'],
    'eol-last': ['error', 'always'],
    quotes: ['error', 'single'],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
  },
};
