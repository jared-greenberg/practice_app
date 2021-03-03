import React from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import LoginForm from './components/login_form';
import ToDoList from './components/todo_list';
import NotFoundComponent from './components/not_found';

export default () => {
  
  let loggedin = useSelector((state) => !!state.session.email);

  return (
        <Switch>
              <Route path="/login">
                {loggedin ? <Redirect to="/todo"/> : <LoginForm/>}
              </Route>
              
              <Route path="/todo">
                  {loggedin ? <ToDoList/> : <Redirect to="/login"/>}
              </Route>

              <Route exact path="/">
                  {loggedin ? <Redirect to="/todo" /> : <Redirect to="/login"/>}
              </Route>

              <Route path="/" component={NotFoundComponent}/>
          </Switch>
      )
}