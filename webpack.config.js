const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'), // bundle file path
  SRC: path.resolve(__dirname, 'src'), // source folder path ->
  PUBLIC: path.resolve(__dirname, 'public'), // public folder path ->
  NODE_MODULES: path.resolve(__dirname, 'node_modules')
};

// paths that should be cleaned
const pathsToClean = ['dist', 'build'];

const cleanOptions = {
  verbose: true,
  dry: false
};

const compressionOptions = {
  asset: '[path].gz[query]',
  algorithm: 'gzip',
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0.8
};

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'public'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: paths.SRC,
    historyApiFallback: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.PUBLIC, 'index.html')
    }), // serves up html
    new CleanWebpackPlugin(pathsToClean, cleanOptions), // clean ./build
    // gzip assets
    new CompressionPlugin(compressionOptions),
    new CopyWebpackPlugin([{ from: paths.PUBLIC, to: paths.DIST }], {
      ignore: ['index.html']
    })
  ],
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'react-svg-loader'
          },
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.scss$/,
          /\.sass$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
          /\.svg$/
        ],
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          // {
          //   loader: 'resolve-url-loader',
          //   options: { includeRoot: paths.PUBLIC }
          // },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              importLoaders: 2,
              sourceMap: true,
              includePaths: [paths.PUBLIC]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [paths.PUBLIC]
            }
          }
        ]
      }
    ]
  }
};
