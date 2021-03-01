import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/login_form';
import ToDoList from './components/todo_list';

export default ({store}) => (
  <Provider store={store}>
    <HashRouter>

        <Route exact path="/" component={LoginForm}/>
        <Route path="/todo" component={ToDoList}/>

    </HashRouter> 
  </Provider>
)