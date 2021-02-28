import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './login_form.css';

const LoginForm = () => {

  let curr = useSelector((state) => state.session.email)

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailError, setEmailError] = useState("");
  
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const updatePassword = (pwd) => {
    if (pwd.length > 16) return;
    
    setPassword(pwd);
    if (pwd.length >= 4 && !validPassword) {
      setValidPassword(true);
    }
    else if (validPassword) {
      setValidPassword(false);
    }

    if (pwd.length < 4) {
      setPasswordError("Not enough characters");
    }
    else {
      setPasswordError("");
    }
  }

  const updateEmail = (eml) => {
    setEmail(eml);
    
  }
  
  return (
    
    <form className="login-form">
      <h1>Rapptr Labs</h1>
      <div className="text-inputs">
        <label> Email
          <input type="text" placeholder="user@rapptrlabs.com"/>
          <i className="fas fa-user"></i>
        </label>
        <p className="error">{emailError}</p>


        <label> Password
          <input className={validPassword ? "valid" : ""}
                type="password" 
                placeholder="Must be at least 4 characters"
                onChange={(e) => updatePassword(e.target.value)}/>
          <i className="fas fa-lock"></i>
        </label>
        <p className="error">{passwordError}</p>

      </div>

      <input disabled={!validPassword || !validEmail} type="submit" value="Login"/>


    </form>
  )
}

export default LoginForm;

