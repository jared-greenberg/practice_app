import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let saved = localStorage.myApp;

  const store = configureStore(saved);
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store}/>, root);

})
