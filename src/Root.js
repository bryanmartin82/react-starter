import React, { Component } from 'react';
import { Provider } from 'react-redux';
import HelloWorld from './HelloWorld/Component';

export default class RootContainer extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <HelloWorld />
      </Provider>
    );
  }
}