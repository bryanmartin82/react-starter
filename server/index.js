import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import _debug from 'debug';

const app = express();
const compiler = webpack(config);
const debug = _debug('app:server');

app.use(WebpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(WebpackHotMiddleware(compiler));

app.listen(3000, '0.0.0.0', err => {
  if (err) {
    debug(err);
  } else {
    debug('Dev server running at 0.0.0.0:3000');
  }
});

