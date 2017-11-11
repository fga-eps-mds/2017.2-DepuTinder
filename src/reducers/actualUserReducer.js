import { SAVE_ACTUAL_USER } from '../actions/saveActualUser';

export default function (state = {}, action) {
  switch (action.type) {
    case SAVE_ACTUAL_USER:
      return action.payload;
    default:
      return state;
  }
}
