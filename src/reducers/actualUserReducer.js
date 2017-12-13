import { USER_LOGIN_REQUEST } from '../actions/userLoginRequest';
import { USER_LOGOUT_REQUEST } from '../actions/userLogoutRequest';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST: {
      localStorage.setItem('userToken', action.payload.data.user.userToken);
      localStorage.setItem('userName', action.payload.data.user.userName);
      localStorage.setItem('userEmail', action.payload.data.user.userEmail);
      const user = {
        userName: localStorage.getItem('userName'),
        userToken: localStorage.getItem('token'),
        userEmail: localStorage.getItem('userEmail'),
        message: action.payload.data.message,
      };
      return user;
    }
    case USER_LOGOUT_REQUEST:
      return action.payload;
    default:
      return state;
  }
}
