import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory} from 'react-router';
import HelloWorld from 'HelloWorld/Component';

import 'css/base.css';

export default class RootContainer extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="*" component={HelloWorld} />
        </Router>
      </Provider>
    );
  }
}