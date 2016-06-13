import Immutable from 'immutable';
import * as Actions from './actions';

const helloWorld = function(state = Immutable.Map({
  msg: 'Hello World!',
  color: 'black'
}), action) {
  switch(action.type) {
    case Actions.HELLO_WORLD_CHANGE_COLOR:
      return state
        .set('color', action.color)
        .set('lastColor', state.get('color'));
    default:
      return state;
  }
};

export default helloWorld;
