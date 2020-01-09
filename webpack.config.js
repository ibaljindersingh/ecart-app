const WebpackNotifierPlugin = require('webpack-notifier');
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
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      title       : 'App Name',
      contentImage: path.join(__dirname, 'image.png')
    }),
  ]
};