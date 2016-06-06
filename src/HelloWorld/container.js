import React, { Component } from 'react';
import { connect } from 'react-redux';

class HelloWorldContainer extends Component {
  render() {
    const {msg} = this.props.helloWorld;
    return (
      <h1>{msg}</h1>
    );
  }
}

function mapState(state) {
  return {
    helloWorld: state.helloWorld
  };
}

export default connect(mapState)(HelloWorldContainer);