import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV == 'development';

const APP_ENTRY = './app';
const DIST = 'dist';

const config = {
  module: {}
};

config.entry = {
  app: APP_ENTRY
};

config.output = {
  path: path.join(__dirname, DIST),
  //OccurenceOrderPlugin needed for using chunkhash
  filename: '[name].[chunkhash].js',
  publicPath: ''
};

config.plugins = [
  new HtmlWebpackPlugin({
    title: 'React Starter'
  })
];

/*
if (DEV) {
  config.plugins.push(

  );
}
*/

config.module.loaders = [{
  test: /\.(js|jsx)$/,
  loader: 'babel',
  exclude: /node_modules/
}];

export default config;