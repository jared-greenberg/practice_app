import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './login_form.css';

const LoginForm = () => {

  let curr = useSelector((state) => state.session.email)


  return (
    
    <form className="login-form">
      <h2>{curr}</h2>
      <h1>Rapptr Labs</h1>
      <div className="text-inputs">
        <label> Email
          <input type="text" placeholder="user@rapptrlabs.com"/>
          <i className="fas fa-user"></i>
        </label>

        <label> Password
          <input type="password" placeholder="Must be at least 4 characters"/>
          <i className="fas fa-lock"></i>
        </label>
      </div>

      <input type="submit" value="Login"/>


    </form>
  )
}

export default LoginForm;

