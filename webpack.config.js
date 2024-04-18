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
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
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