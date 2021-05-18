const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
    port: 8000,
    watchContentBase: true,
    hot: true,
  },
};
