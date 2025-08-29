const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: [
      {
        directory: '../dist'
      },
      {
        directory: '../public',
        publicPath: '/'
      }
    ],
    hot: true,
    port: 3000,
    historyApiFallback: true
  }
});