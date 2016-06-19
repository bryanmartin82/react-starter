import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from './actions';

import styles from './styles.css';
import checkmark from 'svg/icons/checkmark.svg';
import Icon from 'common/components/Icon/Component';

class HelloWorldContainer extends Component {
  render() {
    const { msg, color } = this.props.helloWorld;
    const { changeColor } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.content} style={{backgroundColor: color}}>
          <Icon svg={checkmark} className={styles.interactive} onClick={changeColor} size="64" style={{color}} />
          <h1 className={styles.element}>{msg}</h1>
        </div>
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