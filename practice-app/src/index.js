import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import {loginUser, logoutUser} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  let saved = localStorage.myApp;

  const store = configureStore();
  const root = document.getElementById('root');
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;

  ReactDOM.render(<Root store={store}/>, root);

})
