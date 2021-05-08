const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new WebpackManifestPlugin(),
    new WorkboxPlugin.GenerateSW()
  ],
  optimization: {
    minimizer: [new TerserPlugin()],
  },
});