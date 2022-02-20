const path = require('path');
const webpack = require('webpack');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, 'public'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  resolve: {
    // to make the babel load .jsx file extension
    extensions: ['', '.js', '.jsx'],
  },
  optimization: {
    // minimize our code.
    minimize: true,
    // minimizer: [new TerserPlugin()],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        loader: 'style-loader',
        test: /\.css$/,
      },
      {
        loader: 'css-loader',
        test: /\.css$/,
        options: {
          modules: {
            localIdentName: '[path][local]',
          },
          import: true,
        },
      },
      {
        loader: 'url-loader',
        test: /\.(jpe?g|gif|png|svg|pdf)$/i,
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'public'),
  },
};
