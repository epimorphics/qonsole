// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: false,
    jquery: true,
    amd: true
  },
  extends: 'airbnb-es5',
  // required to lint *.vue files
  plugins: [
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // don't require return in jsdoc
    'valid-jsdoc': ["error", { "requireReturn": false }],
    // allow anonymous functions
    'func-names': 0,
  }
}
