const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.base.js');

module.exports = (env, argv) => {
  const outputDir = path.join(__dirname, 'public');
  const srcDir = path.join(__dirname, 'src');

  return merge(common(env, argv), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      open: true,
      contentBase: outputDir,
      publicPath: '/',
      historyApiFallback: true,
    },
    plugins: [
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
        moduleFilenameTemplate: path.relative(srcDir, '[resourcePath]'),
      }),
    ],
  });
};
