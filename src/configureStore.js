import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

let middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, createLogger()];
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
  if (module.hot) {
    module.hot.accept('./reducers', (...args) => {
      store.replaceReducer(require('./reducers').default)
    });
  }
  return store;
}