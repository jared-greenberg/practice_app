import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import {loginUser, logoutUser} from './actions/session_actions';
import {addToDo, removeToDo} from './actions/list_actions';

document.addEventListener("DOMContentLoaded", () => {
  

  const store = configureStore();
  const root = document.getElementById('root');
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;
  window.addToDo = addToDo;
  window.removeToDo = removeToDo;

  ReactDOM.render(<Root store={store}/>, root);

})
