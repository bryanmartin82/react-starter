import { combineReducers } from 'redux';
import helloWorld from 'HelloWorld/reducer';

const rootReducer = combineReducers({
  helloWorld
});

export default rootReducer;