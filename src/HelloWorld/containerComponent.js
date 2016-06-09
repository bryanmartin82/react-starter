import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from './actions';
import styles from './styles.css';

class HelloWorldContainer extends Component {
  render() {
    const { msg, color, lastColor } = this.props.helloWorld;
    return (
      <div className={styles.root}>
        <h1 className={styles.element} onClick={this.getRandomColor} style={{color}}>{msg}</h1>
        {color == lastColor && <div>D'oh! Same color.</div>}
      </div>
    );
  }

  getRandomColor = () => {
    this.props.dispatch(ActionCreators.changeColor());
  }
}

function mapState(state) {
  return {
    helloWorld: state.helloWorld
  };
}

export default connect(mapState)(HelloWorldContainer);