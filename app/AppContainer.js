import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppContainer extends Component {
  render() {
    const {msg} = this.props.hello;
    return (
      <h1>{msg}</h1>
    );
  }
}

function mapState(state) {
  return {
    hello: state.hello
  };
}

export default connect(mapState)(AppContainer);
