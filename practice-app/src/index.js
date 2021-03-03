import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  
  let previous = localStorage.getItem('state');
  let state = previous ? JSON.parse(previous) : null;

  const store = configureStore(state);
  const root = document.getElementById('root');

  

  ReactDOM.render(<Root store={store}/>, root);

})
