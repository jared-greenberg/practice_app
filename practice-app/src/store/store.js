import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers/root_reducer';
import thunk from "redux-thunk";

const saveState = store => next => action => {
    let result = next(action);
    localStorage.setItem('state', JSON.stringify(store.getState()))
    return result;
}

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk, saveState));
}



export default configureStore;