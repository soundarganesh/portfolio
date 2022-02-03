const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  resolve: {
    // to make the babel load .jsx file extension
    extensions: ['', '.js', '.jsx'],
  },
  optimization: {
    // We no not want to minimize our code.
    minimize: false,
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
          modules: true,
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
