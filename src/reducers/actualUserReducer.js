import { USER_LOGIN_REQUEST, DELETE_ACTUAL_USER } from '../actions/userLoginRequest';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      if (action.payload.response === undefined) {
        return action.payload.data;
      } else {
        return action.payload.response;
      }
    case DELETE_ACTUAL_USER:
      return action.payload;
    default:
      return state;
  }
}
