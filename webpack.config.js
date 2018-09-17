const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const plugins = [
  new CleanWebpackPlugin(['dist'], { root: __dirname })
]

module.exports = {
  mode: 'production',
  entry: {
    "home": path.resolve(__dirname, 'src/entries/box.js'),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'js/[name].[hash].js',
    publicPath: 'dist/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins
}
