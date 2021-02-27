// import React, {useEffect, useState} from 'react';

const LoginForm = () => {





  return (
    <form>
      <div className="text-inputs">
        <label> Email
          <input type="text" placeholder="user@rapptrlabs.com"/>
        </label>

        <label> Password
          <input type="password" placeholder="Must be at least 4 characters" />
        </label>
      </div>

      <input type="submit" value="login"/>


    </form>
  )
}

export default LoginForm;

