import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { ProtectedRoute, AuthRoute } from './routes/routes';
import LoginForm from './components/login_form';
import ToDoList from './components/todo_list';
import NotFoundComponent from './components/not_found';

export default ({store}) => {


    return (
      <Provider store={store}>
        <HashRouter>

          <Switch>
            <AuthRoute exact path="/" component={LoginForm}/>
            <ProtectedRoute path="/todo" component={ToDoList}/>
            <Route path="/" component={NotFoundComponent}/>
          </Switch>

        </HashRouter> 
      </Provider>
    )
}