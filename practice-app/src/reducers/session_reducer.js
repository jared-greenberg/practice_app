import { RECEIVE_CURRENT_USER, LOGOUT_USER } from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER: 
      localStorage.setItem("appCurrentUser", JSON.stringify(action.currentUser));
      return {email: action.currentUser}
    case LOGOUT_USER:
      localStorage.removeItem("appCurrentUser");
      return {};
    default:
      return state;
  }
  
}

export default sessionReducer;