import { RECEIVE_SESSION_ERROR, CLEAR_SESSION_ERROR } from '../actions/session_actions';

const sessionErrorReducer = (state = null, action) => {
  switch(action.type){
    case RECEIVE_SESSION_ERROR:
      return action.msg
    case CLEAR_SESSION_ERROR:
      return null;
    default:
      return state;
  }
}

export default sessionErrorReducer