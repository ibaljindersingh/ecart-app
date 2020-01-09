const path = require('path');

module.exports = {
  module : {
    rules: [
      {
        test   : /\.sass$/,
        loader : 'postcss-loader',
        options: {
          ident  : 'postcss',
          plugins: () => [
            require('postcss-short')(),
          ]
        }
      }
    ]
  },
  plugins: [
   
  ]
};