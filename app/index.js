import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { AppContainer } from 'react-hot-loader';
import Root from './RootContainer';

const store = createStore(rootReducer);

render(
  <AppContainer><Root store={store}></Root></AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./RootContainer', () => {
    var HotRoot = require('./RootContainer').default;
    render(
      <AppContainer><HotRoot store={store}></HotRoot></AppContainer>,
      document.getElementById('root')
    );
  });
  module.hot.accept('./reducers', () => {
    var HotReducer = require('./reducers').default;
    store.replaceReducer(HotReducer);
  });
}