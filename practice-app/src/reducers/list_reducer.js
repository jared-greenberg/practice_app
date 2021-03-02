import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from '../actions/list_actions';

const listReducer = (state = {}, action) => {
  let dupState = {...state}
  switch(action.type) {
    case ADD_TODO:
      let idx = Object.entries(dupState).length + 1;
      dupState[idx] = {idx, task: action.task};
      return dupState;
    case REMOVE_TODO:
      delete dupState[action.idx]
      return dupState;
    case EDIT_TODO:
      dupState[action.payload.idx] = action.payload;
      return dupState;
    default:
      return state;
  }
}

export default listReducer