const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = env =>
  merge(common(env), {
    mode: 'production',

    optimization: {
      minimizer: [new TerserJSPlugin({})],
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          production: true,
        },
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
      }),
    ],
  });
