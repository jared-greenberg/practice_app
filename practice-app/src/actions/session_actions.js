import axios from 'axios';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const logoutUser = () => ({
  type: LOGOUT_USER
})

export const loginUser = creds => dispatch => {
    

    /* Note: I was getting a cors error, which I tried to eliminate by using a proxy server */

    // fetch('https://thingproxy.freeboard.io/fetch/http://dev.rapptrlabs.com/Tests/scripts/user-login.php', {
    //   body: {
    //     "email": creds.email,
    //     "password": creds.password
    //   },
    //   method: 'POST'
    // }).then(() => console.log("success"), () => console.log("fail"))
}
