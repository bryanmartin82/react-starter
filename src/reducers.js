import { combineReducers } from 'redux-immutable';
import helloWorld from 'routes/HelloWorld/reducer';

const rootReducer = combineReducers({
  helloWorld
});

export default rootReducer;