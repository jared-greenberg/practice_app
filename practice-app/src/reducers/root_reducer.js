import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import listReducer from './list_reducer';

const rootReducer = combineReducers({
  list: listReducer,
  session: sessionReducer,
})

export default rootReducer;