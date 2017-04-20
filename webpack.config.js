const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.json' ]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        include: [
          path.resolve(__dirname, 'js'),
          path.resolve('node_modules/preact-compat/src')
        ],
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css/,
        use: [ 'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]

      }
    ]
  }
}
