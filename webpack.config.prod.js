const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    app: ['babel-polyfill', './.temp/js/xube.js'],
    vendor: [
      'pixi.js'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: './build'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0']
      }
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }],
    postLoaders: [{
      include: path.resolve(__dirname, 'node_modules/pixi.js'),
      loader: 'transform?brfs'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
