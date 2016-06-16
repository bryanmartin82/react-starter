import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from './actions';
import styles from './styles.css';

class HelloWorldContainer extends Component {
  render() {
    const { msg, color, lastColor } = this.props.helloWorld;
    const { changeColor } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.image} onClick={changeColor}/>
        <h1 className={styles.element} style={{color}}>{msg}</h1>
        {color == lastColor && <div>D'oh! Same color.</div>}
      </div>
    );
  }
}

const mapState = state => ({
  helloWorld: state.get('helloWorld')
});

const mapDispatch = (dispatch) => ({
  changeColor() {
    dispatch(ActionCreators.changeColor())
  }
});

export default connect(mapState, mapDispatch)(HelloWorldContainer);