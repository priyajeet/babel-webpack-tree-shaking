'use strict';

let webpack = require('webpack');
let path = require('path');

module.exports = {
  entry: {
    'car.prod': './index.js'
  },

  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },

  plugins: [],

  resolve: {
    modules: [
      path.join(process.cwd(), 'app'),
      'node_modules'
    ],
    extensions: ['.js', '.json']
  },

  devtool: false
};
