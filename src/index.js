import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import { AppContainer as HMR } from 'react-hot-loader';
import Immutable from 'immutable';
import Root from './Root';

if (process.env.NODE_ENV !== 'production') {
  const immutableDevTools = require('immutable-devtools');
  immutableDevTools(Immutable);
}

const store = configureStore();

render(
  <HMR><Root store={store}/></HMR>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    var HotRoot = require('./Root').default;
    render(
      <HMR><HotRoot store={store}/></HMR>,
      document.getElementById('root')
    );
  });
}