module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  rules: {
    'global-require': [0],
    'react/prefer-stateless-function': [0, { ignorePureComponents: 'off' }],
    'comma-dangle': [0],
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'arrow-parens': 0
  },
  globals: {
    window: true,
    document: true
  }
};
