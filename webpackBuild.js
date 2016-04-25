import webpack from 'webpack';
import webpackConfig from './webpack.config.js';
import Debug from 'debug';

const debug = Debug('app:build');

const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  const statsObj = stats.toJson();
  if (err) {
    debug('Webpack encountered error.', err);
  } else if (statsObj.errors.length) {
    debug('Webpack encountered error while compiling');
    debug(statsObj.errors.join('\n'));
  } else {
    debug('Webpack built');
    debug(stats.toString({
      chunks: false,
      colors: true
    }));
  }
});

