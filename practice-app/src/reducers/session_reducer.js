import { RECEIVE_CURRENT_USER, LOGOUT_USER } from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER: 
      return action.creds
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
  
}

export default sessionReducer;