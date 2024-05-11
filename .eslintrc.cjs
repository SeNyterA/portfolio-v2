module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],

  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'avoid',
        semi: false,
        trailingComma: 'none',
        endOfLine: 'auto',
        jsxSingleQuote: true,
        useTabs: false,
        singleQuote: true
      }
    ]
  }
}