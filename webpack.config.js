const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin([{ from: 'public' }]),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
  devServer: {
    hot: true,
  }
};
