import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import Routes from './routes';

export default ({store}) => {
     
    return (
      <Provider store={store}>
        <HashRouter>
          <Routes />
       
        </HashRouter> 
      </Provider>
    )
}