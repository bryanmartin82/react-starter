import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

import { AppContainer as HMR } from 'react-hot-loader';
import Root from './Root';

let middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger();
  middleware.push(logger);
}
const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

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
  module.hot.accept('./reducers', () => {
    var HotReducer = require('./reducers').default;
    store.replaceReducer(HotReducer);
  });
}