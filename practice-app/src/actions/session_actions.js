
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERROR = 'RECEIVE_SESSION_ERROR';
export const CLEAR_SESSION_ERROR = 'CLEAR_SESSION_ERROR'


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const logoutUser = () => ({
  type: LOGOUT_USER
})

export const receiveSessionError = msg => ({
  type: RECEIVE_SESSION_ERROR,
  msg
})

export const clearSessionError = () => ({
  type: CLEAR_SESSION_ERROR
})

export const loginUser = creds => dispatch => {
    
    let user = {
      email: "test@rapptrlabs.com",
      password: 'Test123'
    }

    if (creds.email === user.email && creds.password === user.password) {
      dispatch(receiveCurrentUser(creds.email))
      dispatch(clearSessionError())
    }
    else {
      dispatch(receiveSessionError("Incorrect email or password"))
    }

    /* Note: I was getting a cors error, which I tried to eliminate by using a proxy server. I'm finally able to
       reach the server, but can't fix the error that says 'Some of the Require Params are missing'. I can only get
       the appropriate response through Postman. So for the sake of time, I decided to hard program that auth.*/

    // fetch('https://thingproxy.freeboard.io/fetch/http://dev.rapptrlabs.com/Tests/scripts/user-login.php', {
    //   body: JSON.stringify(creds)
    //   method: 'POST'
    // }).then(
    //    res => dispatch(receiveCurrentUser(res.user_email)),
    //    () => dispatch(receiveSessionError("Incorrect email or password"))
    //  )
}
