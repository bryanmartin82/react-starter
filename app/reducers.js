import { combineReducers } from 'redux';

const hello = function(state = {msg: 'Hello World!'}) {
  return state;
};

const rootReducer = combineReducers({
  hello
});

export default rootReducer;