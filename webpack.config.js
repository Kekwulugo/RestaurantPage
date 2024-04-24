const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { runtime } = require('webpack');

module.exports = {
 mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer:{
   static: '.dist',
   watchFiles: {
      paths: ['src/**/*.php', 'public/**/*'],
      options: {
        usePolling: false,
      },
     },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  optimization: {
   runtimeChunk: 'single',
  },
  plugins: [
   new HtmlWebpackPlugin({
    template:'./src/index.html',
    filename: 'index.html',
    inject: 'body',
    title: 'Development',
   }),
  ],
};