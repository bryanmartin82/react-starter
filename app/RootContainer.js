import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';


export default class RootContainer extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}