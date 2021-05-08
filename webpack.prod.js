const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const WorkboxPlugin = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new WebpackManifestPlugin(),
    new WorkboxPlugin.GenerateSW(),
    new CopyPlugin({
      patterns: [
        { from: "public/webmanifest.json", to: "." },
        { from: "public/icons/", to: "./icons" }
      ],
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin()],
  },
});