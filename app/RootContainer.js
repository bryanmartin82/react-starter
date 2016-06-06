import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './AppContainer';

export default class RootContainer extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}