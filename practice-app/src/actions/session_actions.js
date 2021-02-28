export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const receiveCurrentUser = currentUser => {
  type: RECEIVE_CURRENT_USER,
  currentUser
}

export const logoutUser = () => ({
  type: LOGOUT_USER
})

export const loginUser = creds => dispatch => {
  dispatch(receiveCurrentUser(creds))
}
