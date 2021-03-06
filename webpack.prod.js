const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      },
      canPrint: true
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    }),
    new webpack.NormalModuleReplacementPlugin(/js\/environments\/environment\.ts/, './environment.prod.ts')
  ]
});
