var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = './public/js';

var config = {

  entry: {
    chat_app: ['./react_components/initialize.js']
  },

  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  },

  resolve: {
    extensions: ['','.js','.json']
  }

};

module.exports = config;
