import { USER_LOGIN_REQUEST } from '../actions/userLoginRequest';
import { USER_LOGOUT_REQUEST } from '../actions/userLogoutRequest';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      if (action.payload.response === undefined) {
        return action.payload.data;
      } else {
        return action.payload.response;
      }
    case USER_LOGOUT_REQUEST:
      return action.payload;
    default:
      return state;
  }
}
