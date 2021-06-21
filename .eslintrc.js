module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./', './src']
      }
    }
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/label-has-associated-control': 'off'
  }
}
