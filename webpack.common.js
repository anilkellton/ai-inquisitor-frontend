const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      images: path.resolve(__dirname, './public/images'),
      styles: path.resolve(__dirname, './public/css'),
      fonts: path.resolve(__dirname, './public/fonts'),
    },
  },
  performance: {
    maxAssetSize: 400000,
    maxEntrypointSize: 400000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(jpe?g|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            include: path.join(__dirname, 'src'),
            outputPath: 'images',
          },
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'fonts',
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: {
                  removeViewBox: false,
                },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      sentryUrl: process.env.SENTRY_URL,
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
      gTagUid: process.env.GOOGLE_TAG_UNIVERSAL_ID,
      gTagUrl:
      `${process.env.GOOGLE_TAG_URL}${process.env.GOOGLE_TAG_UNIVERSAL_ID}`,
    }),
  ],
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000,
  },
};
