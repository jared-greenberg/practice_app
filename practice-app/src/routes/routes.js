import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({component: Component, ...rest}) => {
    let currentUser = useSelector(state => state.session)
    console.log(!!currentUser.email)
    return (
      <Route {...rest} render={(props) => (
        currentUser.email ? (
          <Component {...props} /> 
        ) : (
          <Redirect to="/" />
        )
      )}
      />
    );
}

export const AuthRoute = ({component: Component, ...rest}) => {
    let currentUser = useSelector(state => state.session)
    console.log(!currentUser.email)
    return ( 
      <Route {...rest} render={(props) => (
        !currentUser.email ? (
          <Component {...props} />
        ) : (
          <Redirect to="/todo" />
        )
      )}
      />
    );
}

