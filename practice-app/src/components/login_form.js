import React from 'react';
import './login_form.css';

const LoginForm = () => {

  return (
    <form className="login-form">

      <h1>Rapptr Labs</h1>
      <div className="text-inputs">
        <label> Email
          <input type="text" placeholder="user@rapptrlabs.com"/>
          <i class="fas fa-user"></i>
        </label>

        <label> Password
          <input type="password" placeholder="Must be at least 4 characters"/>
          <i class="fas fa-lock"></i>
        </label>
      </div>

      <input type="submit" value="Login"/>


    </form>
  )
}

export default LoginForm;

