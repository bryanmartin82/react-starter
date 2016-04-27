import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV == 'development';

const APP_ENTRY = './app';
const DIST = 'dist';
const SRC = 'app';
const BASE = path.resolve(__dirname, '..');

const config = {
  module: {},
  resolve: {
    root: [path.resolve('./app')]
  }
};

//TODO:
config.entry = {
  app: DEV
    ? [APP_ENTRY, 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch']
    : [APP_ENTRY]
};

config.output = {
  path: path.join(__dirname, DIST),
  //OccurenceOrderPlugin needed for using chunkhash
  filename: '[name].[chunkhash].js',
  publicPath: ''
};

config.plugins = [
  new HtmlWebpackPlugin({
    title: 'React Starter',
    template: path.join(BASE, SRC, 'index.html'),
    hash: false,
    filename: 'index.html',
    inject: 'body'
  })
];


if (DEV) {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
} else if (PROD) {
  config.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin()
    //TODO: uglify
  );
}


config.module.loaders = [{
  test: /\.(js|jsx)$/,
  loader: 'babel',
  exclude: /node_modules/,
  query: {
    cacheDirectory: true,
    plugins: ['transform-runtime', 'react-hot-loader/babel'],
    presets: ['es2015', 'react', 'stage-0'],
    env: {
      production: {
        presets: ['react-optimize']
      }
    }
  }
}];

export default config;