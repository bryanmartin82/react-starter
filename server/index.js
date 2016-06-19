import express from 'express';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import config from '../webpack.config';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import _debug from 'debug';

const app = express();
const compiler = webpack(config);
const debug = _debug('app:server');

app.use(historyApiFallback({
  verbose: false
}));

app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
  stats: {
    colors: true,
    chunks:false
  }
}));

app.use(WebpackHotMiddleware(compiler));

app.listen(3000, '0.0.0.0', err => {
  if (err) {
    debug(err);
  } else {
    debug('Dev server running at 0.0.0.0:3000');
  }
});
