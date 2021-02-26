import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/login_form'

export default ({store}) => (
  <Provider store={store}>
    <HashRouter>

      <Switch>
        <Route path="/" component={LoginForm}/>
      </Switch>

    </HashRouter> 
  </Provider>
)