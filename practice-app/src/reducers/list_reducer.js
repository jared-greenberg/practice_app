import { ADD_TODO, REMOVE_TODO } from '../actions/list_actions';

const listReducer = (state = {}, action) => {
  let dupState = {...state}
  switch(action.type) {
    case ADD_TODO:
      let idx = Object.entries.length + 1;
      dupState[idx] = action.title;
      return dupState;
    case REMOVE_TODO:
      delete dupState[action.id]
      return dupState;
    default:
      return state;
  }
}

export default listReducer