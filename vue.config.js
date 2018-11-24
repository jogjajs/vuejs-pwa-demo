const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

module.exports = {

  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
    }
  },

  configureWebpack: {
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './public/index.html'),
          path.join(__dirname, './public/**/*.css'),
          path.join(__dirname, './src/**/*.vue'),
          path.join(__dirname, './src/**/*.js'),
        ])
      })
    ]
  }
}
