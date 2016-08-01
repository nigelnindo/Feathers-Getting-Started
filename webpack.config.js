var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = './dist';

var config = {

  entry: {
    compose_message: ['./react_components/compose_message.js']
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
