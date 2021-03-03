import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import listReducer from './list_reducer';
import sessionErrorReducer from './session_error_reducer'

const rootReducer = combineReducers({
  list: listReducer,
  session: sessionReducer,
  sessionError: sessionErrorReducer 
})

export default rootReducer;