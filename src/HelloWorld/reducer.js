import * as Actions from './actions';

const helloWorld = function(state = {
  msg: 'Hello World!',
  color: 'black'
}, action) {
  switch(action.type) {
    case Actions.HELLO_WORLD_CHANGE_COLOR:
      return Object.assign({}, state, {color: action.color, lastColor: state.color});
    default:
      return state;
  }
};

export default helloWorld;
