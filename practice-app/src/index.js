import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import {loginUser, logoutUser} from './actions/session_actions';
import {addToDo, removeToDo} from './actions/list_actions';

document.addEventListener("DOMContentLoaded", () => {
  
  let previous = localStorage.getItem('state');
  let state = previous ? JSON.parse(previous) : null;

  const store = configureStore(state);
  const root = document.getElementById('root');

  window.getState = store.getState;
  

  ReactDOM.render(<Root store={store}/>, root);

})
