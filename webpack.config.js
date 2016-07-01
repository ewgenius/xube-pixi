const webpack = require('webpack')

module.exports = {
  entry: {
    app: ['babel-polyfill', './.temp.js/xube.js'],
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
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
}
