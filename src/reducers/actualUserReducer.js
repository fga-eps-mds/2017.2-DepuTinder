import { SAVE_ACTUAL_USER, DELETE_ACTUAL_USER } from '../actions/saveActualUser';

export default function (state = {}, action) {
  switch (action.type) {
    case SAVE_ACTUAL_USER:
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
