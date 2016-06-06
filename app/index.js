import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { AppContainer as HMR } from 'react-hot-loader';
import Root from './RootContainer';

const store = createStore(rootReducer);

render(
  <HMR><Root store={store}/></HMR>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./RootContainer', () => {
    var HotRoot = require('./RootContainer').default;
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