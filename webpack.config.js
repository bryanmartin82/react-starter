import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV == 'development';

const APP_ENTRY = './src';
const DIST = 'dist';

const config = {
  devtool:"eval",
  module: {},
  resolve: {
    root: [path.resolve('./src')]
  }
};

config.entry = {
  app: DEV
    ? ['react-hot-loader/patch', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', APP_ENTRY]
    : [APP_ENTRY]
};

config.output = {
  path: path.join(__dirname, DIST),
  //OccurenceOrderPlugin needed for using chunkhash
  filename: '[name].[hash].js',
  publicPath: ''
};

config.plugins = [
  new HtmlWebpackPlugin({
    title: 'React Starter',
    template: path.join(APP_ENTRY, 'index.ejs'),
    hash: false,
    inject: false,
    appMountId: 'root',
    minify: {
      collapseWhitespace: true
    }
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


config.module.loaders = [
  {
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
  },
  {
    test: /\.css$/,
    loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
  }
];

export default config;