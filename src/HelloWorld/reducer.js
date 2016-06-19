import Immutable from 'immutable';
import * as Actions from './actions';
import getRandomColor from 'common/utils/getRandomColor';

const helloWorld = function(state = Immutable.Map({
  msg: 'Hello World!',
  color: getRandomColor()
}), action) {
  switch(action.type) {
    case Actions.HELLO_WORLD_CHANGE_COLOR:
      return state
        .set('color', action.color);
    default:
      return state;
  }
};

export default helloWorld;
