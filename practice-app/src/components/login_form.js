import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validate } from 'email-validator';
import { loginUser, clearSessionError } from '../actions/session_actions';

import './login_form.css';

const LoginForm = () => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailError, setEmailError] = useState("");
  
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const sessionError = useSelector((state) => state.sessionError)

  
  const updatePassword = (pwd) => {
    dispatch(clearSessionError())

    if (pwd.length > 16) return;
    
    setPassword(pwd);
    if (pwd.length >= 4) {
      setValidPassword(true);
    }
    else if (validPassword) {
      setValidPassword(false);
    }

    if (pwd.length === 0 || pwd.length >= 4) {
      setPasswordError("");
    }
    else {
      setPasswordError("Not enough characters")
    }
   
  }

  const updateEmail = (eml) => {
    dispatch(clearSessionError())
    if (eml.length > 50) return;

    setEmail(eml);
    
    
    if (validate(eml)) {
      setValidEmail(true)
      setEmailError("");
    }
    else {
      setValidEmail(false);
      setEmailError("Not a valid email");
    }

    if (eml.length === 0) {
      setEmailError("");
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(loginUser({email, password}))
  }

  
  return (
    
    <form className="login-form" onSubmit={submitForm}>
      <h1>Rapptr Labs</h1>
      <div className="text-inputs">
        <label> Email
          <input className={email.length > 0 && !validEmail ? "invalid" : ""}
                 type="text"
                 value={email} 
                 placeholder="user@rapptrlabs.com"
                 onChange={(e) => updateEmail(e.target.value)}
          />
          <i className="fas fa-user"></i>
          <p className="error input-error">{emailError}</p>
        </label>


        <label> Password
          <input className={password.length > 0 && !validPassword ? "invalid" : ""}
                type="password" 
                value={password}
                placeholder="Must be at least 4 characters"
                onChange={(e) => updatePassword(e.target.value)}
          />
          <i className="fas fa-lock"></i>
          <p className="error input-error">{passwordError}</p>
        </label>

      </div>

      <input disabled={!validPassword || !validEmail} type="submit" value="Login"/>
      <p className="error session-error">{sessionError}</p>


    </form>
  )
}

export default LoginForm;

