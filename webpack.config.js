import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV === 'development';
const PROD = ENV === 'production';

const APP_ENTRY = './src';
const DIST = 'dist';

const config = {
  devtool: "cheap-module-eval-source-map",
  module: {},
  resolve: {
    root: [path.resolve('./src'), path.resolve('./static')]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};

config.entry = {
  app: DEV
    ? ['webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', APP_ENTRY]
    : [APP_ENTRY]
};

config.output = {
  path: path.join(__dirname, DIST),
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin("styles.[contenthash].css"),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })
  );
}


config.module.loaders = [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {
      cacheDirectory: true,
      plugins: [
        'transform-runtime',
        'react-hot-loader/babel',
        ["extensible-destructuring", {"mode": "optout", "impl": "immutable"}]],
      presets: ['es2015', 'react', 'stage-0'],
      env: {
        production: {
          presets: ['react-optimize']
        }
      }
    }
  },
  {
    test: /\.(png|jpg|gif)$/,
    loader: 'file-loader?name=images/[name].[hash].[ext]'
  }
];

if (DEV) {
  config.module.loaders.push(
    {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    }
  );
} else if (PROD) {
  config.module.loaders.push(
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
    }
  );
}

export default config;