module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env'],
      // configFile: './babel.config.json',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'jsdoc/newline-after-description': 'off',
    'object-curly-spacing': 'off',
    'linebreak-style': 'off',
    'eol-last': 0,
    'require-jsdoc': 'off',
    // eslint-disable-next-line quote-props
    semi: 'off',
    'space-before-function-paren': 'off',
  },
};
