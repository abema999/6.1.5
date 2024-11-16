const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'js', 'index.js'),
  output: {
    filename: 'js/[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: isDev ? 'development' : 'production',
  target: isDev ? 'web' : 'browserslist',
  devtool: isDev ? 'source-map' : false,
  devServer: {
    open: {
      app: {
        name: 'Google Chrome',
      },
    },
    hot: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      favicon: path.resolve(__dirname, 'src', 'favicon.ico'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
    ],
  },
};
