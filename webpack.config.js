const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, './src/demo.tsx')
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/demo.html')
    })
  ],

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
            limit: 8192
          }
        }]
      }
    ]
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
}