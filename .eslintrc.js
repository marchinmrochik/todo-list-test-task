module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    '@wemake-services/typescript/recommended',
    '@wemake-services/javascript',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
        '*.ts',
        '*.tsx',
      ],
      rules: {
        'no-undef': 'off',
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  rules: {
    'quote-props': ['error', 'as-needed'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'max-len': ['error', { code: 90 }],
  },
}
