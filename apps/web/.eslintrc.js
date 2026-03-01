// apps/web/.eslintrc.js
module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals'],
  rules: {
    '@next/next/no-img-element': 'off',
    'react/no-unescaped-entities': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/prop-types': 'off',
    'react/jsx-key': 'off',
    'react/no-unknown-property': 'off', // style / className etc
  },
};