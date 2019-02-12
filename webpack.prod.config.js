const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: path.join(__dirname, './src/index.tsx')
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/',
    library: 'rfox',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [{
        test: /\.tsx?$/,
        enforce: 'pre',
        use: [{
          loader: 'tslint-loader',
          options: { /* Loader options go here */ }
        }]
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        include: path.resolve('src')
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve('src')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve('src')
      },
      {
        test: /\.(png|jpg|gif|woff|ttf|eot|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'assets/[name].[hash].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
}