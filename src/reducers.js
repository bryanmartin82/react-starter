import { combineReducers } from 'redux-immutable';
import helloWorld from 'HelloWorld/reducer';

const rootReducer = combineReducers({
  helloWorld
});

export default rootReducer;